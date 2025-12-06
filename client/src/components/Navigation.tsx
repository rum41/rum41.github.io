import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'wouter';

interface NavItem {
  label: string;
  href: string;
  submenu?: NavItem[];
}

const navItems: NavItem[] = [
  { label: '首頁', href: '/' },
  {
    label: '關於本系',
    href: '/about',
    submenu: [
      { label: '系所簡介', href: '/about' },
      { label: '師資介紹', href: '/faculty' },
      { label: '教室設備', href: '/facilities' },
    ],
  },
  {
    label: '課程資訊',
    href: '/curriculum',
    submenu: [
      { label: '課程規劃', href: '/curriculum' },
      { label: '檔案下載', href: '/downloads' },
    ],
  },
  { label: '招生訊息', href: '/admission' },
  { label: '最新消息', href: '/news' },
  { label: '聯絡我們', href: '/contact' },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubmenu = (label: string) => {
    setExpandedMenu(expandedMenu === label ? null : label);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl">資</span>
              </div>
              <div className="hidden md:block">
                <h1 className="text-sm md:text-base font-bold text-primary">勤益資管系</h1>
                <p className="text-xs text-muted-foreground">Information Management</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link href={item.href}>
                  <button className="px-4 py-2 text-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1 font-medium">
                    {item.label}
                    {item.submenu && <ChevronDown size={16} />}
                  </button>
                </Link>

                {/* Desktop Submenu */}
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                    {item.submenu.map((subitem) => (
                      <Link key={subitem.label} href={subitem.href}>
                        <button className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors duration-150">
                          {subitem.label}
                        </button>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-primary" />
            ) : (
              <Menu size={24} className="text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-border">
            {navItems.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <Link href={item.href}>
                    <button className="flex-1 text-left px-4 py-3 text-foreground hover:bg-secondary transition-colors font-medium">
                      {item.label}
                    </button>
                  </Link>
                  {item.submenu && (
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className="px-4 py-3 text-primary"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          expandedMenu === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Submenu */}
                {item.submenu && expandedMenu === item.label && (
                  <div className="bg-secondary">
                    {item.submenu.map((subitem) => (
                      <Link key={subitem.label} href={subitem.href}>
                        <button className="w-full text-left px-8 py-2 text-sm text-foreground hover:text-primary transition-colors">
                          {subitem.label}
                        </button>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

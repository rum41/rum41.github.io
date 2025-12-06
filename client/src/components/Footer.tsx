import { Mail, Phone, MapPin, Facebook, Linkedin } from 'lucide-react';
import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white mt-20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-heading">國立勤益科技大學</h3>
            <p className="text-sm text-blue-100 mb-4">
              資訊管理系致力於培養具備資訊管理、商業智慧和企業系統整合能力的專業人才。
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-heading">快速連結</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <a className="hover:text-accent transition-colors">關於本系</a>
                </Link>
              </li>
              <li>
                <Link href="/curriculum">
                  <a className="hover:text-accent transition-colors">課程資訊</a>
                </Link>
              </li>
              <li>
                <Link href="/admission">
                  <a className="hover:text-accent transition-colors">招生訊息</a>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <a className="hover:text-accent transition-colors">最新消息</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-heading">相關資源</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.ncut.edu.tw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  勤益首頁
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent transition-colors"
                >
                  校務行政系統
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent transition-colors"
                >
                  圖書館
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent transition-colors"
                >
                  學生入口網
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-heading">聯絡資訊</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <div>
                  <p>(04) 2392-4505</p>
                  <p className="text-xs text-blue-100">
                    分機 7911(網頁), 7912(課務)
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:mis@ncut.edu.tw"
                  className="hover:text-accent transition-colors"
                >
                  mis@ncut.edu.tw
                </a>
              </div>
              <div className="flex gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-xs">
                  411030 臺中市太平區坪林里中山路二段57號
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100">
            <p>
              &copy; {currentYear} 國立勤益科技大學資訊管理系. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                隱私政策
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                使用條款
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                網站地圖
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { ArrowRight, BookOpen, Users, Briefcase, Award, Calendar, Bell } from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

interface EventItem {
  id: number;
  title: string;
  date: string;
  location: string;
  time: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: '[徵才]午餐·相遇未來 ｜ 與 iPEBG 共啟全球智慧製造新篇章',
    date: '2025-12-03',
    category: '徵才',
    excerpt: '鴻海 iPEBG 團隊走進校園，提供現場面試機會，當天帶走 Offer！',
  },
  {
    id: 2,
    title: '【鼎新數智股份有限公司】2026菁英實習招募',
    date: '2025-11-15',
    category: '實習',
    excerpt: '歡迎大四及碩二應屆畢業生報名，以留任為前提順利接軌就業。',
  },
  {
    id: 3,
    title: '2026台積電預辦登積計畫：預聘暨研發替代役招募',
    date: '2025-10-16',
    category: '徵才',
    excerpt: '符合資格者可享優先面試機會、優於同業的整體薪酬。',
  },
];

const upcomingEvents: EventItem[] = [
  {
    id: 1,
    title: '資訊管理系實習說明會',
    date: '2025-12-21',
    location: '工程館 B1 演講廳',
    time: '13:00-15:00',
  },
  {
    id: 2,
    title: '碩士專班聯合書報時間',
    date: '2025-12-28',
    location: '資管系辦公室',
    time: '待定',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative h-96 md:h-[500px] bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/images/hero-background.jpg)',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60"></div>
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-heading">
            資訊管理系
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-blue-100">
            培養具備資訊管理、商業智慧和企業系統整合能力的專業人才
          </p>
          <Link href="/about">
            <button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
              了解更多 <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-heading text-primary">
            系所特色
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: '完整課程規劃',
                description: '涵蓋資訊管理、商業智慧、企業系統等核心領域',
              },
              {
                icon: Users,
                title: '優秀師資團隊',
                description: '具備業界實務經驗和學術研究能力的教師陣容',
              },
              {
                icon: Briefcase,
                title: '產業合作',
                description: '與知名企業建立實習和就業合作關係',
              },
              {
                icon: Award,
                title: '學生成就',
                description: '多位學生獲得國內外競賽獎項和認可',
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-heading text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-heading text-primary flex items-center gap-3">
              <Bell size={32} className="text-accent" />
              最新消息
            </h2>
            <Link href="/news">
              <button className="text-accent hover:text-primary transition-colors font-semibold flex items-center gap-2">
                查看全部 <ArrowRight size={20} />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {newsItems.map((news) => (
              <div
                key={news.id}
                className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-block bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {news.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(news.date).toLocaleDateString('zh-TW')}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-heading text-foreground line-clamp-2 hover:text-primary transition-colors">
                  {news.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {news.excerpt}
                </p>
                <button className="text-accent hover:text-primary font-semibold text-sm flex items-center gap-1 transition-colors">
                  閱讀更多 <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-heading text-primary flex items-center justify-center gap-3">
            <Calendar size={32} className="text-accent" />
            近期活動
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200 p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">
                      {new Date(event.date).getDate()}
                    </span>
                    <span className="text-white text-xs">
                      {new Date(event.date).toLocaleDateString('zh-TW', {
                        month: 'short',
                      })}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 text-heading text-primary">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      📍 {event.location}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      🕐 {event.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-heading">
            準備加入我們嗎？
          </h2>
          <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            無論您是高中應屆畢業生或在職專班學生，我們都有適合您的課程和發展路徑。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admission">
              <button className="bg-white text-primary hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                瞭解招生資訊
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                聯絡我們
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

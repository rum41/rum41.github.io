import { ArrowRight, Users, Target, Lightbulb } from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface Faculty {
  id: number;
  name: string;
  title: string;
  specialty: string;
  email: string;
}

const facultyList: Faculty[] = [
  {
    id: 1,
    name: '張裕幸',
    title: '主任',
    specialty: 'ERP系統、商業流程管理',
    email: 'eric_chang@ncut.edu.tw',
  },
  {
    id: 2,
    name: '李明華',
    title: '教授',
    specialty: '資料庫、大數據分析',
    email: 'mhlee@ncut.edu.tw',
  },
  {
    id: 3,
    name: '王美玲',
    title: '副教授',
    specialty: '商業智慧、數據視覺化',
    email: 'meilingwang@ncut.edu.tw',
  },
  {
    id: 4,
    name: '陳建宏',
    title: '助理教授',
    specialty: '資訊安全、網路管理',
    email: 'chenhong@ncut.edu.tw',
  },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-heading">
            關於本系
          </h1>
          <p className="text-lg text-blue-100">
            了解國立勤益科技大學資訊管理系的發展歷程、教育目標和師資陣容
          </p>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-heading text-primary">
                系所簡介
              </h2>
              <p className="text-foreground mb-4 leading-relaxed">
                國立勤益科技大學資訊管理系成立於民國 85 年，致力於培養具備資訊管理、商業智慧和企業系統整合能力的專業人才。本系擁有完整的課程規劃和優秀的師資團隊，為學生提供理論與實務並重的教育環境。
              </p>
              <p className="text-foreground mb-6 leading-relaxed">
                系所設有日間部大學部、進修部大學部、日間部碩士班和進修部碩士班，提供多元的學習路徑。我們與業界保持密切合作，為學生創造豐富的實習和就業機會。
              </p>
              <Link href="/curriculum">
                <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-lg">
                  查看課程規劃 <ArrowRight size={20} />
                </button>
              </Link>
            </div>
            <div
              className="h-80 rounded-xl bg-cover bg-center shadow-lg"
              style={{
                backgroundImage: 'url(/images/department-feature.jpg)',
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-heading text-primary">
            教育目標與核心價值
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: '教育目標',
                items: [
                  '培養資訊管理專業人才',
                  '提升商業智慧應用能力',
                  '強化企業系統整合技能',
                  '發展國際競爭力',
                ],
              },
              {
                icon: Lightbulb,
                title: '核心價值',
                items: [
                  '理論與實務並重',
                  '創新與卓越精神',
                  '產學合作發展',
                  '社會責任承諾',
                ],
              },
              {
                icon: Users,
                title: '學生發展',
                items: [
                  '專業知識與技能',
                  '團隊合作能力',
                  '問題解決能力',
                  '終身學習精神',
                ],
              },
            ].map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-border p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-heading text-primary">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-foreground">
                        <span className="text-accent font-bold mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-heading text-primary">
            優秀師資
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyList.map((faculty) => (
              <div
                key={faculty.id}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200 p-6 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-xl">
                    {faculty.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-center mb-1 text-heading text-primary">
                  {faculty.name}
                </h3>
                <p className="text-center text-sm font-semibold text-accent mb-3">
                  {faculty.title}
                </p>
                <p className="text-center text-xs text-muted-foreground mb-4">
                  {faculty.specialty}
                </p>
                <a
                  href={`mailto:${faculty.email}`}
                  className="block text-center text-xs text-primary hover:text-accent transition-colors"
                >
                  {faculty.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-heading text-primary">
            教室與設備
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: '電腦實驗室',
                description: '配備最新的電腦設備，支持各類軟體開發和數據分析工作。',
                features: ['高效能工作站', 'ERP系統環境', '數據分析軟體'],
              },
              {
                title: '多媒體教室',
                description: '現代化的教學環境，配備投影設備和互動白板。',
                features: ['4K投影機', '互動白板', '音響系統'],
              },
              {
                title: '研討室',
                description: '為學生提供小組討論和專題研究的空間。',
                features: ['靈活配置', '視訊會議', '協作工具'],
              },
              {
                title: '圖書資源',
                description: '豐富的專業書籍和電子資源支持學習和研究。',
                features: ['專業期刊', '電子資料庫', '線上資源'],
              },
            ].map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-border p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-heading text-primary">
                  {facility.title}
                </h3>
                <p className="text-foreground mb-4">{facility.description}</p>
                <div className="flex flex-wrap gap-2">
                  {facility.features.map((feature, i) => (
                    <span
                      key={i}
                      className="bg-secondary text-primary text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

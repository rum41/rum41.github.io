import { Link } from 'wouter';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-heading text-foreground mb-4">
            頁面未找到
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            抱歉，您訪問的頁面不存在或已被移除。請返回首頁或使用導航菜單。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-lg inline-flex">
              <Home size={20} />
              返回首頁
            </button>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 inline-flex"
          >
            <ArrowLeft size={20} />
            返回上一頁
          </button>
        </div>
      </div>
    </div>
  );
}

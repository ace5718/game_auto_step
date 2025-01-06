// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* 頁面標題 */}
      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold">系統儀表板</h1>
      </div>

      {/* 主要內容區域 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* 系統狀態卡片 */}
        <div className="p-6 bg-white shadow-sm rounded-lg border">
          <h2 className="text-lg font-semibold mb-4">系統狀態</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>在線模擬器</span>
              <span className="font-mono">0 / 0</span>
            </div>
            <div className="flex justify-between">
              <span>活動任務</span>
              <span className="font-mono">0</span>
            </div>
          </div>
        </div>

        {/* 快速操作卡片 */}
        <div className="p-6 bg-white shadow-sm rounded-lg border">
          <h2 className="text-lg font-semibold mb-4">快速操作</h2>
          <div className="space-y-3">
            <Link 
              href="/simulator/new" 
              className="block w-full text-center py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              新增模擬器
            </Link>
            <Link 
              href="/task/new"
              className="block w-full text-center py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              建立任務
            </Link>
          </div>
        </div>

        {/* 系統資訊卡片 */}
        <div className="p-6 bg-white shadow-sm rounded-lg border">
          <h2 className="text-lg font-semibold mb-4">系統資訊</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>版本</span>
              <span className="font-mono">1.0.0</span>
            </div>
            <div className="flex justify-between">
              <span>最後更新</span>
              <span className="font-mono">{new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 頁面底部 */}
      <footer className="mt-auto pt-8 text-center text-gray-500 text-sm">
        <p>© 2024 模擬器控管系統. All rights reserved.</p>
      </footer>
    </div>
  );
}
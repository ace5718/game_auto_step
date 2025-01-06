// src/app/simulator/[id]/page.tsx
"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const SimulatorDetailPage = () => {
  // 使用 next/navigation 的 useParams 替代 useRouter
  const params = useParams();
  const id = params.id;

  // 模擬器詳細資訊和狀態監控邏輯
  const simulator = {
    id,
    name: '模擬器名稱',
    status: '運行中',
    config: {
      port: '8080',
      version: '1.0.0'
    },
    history: [
      { time: '2024-01-06 14:30:00', action: '啟動系統' },
      { time: '2024-01-06 14:31:00', action: '連線成功' },
      { time: '2024-01-06 14:35:00', action: '執行任務' }
    ],
  };

  // 處理快速操作
  const handleQuickAction = (action: string) => {
    console.log(`執行操作: ${action}`);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* 頁面標題與操作列 */}
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-2xl font-bold">模擬器詳細資訊</h1>
        <Link
          href="/simulator"
          className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          返回列表
        </Link>
      </div>

      {/* 基本資訊卡片 */}
      <div className="bg-white shadow-sm rounded-lg border p-6">
        <h2 className="text-lg font-semibold mb-4">基本資訊</h2>
        <div className="space-y-3">
          <div className="flex items-center">
            <span className="w-24 text-gray-600">ID:</span>
            <span className="font-mono">{simulator.id}</span>
          </div>
          <div className="flex items-center">
            <span className="w-24 text-gray-600">名稱:</span>
            <span>{simulator.name}</span>
          </div>
          <div className="flex items-center">
            <span className="w-24 text-gray-600">狀態:</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm bg-green-100 text-green-800">
              {simulator.status}
            </span>
          </div>
        </div>
      </div>

      {/* 配置資訊卡片 */}
      <div className="bg-white shadow-sm rounded-lg border p-6">
        <h2 className="text-lg font-semibold mb-4">配置資訊</h2>
        <div className="space-y-3">
          {Object.entries(simulator.config).map(([key, value]) => (
            <div key={key} className="flex items-center">
              <span className="w-24 text-gray-600">{key}:</span>
              <span className="font-mono">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 操作歷史卡片 */}
      <div className="bg-white shadow-sm rounded-lg border p-6">
        <h2 className="text-lg font-semibold mb-4">操作歷史記錄</h2>
        <div className="space-y-4">
          {simulator.history.map((record, index) => (
            <div key={index} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-md">
              <span className="text-sm text-gray-500 font-mono whitespace-nowrap">
                {record.time}
              </span>
              <span>{record.action}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 快速操作區域 */}
      <div className="flex gap-4 justify-end">
        <button
          onClick={() => handleQuickAction('start')}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
        >
          啟動
        </button>
        <button
          onClick={() => handleQuickAction('stop')}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          停止
        </button>
        <button
          onClick={() => handleQuickAction('restart')}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          重啟
        </button>
      </div>
    </div>
  );
};

export default SimulatorDetailPage;
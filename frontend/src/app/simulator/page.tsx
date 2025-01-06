// src/app/simulator/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SimulatorList from '../../components/simulator/SimulatorList';
import Link from 'next/link';

const SimulatorListPage = () => {
  // 定義模擬器類型
  type Simulator = {
    id: number;
    name: string;
    status: string;
  };

  const [simulators, setSimulators] = useState<Simulator[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const router = useRouter();

  useEffect(() => {
    // 模擬假資料
    const fakeSimulators = [
      { id: 1, name: '模擬器1', status: '運行中' },
      { id: 2, name: '模擬器2', status: '停止' },
      { id: 3, name: '模擬器3', status: '運行中' },
    ];
    setSimulators(fakeSimulators);
  }, []);

  // 處理搜尋
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // 處理排序
  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // 過濾和排序模擬器
  const filteredSimulators = simulators
    .filter((simulator) =>
      simulator.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  // 處理模擬器點擊
  const handleSimulatorClick = (id: number) => {
    router.push(`/simulator/${id}`);
  };

  return (
    <div className="space-y-6">
      {/* 頁面標題 */}
      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold">模擬器列表</h1>
      </div>

      {/* 搜尋和排序區域 */}
      <div className="flex gap-4 items-center">
        <input
          type="text"
          placeholder="搜尋模擬器"
          value={searchTerm}
          onChange={handleSearch}
          className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSort}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          排序 {sortOrder === 'asc' ? '↑' : '↓'}
        </button>
      </div>

      {/* 模擬器列表區域 */}
      <div className="bg-white shadow-sm rounded-lg border p-6">
        <SimulatorList 
          simulators={filteredSimulators} 
          onSimulatorClick={handleSimulatorClick} 
        />
      </div>

      {/* 新增模擬器按鈕 */}
      <div className="flex justify-end">
        <Link 
          href="/simulator/new"
          className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
        >
          <span className="mr-2">+</span>
          新增模擬器
        </Link>
      </div>
    </div>
  );
};

export default SimulatorListPage;
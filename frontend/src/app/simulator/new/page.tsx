// src/app/simulator/new/page.tsx
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const NewSimulatorPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    config: ''
  });

  // 處理輸入變更
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 處理表單提交
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // TODO: 實作API呼叫
      console.log('新模擬器:', formData);
      
      // 導向模擬器列表頁
      router.push('/simulator');
    } catch (error) {
      console.error('建立失敗:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* 頁面標題 */}
      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold">新增模擬器</h1>
      </div>

      {/* 表單區域 */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 名稱輸入欄位 */}
        <div className="space-y-2">
          <label 
            htmlFor="name" 
            className="block text-sm font-medium text-gray-700"
          >
            模擬器名稱
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleInputChange}
            placeholder="請輸入模擬器名稱"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* 配置輸入欄位 */}
        <div className="space-y-2">
          <label 
            htmlFor="config" 
            className="block text-sm font-medium text-gray-700"
          >
            配置設定
          </label>
          <input
            id="config"
            name="config"
            type="text"
            required
            value={formData.config}
            onChange={handleInputChange}
            placeholder="請輸入配置設定"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* 表單按鈕區 */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            建立模擬器
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            取消
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewSimulatorPage;
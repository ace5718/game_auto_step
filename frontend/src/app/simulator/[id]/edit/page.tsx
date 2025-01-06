// src/app/simulator/[id]/edit/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

const EditSimulatorPage = () => {
  // 使用新的路由 hooks
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  // 表單狀態
  const [formData, setFormData] = useState({
    name: '',
    config: '',
    type: '',
    port: ''
  });

  // 載入初始資料
  useEffect(() => {
    // TODO: 從 API 取得模擬器資料
    setFormData({
      name: '模擬器名稱',
      config: '模擬器配置',
      type: 'TYPE-A',
      port: '8080'
    });
  }, [id]);

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
      // TODO: 實作更新 API 呼叫
      console.log('更新模擬器:', { id, ...formData });
      
      // 更新成功後返回詳情頁
      router.push(`/simulator/${id}`);
    } catch (error) {
      console.error('更新失敗:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* 頁面標題與導航 */}
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-2xl font-bold">編輯模擬器</h1>
        <Link
          href={`/simulator/${id}`}
          className="text-gray-600 hover:text-gray-800 transition-colors"
        >
          返回詳情
        </Link>
      </div>

      {/* 編輯表單 */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 名稱欄位 */}
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
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* 類型欄位 */}
        <div className="space-y-2">
          <label 
            htmlFor="type" 
            className="block text-sm font-medium text-gray-700"
          >
            模擬器類型
          </label>
          <input
            id="type"
            name="type"
            type="text"
            required
            value={formData.type}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* 連接埠欄位 */}
        <div className="space-y-2">
          <label 
            htmlFor="port" 
            className="block text-sm font-medium text-gray-700"
          >
            連接埠
          </label>
          <input
            id="port"
            name="port"
            type="text"
            required
            value={formData.port}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* 配置欄位 */}
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
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* 表單按鈕 */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            保存變更
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

export default EditSimulatorPage;
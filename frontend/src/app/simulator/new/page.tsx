"use client";

import React, { useState } from 'react';
import { Input, Button, Form } from '@radix-ui/react';

const NewSimulatorPage = () => {
  const [name, setName] = useState('');
  const [config, setConfig] = useState('');

  const handleSubmit = () => {
    // 處理表單提交邏輯
    console.log('新模擬器:', { name, config });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">新增模擬器</h1>
      <Form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">名稱</label>
          <Input
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-2">配置</label>
          <Input
            value={config}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfig(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>
        <Button type="submit" className="p-2 bg-blue-500 text-white rounded">
          建立
        </Button>
      </Form>
    </div>
  );
};

export default NewSimulatorPage;

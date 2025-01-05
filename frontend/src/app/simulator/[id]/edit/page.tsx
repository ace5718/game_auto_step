"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Input, Form } from '@radix-ui/react-form';
import { Button } from '@radix-ui/react-button';

const EditSimulatorPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [name, setName] = useState('模擬器名稱');
  const [config, setConfig] = useState('模擬器配置');

  const handleSubmit = () => {
    // 處理表單提交邏輯
    console.log('更新模擬器:', { id, name, config });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">編輯模擬器</h1>
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
          保存變更
        </Button>
      </Form>
    </div>
  );
};

export default EditSimulatorPage;

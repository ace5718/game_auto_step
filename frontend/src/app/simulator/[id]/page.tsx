"use client";

import React from 'react';
import { useRouter } from 'next/router';
import { Card, Button, List } from '@radix-ui/react';

const SimulatorDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // 模擬器詳細資訊和狀態監控邏輯
  const simulator = {
    id,
    name: '模擬器名稱',
    status: '運行中',
    history: ['操作1', '操作2'],
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">模擬器詳細資訊</h1>
      <Card className="p-4 border rounded">
        <p>名稱: {simulator.name}</p>
        <p>狀態: {simulator.status}</p>
        <h2 className="text-xl font-semibold mt-4">操作歷史記錄</h2>
        <List className="list-disc pl-5">
          {simulator.history.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </List>
        <Button className="mt-4 p-2 bg-blue-500 text-white rounded" onClick={() => console.log('快速操作')}>
          快速操作
        </Button>
      </Card>
    </div>
  );
};

export default SimulatorDetailPage;

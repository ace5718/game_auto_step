"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SimulatorList from '../../components/simulator/SimulatorList';
import Link from 'next/link';
import { Input, Button, Card } from '@radix-ui/react';

const SimulatorListPage = () => {
  const [simulators, setSimulators] = useState<{ id: number; name: string; status: string }[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

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

  const handleSimulatorClick = (id: number) => {
    router.push(`/simulator/${id}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">模擬器列表</h1>
      <Input
        placeholder="搜尋模擬器"
        value={searchTerm}
        onChange={handleSearch}
        className="mb-4 p-2 border rounded"
      />
      <Button onClick={handleSort} className="mb-4 p-2 bg-blue-500 text-white rounded">
        排序 {sortOrder === 'asc' ? '升序' : '降序'}
      </Button>
      <Card className="p-4 border rounded">
        <SimulatorList simulators={filteredSimulators} onSimulatorClick={handleSimulatorClick} />
      </Card>
      <Link href="/simulator/new">
        <Button className="mt-4 p-2 bg-green-500 text-white rounded">
          新增模擬器
        </Button>
      </Link>
    </div>
  );
};

export default SimulatorListPage;

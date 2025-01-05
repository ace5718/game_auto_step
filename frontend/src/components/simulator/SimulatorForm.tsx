"use client";

import React, { useState } from 'react';

interface SimulatorFormProps {
  onSubmit: (data: { name: string; config: string }) => void;
}

const SimulatorForm: React.FC<SimulatorFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [config, setConfig] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name, config });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>名稱:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>配置:</label>
        <input
          type="text"
          value={config}
          onChange={(e) => setConfig(e.target.value)}
          required
        />
      </div>
      <button type="submit">提交</button>
    </form>
  );
};

export default SimulatorForm;

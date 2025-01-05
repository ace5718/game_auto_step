import React from 'react';

interface Simulator {
  id: number;
  name: string;
  status: string;
}

interface SimulatorCardProps {
  simulator: Simulator;
  onAction: (id: number) => void;
}

const SimulatorCard: React.FC<SimulatorCardProps> = ({ simulator, onAction }) => {
  return (
    <div className="simulator-card">
      <h3>{simulator.name}</h3>
      <p>狀態: {simulator.status}</p>
      <button onClick={() => onAction(simulator.id)}>操作</button>
    </div>
  );
};

export default SimulatorCard;

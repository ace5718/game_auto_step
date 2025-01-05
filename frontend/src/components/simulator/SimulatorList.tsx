import React from 'react';

interface Simulator {
  id: number;
  name: string;
  status: string;
}

interface SimulatorListProps {
  simulators: Simulator[];
  onSimulatorClick: (id: number) => void;
}

const SimulatorList: React.FC<SimulatorListProps> = ({ simulators, onSimulatorClick }) => {
  return (
    <ul>
      {simulators.map((simulator) => (
        <li key={simulator.id} onClick={() => onSimulatorClick(simulator.id)}>
          {simulator.name} - {simulator.status}
        </li>
      ))}
    </ul>
  );
};

export default SimulatorList;

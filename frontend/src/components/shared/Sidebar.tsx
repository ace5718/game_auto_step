import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-700 text-white flex flex-col p-4">
      <nav className="flex flex-col gap-4">
        <a href="/" className="hover:underline">
          儀表板
        </a>
        <a href="/simulator" className="hover:underline">
          模擬器管理
        </a>
        <a href="/task" className="hover:underline">
          任務管理
        </a>
        <a href="/connection" className="hover:underline">
          連線管理
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;

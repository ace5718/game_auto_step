import React from "react";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">模擬器控管系統</h1>
      <div className="flex items-center gap-4">
        <button className="hover:underline">通知</button>
        <button className="hover:underline">主題切換</button>
        <div className="flex items-center gap-2">
          <span>用戶名</span>
          <img
            src="/user-avatar.png"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

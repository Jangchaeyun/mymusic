import { Home, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 pl-8 cursor-pointer hover:text-green-500 transition-color"
        >
          <Home className="w-6 h-6" />
          <p className="font-bold">홈</p>
        </div>
        <div className="px-4 py-2">
          {!showSearchInput ? (
            <div className="flex items-center gap-3 pl-4 cursor-pointer hover:text-green-400 transition-colors">
              <Search className="w-6 h-6" />
              <p className="fong-bold">검색</p>
            </div>
          ) : (
            <div className="flex items-center gap-2 pl-4">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

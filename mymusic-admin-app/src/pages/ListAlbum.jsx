import { useEffect, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import { albumsAPI } from "../services/apiService";
import toast from "react-hot-toast";

const ListAlbum = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAlbums = async () => {
    setLoading(true);
    try {
      const response = await albumsAPI.list();
      setData(response.data.albums);
    } catch (error) {
      toast.error("앨범을 불러오는 데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <DashboardLayout activeMenu="앨범 목록">
      <div className="p-6">
        {/* Header section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            앨범 라이브러리
          </h1>
          <p className="text-gray-600">앨범 컬렉션을 관리하세요</p>
        </div>

        {/* Table container */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          {/* Table header */}
          <div className="bg-gradient-to-r from-[#3be477] to-[#2dd865] px-6 py-4"></div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ListAlbum;

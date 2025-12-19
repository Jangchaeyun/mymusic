import { useEffect, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import { albumsAPI } from "../services/apiService";
import toast from "react-hot-toast";
import { FileText, Image, Palette, Trash2 } from "lucide-react";

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

  const removeAlbum = async (id) => {
    try {
      const response = await albumsAPI.remove(id);
      if (response.status === 204) {
        toast.success("앨범이 삭제되었습니다.");
        await fetchAlbums();
      }
    } catch (error) {
      toast.error("앨범 로딩이 실패하였습니다.");
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <DashboardLayout activeMenu="앨범 목록">
      {loading ? (
        <div className="grid place-items-center min-h-[80vh]">
          <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin"></div>
        </div>
      ) : (
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
            <div className="bg-gradient-to-r from-[#3be477] to-[#2dd865] px-6 py-4">
              <div className="grid grid-cols-12 gap-4 items-center text-white font-semibold">
                <div className="col-span-2 flex items-center gap-2">
                  <Image className="w-4 h-4" />
                  <span>커버</span>
                </div>
                <div className="col-span-3">앨범 이름</div>
                <div className="col-span-3 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>아티스트</span>
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <Palette className="w-4 h-4" />
                  <span>테마</span>
                </div>
                <div className="col-span-2 text-center">상태</div>
              </div>
            </div>
            {/* Table body */}
            <div className="divide-y divide-gray-100">
              {data.length === 0 ? (
                <div className="px-6 py-12 text-center">
                  <Image className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">앨범 없음</p>
                  <p className="text-gray-400 text-sm">앨범을 추가하세요</p>
                </div>
              ) : (
                data.map((album, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-12 gap-4 items-center px-6 py-4 hover:bg-gray-50 transition-colors duration-200"
                  >
                    {/* Album image */}
                    <div className="col-span-2">
                      <div className="w-12 h-12 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
                        <img
                          src={album?.imageUrl}
                          alt={album.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Album name */}
                    <div className="col-span-3">
                      <p className="font-medium text-gray-900 truncate">
                        {album.name}
                      </p>
                    </div>
                    {/* Album description */}
                    <div className="col-span-3">
                      <p className="text-gray-600 truncate">{album.desc}</p>
                    </div>
                    {/* Album color */}
                    <div className="col-span-2">
                      <div className="flex items-center gap-2">
                        <div
                          style={{ backgroundColor: album.bgColour }}
                          title={`Theme color: ${album.bgColour}`}
                          className="w-6 h-6 rounded-full border-2 border-gray-300 shadow-sm"
                        ></div>
                        <span className="text-xs text-gray-500 font-mono">
                          {album.bgColour}
                        </span>
                      </div>
                    </div>
                    {/* Action button */}
                    <div className="col-span-2 flex justify-center">
                      <button
                        onClick={() => removeAlbum(album._id)}
                        title="앨범 삭제"
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 transition-colors duration-200 group"
                      >
                        <Trash2 className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Footer stats */}
          {data.length > 0 && (
            <div className="mt-6 bg-gray-50 rounded-lg px-6 py-4">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>
                  총 앨범 개수:
                  <span className="font-semibold text-gray-900">
                    {data.length}
                  </span>
                </span>
                <span>
                  최근 업데이트된 날짜:
                  <span className="font-semibold text-gray-900">방금 전</span>
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </DashboardLayout>
  );
};

export default ListAlbum;

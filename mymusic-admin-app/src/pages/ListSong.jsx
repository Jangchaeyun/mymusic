import { useEffect, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import { songsAPI } from "../services/apiService";
import toast from "react-hot-toast";
import { Clock, Disc3, Image, Music, Trash2 } from "lucide-react";

const ListSong = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSongs = async () => {
    setLoading(true);
    try {
      const response = await songsAPI.list();
      setData(response.data.songs);
    } catch (e) {
      toast.error("노래를 불러오는 데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const removeSong = async (id) => {
    try {
      const response = await songsAPI.remove(id);
      if (response.status === 204) {
        toast.success("노래 삭제 완료");
        await fetchSongs();
      }
    } catch (error) {
      toast.error("노래 삭제 실패");
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <DashboardLayout activeMenu="노래 목록">
      {loading ? (
        <div className="grid place-items-center min-h-[80vh]">
          <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="p-6">
          {/* Header section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              노래 라이브러리
            </h1>
            <p className="text-gray-600">노래 컬렉션을 관리하세요</p>
          </div>

          {/* Table container */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            {/* Table header */}
            <div className="bg-gradient-to-r from-[#3be477] to-[#2dd865] px-6 py-4">
              <div className="grid grid-cols-12 gap-4 items-center text-white font-semibold">
                <div className="col-span-2 flex items-center gap-2">
                  <Music className="w-4 h-4" />
                  <span>커버</span>
                </div>
                <div className="col-span-3">노래 제목</div>
                <div className="col-span-3 flex items-center gap-2">
                  <Disc3 className="w-4 h-4" />
                  <span>앨범</span>
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>노래 시간</span>
                </div>
                <div className="col-span-2 text-center">상태</div>
              </div>
            </div>
            {/* Table body */}
            <div className="divide-y divide-gray-100">
              {data.length === 0 ? (
                <div className="px-6 py-12 text-center">
                  <Image className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">노래 없음</p>
                  <p className="text-gray-400 text-sm">노래를 추가하세요</p>
                </div>
              ) : (
                data.map((song, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-12 gap-4 items-center px-6 py-4 hover:bg-gray-50 transition-colors duration-200"
                  >
                    {/* Song image */}
                    <div className="col-span-2">
                      <div className="w-12 h-12 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
                        <img
                          src={song.image}
                          alt={song.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Song name */}
                    <div className="col-span-3">
                      <p className="font-medium text-gray-900 truncate">
                        {song.name}
                      </p>
                    </div>
                    {/* Album */}
                    <div className="col-span-3">
                      <p className="text-gray-600 truncate">{song.album}</p>
                    </div>
                    {/* Album color */}
                    <div className="col-span-2">
                      <span className="inline-flex  items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {song.duration}
                      </span>
                    </div>
                    {/* Action button */}
                    <div className="col-span-2 flex justify-center">
                      <button
                        onClick={() => removeSong(song._id)}
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
                  총 노래 개수:
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

export default ListSong;

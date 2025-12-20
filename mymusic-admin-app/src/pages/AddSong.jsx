import { Check, Image, Music } from "lucide-react";
import DashboardLayout from "../layout/DashboardLayout";
import { useEffect, useState } from "react";
import { albumsAPI, songsAPI } from "../services/apiService";
import toast from "react-hot-toast";

const AddSong = () => {
  const [image, setImage] = useState(false);
  const [song, setSong] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [album, setAlbum] = useState("none");
  const [loading, setLoading] = useState(false);
  const [albumData, setAlbumData] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      const request = {
        name,
        desc,
        album,
      };
      formData.append("request", JSON.stringify(request));
      formData.append("audio", song);
      formData.append("image", image);
      const response = await songsAPI.add(formData);
      if (response.status === 201) {
        toast.success("성공적으로 노래가 추가되었습니다!");
        setName("");
        setDesc("");
        setAlbum("none");
        setImage(false);
        setSong(false);
      } else {
        toast.error(
          "곡을 추가하는 중 오류가 발생했습니다. 다시 시도해 주세요!"
        );
      }
    } catch (error) {
      toast.error("곡을 추가하는 동안 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const loadAlbumData = async () => {
    try {
      const response = await albumsAPI.list();
      setAlbumData(response.data.albums);
    } catch (error) {
      toast.error("Failed to load albums");
    }
  };

  useEffect(() => {
    loadAlbumData();
  }, []);

  return (
    <DashboardLayout activeMenu="노래 추가">
      {loading ? (
        <div className="grid place-items-center min-h-[80vh]">
          <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin"></div>
        </div>
      ) : (
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col items-start gap-8 text-gray-600 mt-5"
        >
          <div className="flex gap-8">
            {/* Upload song */}
            <div className="flex flex-col gap-4">
              <p>노래 업로드</p>
              <input
                onChange={(e) => setSong(e.target.files[0])}
                type="file"
                accept="audio/*"
                id="song"
                hidden
              />
              <label
                htmlFor="song"
                className="flex flex-col items-center justify-center w-16 h-16 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-green-400 transition-colors overflow-hidden"
              >
                {song ? (
                  <Check className="w-8 h-8 text-green-500" />
                ) : (
                  <Music className="w-8 h-8 text-gray-500" />
                )}
              </label>
            </div>
            {/* Upload image */}
            <div className="flex flex-col gap-4">
              <p>이미지 업로드</p>
              <input
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                accept="image/*"
                id="image"
                hidden
              />
              <label
                htmlFor="image"
                className="flex flex-col items-center justify-center w-16 h-16 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-green-400 transition-colors overflow-hidden"
              >
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="미리보기"
                    className="w-full  h-full object-cover rounded-lg"
                  />
                ) : (
                  <Image className="w-8 h-8 text-gray-500" />
                )}
              </label>
            </div>
          </div>

          {/* Album name */}
          <div className="flex flex-col gap-2.5">
            <p>노래 이름</p>
            <input
              type="text"
              className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw, 250px)]"
              placeholder="여기에 입력하세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* song description */}
          <div className="flex flex-col gap-2.5">
            <p>아티스트 이름</p>
            <input
              type="text"
              className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw, 250px)]"
              placeholder="여기에 입력하세요"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          {/* Albums */}
          <div className="flex flex-col gap-2.5">
            <p>앨범</p>
            <select
              defaultValue={album}
              onChange={(e) => setAlbum(e.target.value)}
              className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[150px]"
            >
              <option value="none">없음</option>
              {albumData.map((album, index) => (
                <option value={album.name} key={index}>
                  {album.name}
                </option>
              ))}
            </select>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="text-base bg-[#3be477] text-white py-2.5 px-14 cursor-pointer"
          >
            추가
          </button>
        </form>
      )}
    </DashboardLayout>
  );
};

export default AddSong;

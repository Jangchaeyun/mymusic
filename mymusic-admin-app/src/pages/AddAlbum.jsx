import { useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import { Image } from "lucide-react";

const AddAlbum = () => {
  const [image, setImage] = useState(false);
  const [colour, setColour] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = (e) => {};

  return (
    <DashboardLayout activeMenu="앨범 추가">
      {loading ? (
        <div className="grid place-items-center min-h-[80vh]">
          <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin"></div>
        </div>
      ) : (
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col items-start gap-8 text-gray-600 mt-5"
        >
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

          {/* Album name */}
          <div className="flex flex-col gap-2.5">
            <p>앨범 이름</p>
            <input
              type="text"
              className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw, 250px)]"
              placeholder="여기에 입력하세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Album description */}
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

          {/* Album background color */}
          <div className="flex flex-col gap-3">
            <p>백그라운드 컬러</p>
            <input
              type="color"
              value={colour}
              onChange={(e) => setColour(e.target.value)}
            />
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

export default AddAlbum;

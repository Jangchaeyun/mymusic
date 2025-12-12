import { useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";

const AddAlbum = () => {
  const [image, setImage] = useState(false);
  const [colour, setColour] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = () => {};

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
          </div>
        </form>
      )}
    </DashboardLayout>
  );
};

export default AddAlbum;

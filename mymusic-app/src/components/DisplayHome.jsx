import { useAuth } from "../context/AuthContext";

const DisplayHome = () => {
  return (
    <>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">추천 차트</h1>
        <div className="flex overflow-auto">
          {/* Display the albums data */}
          앨범 표시
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">오늘의 가장 큰 히트곡</h1>
        <div className="flex overflow-auto">
          {/* Display the songs data */}
          노래 표시
        </div>
      </div>
    </>
  );
};

export default DisplayHome;

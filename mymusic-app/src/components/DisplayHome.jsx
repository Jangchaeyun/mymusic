const DisplayHome = () => {
  const handleLogout = () => {
    console.log("User logged out");
  };
  return (
    <>
      <div>Displaying the albums and songs</div>
      <button
        className="bg-red-600 hover:bg-red-700 py-1 px-3 rounded-2xl text-[15px] cursor-pointer transition-colors flex"
        onClick={handleLogout}
      >
        로그아웃
      </button>
    </>
  );
};

export default DisplayHome;

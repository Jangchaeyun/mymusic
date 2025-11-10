const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-black to-green-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center justify-center mb-6">
              <img src={assets.logo} alt="logo" className="w-16 h-16" />
              <h1 className="ml-3 text-3xl font-bold text-white">MyMusicfy</h1>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">환영합니다</h2>
          <p className="text-gray-300">계속 듣기 위해 로그인하세요</p>
        </div>

        {/* Register form */}
        <div className="bg-gray-900/80 backdrop-blug-lg rounded-2xl p-8 shawdow-2xl border border-gray-700">
          <form className="space-y-6">
            {/* Email field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                이메일 주소
              </label>
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="block w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                placeholder="이메일 입력"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

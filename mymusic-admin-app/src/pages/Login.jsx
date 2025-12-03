import { assets } from "../assets/assets";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <img src={assets.logo} alt="logo" className="h-12 w-12" />
            <h1 className="ml-3 text-3xl font-bold text-white">MyMusic</h1>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">관리자 패널</h2>
          <p className="texr-gray-300">음악을 관리하려면 로그인하세요</p>
        </div>
        {/* Login form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          <form action="space-y-6">
            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                이메일 주소
              </label>
              <div className="relative">

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

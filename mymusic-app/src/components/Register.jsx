import React, { useState } from "react";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !confirmPassword) {
      setError("모든 항목을 작성해 주세요");
      toast.error("모든 항목을 작성해 주세요");
      return;
    }

    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다");
      toast.error("비밀번호가 일치하지 않습니다");
      return;
    }

    
  };

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
          <h2 className="text-2xl font-bold text-white mb-2">MyMusicfy 가입</h2>
          <p className="text-gray-300">음악을 들으려면 계정을 만드세요</p>
        </div>

        {/* Register form */}
        <div className="bg-gray-900/80 backdrop-blug-lg rounded-2xl p-8 shawdow-2xl border border-gray-700">
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                패스워드
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="new-password"
                required
                className="block w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                placeholder="패스워드 생성"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Conirm Password field */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                비밀번호 확인
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                autoComplete="new-password"
                required
                className="block w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                placeholder="패스워드 맞는지 확인"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {/* Submit */}
            <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105">
              가입
            </button>
          </form>

          {/* Switch to login */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              계정이 있으십니까?
              <button className="text-green-400 hover:text-green-300 font-medium transition-colors cursor-pointer">
                여기서 로그인
              </button>
            </p>
          </div>

          {/* Terms and conditions */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              계정을 생성하면 당사의 서비스 약관 및 개인정보 보호정책에 동의하는
              것으로 간주됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

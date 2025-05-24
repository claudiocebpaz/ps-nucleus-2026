import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { ACCESS_CODE } from "../../constants/auth";

export const LoginScreen = () => {
  const { login } = useAuth();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    login(code);
    if (code !== ACCESS_CODE) {
      setError("Invalid access code");
    }
  };

  return (
    <div className="font-cinzel min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md p-8 space-y-8 bg-black rounded-lg shadow-lg border border-yellow-500">
        <div className="text-center">
          <img
            src="/logosanctuary.webp"
            alt="Sanctuary Logo"
            className="mx-auto h-56 w-auto mb-6"
          />
          <h2 className="text-3xl font-serif font-bold text-white">
            Nucleus 2026 Access
          </h2>
          <p className="mt-2 text-sm text-white">Enter your access code</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <input
                type="password"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Access code"
                className="appearance-none relative block w-full px-3 py-3 border border-yellow-500 placeholder-yellow-400 text-white bg-black rounded-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-sm text-black bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-200"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

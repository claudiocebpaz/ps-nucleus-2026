// src/App.tsx
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { AuthWrapper } from "./components/Auth/AuthWrapper";

function App() {
  return (
    <AuthProvider>
      <AuthWrapper />
    </AuthProvider>
  );
}
export default App;

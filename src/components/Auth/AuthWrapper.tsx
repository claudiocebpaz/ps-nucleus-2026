import { useAuth } from "../../context/AuthContext";
import { LoginScreen } from "./LoginScreen";
import AppContent from "../../AppContent";

export const AuthWrapper = () => {
  const { isAuthed } = useAuth();
  return isAuthed ? <AppContent /> : <LoginScreen />;
};

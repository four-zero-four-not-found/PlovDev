import { useEffect } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { handleRefreshToken } from "./service/auth.service";
import { useAuth , AuthProvider} from "./context/AuthContext";


const AppContent = () => {
  const { accessToken, setAccessToken, setIsLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const initAuth = async () => {
      try {
        // Check token from URL (Google OAuth)
        console.log("1. Full url:" , window.location.href)
        const token = new URLSearchParams(window.location.search).get("token");
        console.log("2. access token:" , accessToken)

        if (token) {
          setAccessToken(token);
          window.history.replaceState({}, "", "/"); // clean URL
        } else {
          // Normal page load → silent refresh
          console.log("3. No url token, trying silent refresh...")
          const newToken = await handleRefreshToken();
          setAccessToken(newToken);
          console.log("4. Silent refresh token:" , newToken)

        }
      } catch {
        // No valid token, stay as guest
        setAccessToken(null);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  useEffect(() => {
    console.log("React State Updated! Current Access Token:", accessToken);
  }, [accessToken]);

  return <AppRouter />;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
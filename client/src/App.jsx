import { BrowserRouter as Router } from 'react-router-dom';
import Footer from "./components/layout/Footer";
import NavbarLogin from "./components/layout/NavbarLogin";
import LoginPage from "./pages/public/LoginPage";
import SigninPage from "./pages/public/SigninPage";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";

function App() {
  return (
    <Router>
      <TeacherDashboard />
    </Router>
  );
}

export default App;

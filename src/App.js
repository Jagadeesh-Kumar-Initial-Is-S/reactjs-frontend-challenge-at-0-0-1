import "./App.css";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import { useAuth0 } from "@auth0/auth0-react";
import Advertisement from './Advertisement';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <><Advertisement /><main className="container">
      {isAuthenticated ? <Dashboard /> : <SignIn />}
    </main><Advertisement /></>
  );
}

export default App;

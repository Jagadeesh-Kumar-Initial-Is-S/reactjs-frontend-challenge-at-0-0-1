import "./App.css";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import { useAuth0 } from "@auth0/auth0-react";
import Advertisement from './Advertisement';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <main className="container">
      <Advertisement />
      {isAuthenticated ? <Dashboard /> : <SignIn />}
      <Advertisement />
    </main>
  );
}

export default App;

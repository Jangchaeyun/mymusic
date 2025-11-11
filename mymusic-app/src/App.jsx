import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster />
      <Login />
      <Register />
    </div>
  );
};

export default App;

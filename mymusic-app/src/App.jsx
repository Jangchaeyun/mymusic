import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Display from "./components/Display";
import AuthWrapper from "./components/AuthWrapper";

const App = () => {
  return (
    <>
      <Toaster />
      <AuthWrapper>
        <Display />
      </AuthWrapper>
    </>
  );
};

export default App;

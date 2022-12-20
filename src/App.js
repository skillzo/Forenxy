import "./App.css";
import SignIn from "./Components/Form/SignIn/SignIn";
import SignUp from "./Components/Form/SignUp/SignUp";
import AuthWrapper from "./Components/UI/AuthWrapper/AuthWrapper.jsx";
import PDetails from "./Pages/PDetails.jsx";

function App() {
  return (
    <AuthWrapper>
      <SignIn />
    </AuthWrapper>
  );
}

export default App;

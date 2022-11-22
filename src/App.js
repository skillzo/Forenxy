import "./App.css";
import SignIn from "./Components/Form/SignIn/SignIn";
import AuthWrapper from "./Components/UI/AuthWrapper/AuthWrapper.jsx";

function App() {
  return (
    <AuthWrapper>
      <SignIn />
    </AuthWrapper>
  );
}

export default App;

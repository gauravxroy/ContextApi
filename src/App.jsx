import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Test from "./Components/Test";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>account</h1>
      <Login />
      <Profile />
      {/* <Test username="gaurav" pass="123" />   */}{" "}
      {/*passing props to the Test Component or either we can pass objects */}
    </UserContextProvider>
  );
}

export default App;

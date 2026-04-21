import CharacterCounter from "./components/CharacterCounter";
import PasswordValidation from "./components/PasswordValidation";
import ShowHidePassword from "./components/ShowHidePassword";
import DisableSubmit from "./components/DisableSubmit";
import AddToCart from "./components/AddToCart";
import Tabs from "./components/Tabs";
import Toast from "./components/Toast";
import Todo from "./components/Todo";
import DarkMode from "./components/DarkMode";
import LikeStock from "./components/LikeStock";

function App() {
  return (
    <div>
      <CharacterCounter />
      <PasswordValidation />
      <ShowHidePassword />
      <DisableSubmit />
      <AddToCart />
      <Tabs />
      <Toast />
      <Todo />
      <DarkMode />
      <LikeStock />
    </div>
  );
}

export default App;
import Logo from "./Logo";
import NavBar from "./NavBar";

import SigninButton from "./SigninButton";

const AppBar = () => {
  return (
    <header className="flex items-center justify-between h-24 border-b border-white/30 px-20 font-nixieone">
      <Logo />
      <NavBar />
      <SigninButton />
    </header>
  );
};

export default AppBar;

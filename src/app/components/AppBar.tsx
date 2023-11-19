import Logo from "./Logo";
import NavBar from "./NavBar";

import SigninButton from "./SigninButton";

const AppBar = () => {
  return (
    <header className="tw-flex tw-items-center tw-justify-between tw-h-24 tw-border-b tw-border-white/30 tw-px-20 tw-font-nixieone">
      <Logo />
      <NavBar />
      <SigninButton />
    </header>
  );
};

export default AppBar;

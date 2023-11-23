import Logo from "./Logo";
import NavBar from "./NavBar";

import SigninButton from "./SigninButton";

const AppBar = () => {
  return (
    <header className="tw-flex tw-items-center tw-justify-center tw-gap-28 tw-h-24 tw-border-b tw-border-white/30 tw-font-nixieone ">
      <Logo />
      <NavBar />
      <SigninButton />
    </header>
  );
};

export default AppBar;

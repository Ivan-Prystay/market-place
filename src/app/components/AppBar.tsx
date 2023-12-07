import Logo from "./Logo";
import NavBar from "./NavBar";

import SigninButton from "./SigninButton";

const AppBar = () => {
  return (
    <header className="tw-flex tw-py-5 tw-px-[83px] tw-items-center tw-justify-between tw-h-[116px] tw-border-b tw-border-white/30 tw-font-nixieone ">
      <Logo />
      <NavBar />
      <SigninButton />
    </header>
  );
};

export default AppBar;

import { Suspense } from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";

import SigninButton from "./SigninButton";

const AppBar = () => {
  return (
    <header className="flex items-center justify-between h-40 border-b border-white/30 px-20">
      <Logo />

      <Suspense fallback={<p>Loading...</p>}>
        <NavBar />
      </Suspense>

      <SigninButton />
    </header>
  );
};

export default AppBar;

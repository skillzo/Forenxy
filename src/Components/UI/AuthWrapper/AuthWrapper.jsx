import React from "react";

function AuthWrapper({ children }) {
  return <div className="w-full px-[1em] md:px-[0em] mx-auto">{children}</div>;
}

export default AuthWrapper;

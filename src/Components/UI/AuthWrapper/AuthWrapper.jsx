import React from "react";

function AuthWrapper({ children }) {
  return (
    <div className="w-full flex justify-center px-[1em] mx-auto">
      {children}
    </div>
  );
}

export default AuthWrapper;

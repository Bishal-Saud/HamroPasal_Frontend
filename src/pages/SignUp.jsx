import { SignUp, SignedOut } from "@clerk/clerk-react";
import React from "react";

function SignUpPage() {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <SignedOut>
        <SignUp path="/sign-up" routing="path" />
      </SignedOut>
    </div>
  );
}

export default SignUpPage;

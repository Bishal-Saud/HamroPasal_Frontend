import { SignIn, SignedOut } from "@clerk/clerk-react";
import React from "react";

function SignInPage() {
  return (
    <div className="w-full flex justify-center items-center h-screen flex-col">
      <div className="flex flex-col">
        <h2>Only Admin can add Products</h2>
        <p>
          <span className=" font-semibold">Id:</span> yomot46202@lapeds.com
        </p>
        <p>
          <span className=" font-semibold">password:</span> pikachu@ILoveYou
        </p>
      </div>
      <SignedOut>
        <SignIn path="/sign-in" routing="path" />
      </SignedOut>
    </div>
  );
}

export default SignInPage;

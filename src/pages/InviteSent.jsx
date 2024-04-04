import React from "react";
import Button from "../components/Button";

const InviteSent = () => {
  return (
    <div className="md:max-w-[60%] w-full max-md:px-4 mx-auto">
      <p className="font-semibold text-3xl text-red-400">
        We have started rolling out Amie!😍
      </p>
      <p className="font-semibold text-3xl mb-6">
        Invites are sent in weekly batches so we can ship based on customer
        feedback and keep the app stable.
      </p>
      <Button text="Lets gooo ➡" />
    </div>
  );
};

export default InviteSent;

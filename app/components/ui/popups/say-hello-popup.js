"use client";

import SayHelloForm from "../forms/say-hello-form";
import Popup from "./popup";

export default function SayHelloPopup(props) {
  const { isPopupOpen, onClose } = props;

  return (
    <Popup
      isPopupOpen={isPopupOpen}
      onClose={onClose}
      title="Let's talk!"
      description=" Have any interesting ideas or topics? Happy to discuss them with you."
    >
      <SayHelloForm />
    </Popup>
  );
}

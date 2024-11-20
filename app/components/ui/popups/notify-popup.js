"use client";

import NotifyForm from "../forms/notify-form";
import Popup from "./popup";

export default function NotifyPopup(props) {
  const { isPopupOpen, onClose } = props;

  return (
    <Popup
      isPopupOpen={isPopupOpen}
      onClose={onClose}
      title="Get to know about 1PA launch"
      description="Subscribe to our newsletter and we will send you a notification about the launch of our brand new site."
    >
      <NotifyForm />
    </Popup>
  );
}

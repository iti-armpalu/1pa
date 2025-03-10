
import NotifyPopup from "../popups/notify-popup";
import ButtonPopup from "./button-popup";

export default function ButtonNotify() {
  return (
    <ButtonPopup
      buttonText="Notify me"
      PopupComponent={NotifyPopup}
      hasBorder={true}
    />
  );
}

import SayHelloPopup from "../popups/say-hello-popup";
import ButtonPopup from "./button-popup";

export default function ButtonSayHello() {
  return (
    <ButtonPopup
      buttonText="Say Hello"
      PopupComponent={SayHelloPopup}
      hasBorder={true}
    />
  );
}

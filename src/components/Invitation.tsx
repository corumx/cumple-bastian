import Hero from "./Invitations/Hero";
import Countdown from "./Invitations/Countdown";
import Details from "./Invitations/Details";
import Gallery from "./Invitations/Gallery";
import Confirmation from "./Invitations/Confirmation";
import Closing from "./Invitations/Closing";

export default function Invitation() {
  return (
    <main>
      <Hero />
      <Countdown />
      <Details />
      <Gallery />
      <Confirmation />
      <Closing />
    </main>
  );
}
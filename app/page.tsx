import Hero from "@/components/sections/Hero";
import Welcome from "@/components/sections/Welcome";
import Timeline from "@/components/sections/Timeline";
import MenuPreview from "@/components/sections/MenuPreview";
import Brunch from "@/components/sections/Brunch";
import SignatureDishes from "@/components/sections/SignatureDishes";
import PrivateEvents from "@/components/sections/PrivateEvents";
import Reservations from "@/components/sections/Reservations";

/**
 * Home — the single-page experience that strings every section together in a
 * deliberate narrative: arrive, get welcomed, learn the history, browse the
 * menus, crave brunch, see the signatures, imagine an event, then book.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <Timeline />
      <MenuPreview />
      <Brunch />
      <SignatureDishes />
      <PrivateEvents />
      <Reservations />
    </>
  );
}

import Welcome from "@/components/Home/Welcome";
import Contacts from "@/components/Home/Contacts";
import MySkills from "@/components/Home/MySkills";

export default function HomePage() {
  return (
    <section>
      <Welcome />

      <Contacts />

      <MySkills />
    </section>
  );
}

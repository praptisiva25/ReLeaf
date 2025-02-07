import Navbar from "../components/Navbar";
import ProcessingUnitPage from "@/pages/Processing-Unit-Page";
import LandingPage from "@/pages/Landing-page";

export default async function Page() {
  return (
    <div>
      <Navbar/>
      <ProcessingUnitPage/>
      <LandingPage/>
    </div>
  );
};
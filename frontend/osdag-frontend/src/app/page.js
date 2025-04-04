import Image from "next/image";
// import Home from "../pages/Home";
// import BeamToColumnConnection from "../pages/BeamToColumnConnection";
import BeamToColumnConnection from "../components/BeamToColumnConnection";
import Home from "../components/Home";

export default function HomePage() {
  return (
    <div className="container">
      <Home />
      <BeamToColumnConnection />
    </div>
  );
}
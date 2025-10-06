import Navbar from "../Componenets/Navbar";
import CallButton from "../Componenets/CallButton";
import ConDev from "./Components/ConDev";

import Footer from "../Componenets/Footer";



export default function Home() {
  return (
    <>
    <main className="relative flex flex-col min-h-screen bg-white">
        <Navbar className="absolute top-0 z-10 w-screen" />
        <CallButton />
        <ConDev />
          <Footer />
         

    </main>

    </>
  );
}
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Hero1 from "./components/hero1"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative left-12 lg:left-0 w-8/12 mt-6  ">
         <Navbar/>
      </div>
    <div>
     <Hero/>
     <Hero1/>
     </div>
    </div>
  );
}

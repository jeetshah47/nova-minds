import About from "./components/common/home/About";
import Index from "./components/common/home/Index";
import Mentor from "./components/common/home/Mentor";
import Why from "./components/common/home/Why";

function App() {
  return (
    <div className="w-full h-full">
     <Index />
     <Why />
     <About />
     <Mentor />
    </div>
  );
}

export default App;

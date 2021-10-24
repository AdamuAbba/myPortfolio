import { BrowserRouter } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import Root from "./Root";

const App = () => {
  return (
    <div className="bg-dark content-border-solid ">
      <BrowserRouter>
        <AnimatedCursor innerSize={20} outerSize={30} />
        <Root />
      </BrowserRouter>
    </div>
  );
};

export default App;

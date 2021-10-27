import { BrowserRouter } from "react-router-dom";
import Root from "./Root";

const App = () => {
  return (
    <div className="bg-dark content-border-solid ">
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </div>
  );
};

export default App;

import ScrollToTop from "./ScrolToTop";
import Router from "./router/Router";
import { BrowserRouter as WebAppRouter } from "react-router-dom";

function App() {
  return (
    <div className="App flex flex-col justify-center items-center">
      <WebAppRouter>
        <ScrollToTop>
          <Router />
        </ScrollToTop>
      </WebAppRouter>
    </div>
  );
}

export default App;

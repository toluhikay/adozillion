import ScrollToTop from "./ScrolToTop";
import Router from "./router/Router";
import { BrowserRouter as WebAppRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    // AOS.refresh();
  }, []);

  return (
    <div className="App flex w-full overflow-hidden flex-col justify-center items-center">
      <WebAppRouter>
        <ScrollToTop>
          <Router />
        </ScrollToTop>
      </WebAppRouter>
    </div>
  );
}

export default App;

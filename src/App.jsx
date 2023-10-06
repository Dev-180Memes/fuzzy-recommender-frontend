import { HashRouter, Routes, Route } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import { Home, Recommend } from "./Containers";

const App = () => {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route element={<Home />} path="/" exact/>
          <Route element={<Recommend />} path="/recommend"/>
        </Routes>
      </HashRouter>

      <CookieConsent>This site uses cookies. By continuing to use this website, you agree to their use.</CookieConsent>
    </div>
  )
}

export default App;

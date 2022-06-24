import "./App.css";
import { useState, useEffect } from "react";
import "../src/common/Icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "../src/components/Header";
import { useScreenFixedProvider } from "../src/components/context/ScreenFixedProvider";
const App = () => {
  const [loading, setLoading] = useState(false);
  const { showOverlay } = useScreenFixedProvider();
  useEffect(() => {
    if (showOverlay) {
      document.body.classList.add("setClass");
    } else {
      document.body.classList.remove("setClass");
    }
  }, [showOverlay]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  return <>{loading ? <Main /> : ""}</>;
};

export default App;

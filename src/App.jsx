import "./App.css";
import Connect from "./components/Connect";
import FindDevelopers from "./components/FindDevelopers";
import Footer from "./components/Footer";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import ServicesContainer from "./components/ServicesContainer";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <FindDevelopers />
      <ServicesContainer />
      <Connect />
      <Footer />
    </>
  );
}

export default App;

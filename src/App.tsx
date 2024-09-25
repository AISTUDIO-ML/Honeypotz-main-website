import { Footer, NavBar } from "components/components";
import State from "context/state";
import {
  BottomBanner,
  Home,
  TopBanner,
  UseCases,
  CaseStudies,
  ScalableSolutions,
  Awards,
  Community,
  Testimonials,
} from "sections/sections";

function App() {
  return (
    <State>
      <TopBanner />
      <NavBar />
      <Home />
      <UseCases />
      <ScalableSolutions />
      <CaseStudies />
      <Awards />
      <Community />
      <Testimonials />
      <BottomBanner />
      <Footer />
    </State>
  );
}

export default App;

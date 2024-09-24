import { Footer, NavBar } from "components/components";
import State from "context/state";
import AuthenticateAi from "sections/authenticateAi/authenticateAi";
import {
  BottomBanner,
  Home,
  JoinEarly,
  Reassurance,
  TopBanner,
  UseCases,
  WhyChoose,
  CaseStudies,
  ScalableSolutions,
  Awards,
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
      {/* <Reassurance /> */}
      {/* <AuthenticateAi /> */}
      {/* <WhyChoose /> */}
      {/* <JoinEarly /> */}
      {/* <BottomBanner /> */}
      <Footer />
    </State>
  );
}

export default App;

import { Footer, NavBar } from "components/components";
import State from "context/state";
import AuthenticateAi from "sections/authenticateAi/authenticateAi";
import CaseStudies from "sections/caseStudies/caseStudies";
import {
  BottomBanner,
  Home,
  JoinEarly,
  Reassurance,
  TopBanner,
  UseCases,
  WhyChoose,
} from "sections/sections";

function App() {
  return (
    <State>
      <TopBanner />
      <NavBar />
      <Home />
      {/* <UseCases /> */}
      {/* <Reassurance /> */}
      {/* <AuthenticateAi /> */}
      {/* <CaseStudies /> */}
      {/* <WhyChoose /> */}
      {/* <JoinEarly /> */}
      {/* <BottomBanner /> */}
      <Footer />
    </State>
  );
}

export default App;

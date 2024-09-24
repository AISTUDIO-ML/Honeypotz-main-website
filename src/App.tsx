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
} from "sections/sections";

function App() {
  return (
    <State>
      <TopBanner />
      <NavBar />
      <Home />
      {/* <Reassurance /> */}
      {/* <AuthenticateAi /> */}
      {/* <WhyChoose /> */}
      {/* <UseCases /> */}
      {/* <JoinEarly /> */}
      {/* <BottomBanner /> */}
      <Footer />
    </State>
  );
}

export default App;

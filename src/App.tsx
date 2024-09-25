import { Footer, NavBar } from "components/components";
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
  Blogs,
} from "sections/sections";

function App() {
  return (
    <div>
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
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;

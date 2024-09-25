import { Footer, NavBar } from "components/components";
import Blogs from "sections/blogs/blogs";
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
      {/* <Blogs /> */}
      <Footer />
    </div>
  );
}

export default App;

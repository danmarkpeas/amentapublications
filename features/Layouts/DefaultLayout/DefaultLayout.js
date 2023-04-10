import Footer from "../../common/modules/Footer";
import Navigation from "../../common/modules/Navigation";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;

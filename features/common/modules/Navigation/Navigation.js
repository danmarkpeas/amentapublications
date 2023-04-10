import { Box, Divider } from "@chakra-ui/react";
import NavigationDesktop from "./components/NavigationDesktop";
import NavigationMobile from "./components/NavigationMobile";

const Navigation = () => {
  return (
    <>
      <NavigationDesktop />
      <NavigationMobile />
    </>
  );
};

export default Navigation;

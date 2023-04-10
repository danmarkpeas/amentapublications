import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import { HiHomeModern, HiOutlineBookOpen } from "react-icons/hi2";
import { navigationLinks } from "../../navigationConsts";

const NavigationDesktop = () => {
  return (
    <Box
      color="purple.600"
      paddingY="2rem"
      backgroundColor="white"
      display={{ base: "none", md: "block" }}
      shadow="lg"
    >
      <Box maxWidth="1280px" margin="0 auto">
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Box display="flex" gap="2" alignItems="center">
              <HiOutlineBookOpen size="45" />
              <Flex flexDirection="column" lineHeight="1.5rem">
                <Text fontSize="2xl" fontWeight="medium">
                  Amenta Publications
                </Text>
                <Text fontSize="sm">Book Publishing Company</Text>
              </Flex>
            </Box>
          </Link>
          <Flex gap="8" alignItems="center" fontWeight="medium">
            {navigationLinks.map((item) => (
              <NavigationLink key={item.title} {...item} />
            ))}
            <Button
              padding="1.5rem"
              bgGradient="linear(to-l, purple.700, purple.500)"
              color="white"
              fontSize="0.8rem"
              fontWeight="medium"
              _hover={{ bgGradient: "linear(to-l, purple.600, purple.300)" }}
            >
              Login / Sign Up
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default NavigationDesktop;

const NavigationLink = ({ title, link, icon }) => {
  return (
    <Link href={link}>
      <Flex alignItems="center" gap="0.5rem">
        {icon}
        {title}
      </Flex>
    </Link>
  );
};

import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { HiHomeModern, HiOutlineBookOpen } from "react-icons/hi2";
import { navigationLinks } from "../../navigationConsts";

const NavigationMobile = () => {
  return (
    <Box
      color="purple.600"
      padding="2rem"
      backgroundColor="white"
      display={{ base: "block", md: "none" }}
      shadow="lg"
    >
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
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList zIndex="popover">
            {navigationLinks.map((item) => (
              <NavigationLink key={item.title} {...item} />
            ))}
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default NavigationMobile;

const NavigationLink = ({ title, link, icon }) => {
  return (
    <Link href={link}>
      <MenuItem alignItems="center" gap="0.5rem">
        {icon}
        {title}
      </MenuItem>
    </Link>
  );
};

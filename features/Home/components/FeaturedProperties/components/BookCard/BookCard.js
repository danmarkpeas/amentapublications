import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

export default function blogPostWithImage() {
  return (
    <SimpleGrid columns="4" spacing="10" minChildWidth="250px" marginTop="70px">
      <Box
        maxW={"280px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        margin="0 auto"
      >
        <Box
          h={"330px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
          backgroundImage={"books/product5.jpg"}
          backgroundPosition="center center"
          backgroundSize="cover"
        >
          {/* <Image
            src={"books/product5.jpg"}
            height="400px"
            width="100%"
            layout={"fill"}
          /> */}
        </Box>
        <Stack>
          {/* <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            Book
          </Text> */}
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontWeight="medium"
          >
            Pre-Primary
          </Heading>
          {/* <Text color={"gray.500"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text> */}
        </Stack>
        {/* <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            alt={"Author"}
          />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Achim Rolle</Text>
            <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack> */}
      </Box>
      <Box
        maxW={"280px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        margin="0 auto"
      >
        <Box
          h={"330px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
          backgroundImage={"books/product4.jpg"}
          backgroundPosition="center center"
          backgroundSize="cover"
        >
          {/* <Image
            src={"books/product5.jpg"}
            height="400px"
            width="100%"
            layout={"fill"}
          /> */}
        </Box>
        <Stack>
          {/* <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            Book
          </Text> */}
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontWeight="medium"
          >
            General Knowledge
          </Heading>
          {/* <Text color={"gray.500"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text> */}
        </Stack>
        {/* <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            alt={"Author"}
          />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Achim Rolle</Text>
            <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack> */}
      </Box>
      <Box
        maxW={"280px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        margin="0 auto"
      >
        <Box
          h={"330px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
          backgroundImage={"books/product3.jpg"}
          backgroundPosition="center center"
          backgroundSize="cover"
        >
          {/* <Image
            src={"books/product5.jpg"}
            height="400px"
            width="100%"
            layout={"fill"}
          /> */}
        </Box>
        <Stack>
          {/* <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            Book
          </Text> */}
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontWeight="medium"
          >
            Social Science
          </Heading>
          {/* <Text color={"gray.500"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text> */}
        </Stack>
        {/* <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            alt={"Author"}
          />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Achim Rolle</Text>
            <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack> */}
      </Box>
      <Box
        maxW={"280px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        margin="0 auto"
      >
        <Box
          h={"330px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
          backgroundImage={"books/product2.jpg"}
          backgroundPosition="center center"
          backgroundSize="cover"
        >
          {/* <Image
            src={"books/product5.jpg"}
            height="400px"
            width="100%"
            layout={"fill"}
          /> */}
        </Box>
        <Stack>
          {/* <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            Book
          </Text> */}
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontWeight="medium"
          >
            General Science
          </Heading>
          {/* <Text color={"gray.500"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text> */}
        </Stack>
        {/* <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            alt={"Author"}
          />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Achim Rolle</Text>
            <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack> */}
      </Box>
      <Box
        maxW={"280px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        margin="0 auto"
      >
        <Box
          h={"330px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
          backgroundImage={"books/product1.jpg"}
          backgroundPosition="center center"
          backgroundSize="cover"
        >
          {/* <Image
            src={"books/product5.jpg"}
            height="400px"
            width="100%"
            layout={"fill"}
          /> */}
        </Box>
        <Stack>
          {/* <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            Book
          </Text> */}
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontWeight="medium"
          >
            Computer Science
          </Heading>
          {/* <Text color={"gray.500"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text> */}
        </Stack>
        {/* <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            alt={"Author"}
          />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Achim Rolle</Text>
            <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack> */}
      </Box>
    </SimpleGrid>
  );
}

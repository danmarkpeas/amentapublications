import { Box, Text } from "@chakra-ui/react";
import BookCard from "./components/BookCard";
import PropertySlider from "./components/PropertySlider/PropertySlider";

const FeaturedProperties = ({ featuredProperties }) => {
  return (
    <Box
      backgroundColor="purple.100"
      marginTop="50px"
      paddingBottom={{ base: "3rem", sm: "0" }}
    >
      <Box
        maxWidth="1280px"
        margin="0 auto"
        color="gray.600"
        paddingY={{ base: "3rem", sm: "6rem" }}
      >
        <Text
          fontSize={{ base: "4xl", sm: "5xl" }}
          lineHeight="shorter"
          fontWeight="light"
          paddingX="2rem"
          textAlign="center"
        >
          Discover Our Featured Publications
        </Text>
        <Text
          fontSize="2xl"
          fontWeight="light"
          marginTop="1rem"
          marginBottom="3rem"
          paddingX="2rem"
          textAlign="center"
        >
          A selection of our best publications
        </Text>
        <BookCard />
        {/* <PropertySlider featuredProperties={featuredProperties} /> */}
      </Box>
    </Box>
  );
};

export default FeaturedProperties;

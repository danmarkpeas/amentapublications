import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import {
  TbBuilding,
  TbBuildingCommunity,
  TbMan,
  TbRoad,
  TbSpace,
} from "react-icons/tb";

function StatsCard({ title, stat, icon }) {
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("purple.800", "purple.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("purple.800", "purple.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Stats() {
  return (
    <Box maxW="7xl" mx={"auto"} pt={20} px={{ base: 5, sm: 12, md: 17 }}>
      <Text
        fontSize={{ base: "4xl", sm: "5xl" }}
        lineHeight="shorter"
        fontWeight="light"
        textAlign="center"
      >
        Our Reach
      </Text>
      <Text
        fontSize="2xl"
        fontWeight="light"
        marginBottom="3rem"
        marginTop="1rem"
        paddingX="2rem"
        textAlign="center"
      >
        The best in the industry, at your service 24x7
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"No. of Schools"}
          stat={"5,000"}
          icon={<TbBuilding size={"3em"} />}
        />
        <StatsCard
          title={"No. of Cities"}
          stat={"1,000"}
          icon={<TbBuildingCommunity size={"3em"} />}
        />
        <StatsCard
          title={"Approximate No. of Students"}
          stat={"2,00,000"}
          icon={<BsPerson size={"3em"} />}
        />
      </SimpleGrid>
    </Box>
  );
}

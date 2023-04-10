import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { Box, Fade, Image, Text } from "@chakra-ui/react";
import HeroForm from "../HeroForm";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroBooks = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      loopFillGroupWithBlank={true}
      centeredSlides={true}
      autoplay={{ delay: 4000, disableOnInteraction: true }}
      pagination={{ dynamicBullets: true }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Fade in>
          <Box
            position="relative"
            minHeight={{ base: "110vh", sm: "60vh" }}
            // backgroundImage={`url('./hero/heroBg.jpeg')`}
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundAttachment="fixed"
          >
            <Box
              position="absolute"
              width="100%"
              height="100%"
              opacity="0.85"
              //   backgroundColor="blue.900"
            />
            <Box
              display="flex"
              flexDirection={{ base: "column", sm: "row" }}
              alignItems="center"
              justifyContent={{ base: "flex-start", sm: "space-between" }}
              maxWidth="1280px"
              position="absolute"
              //   color="white"
              fontWeight="light"
              left="0"
              right="0"
              bottom="0"
              top="0"
              margin="0 auto"
              padding="2rem"
            >
              <Box width={{ base: "100%", sm: "50%" }}>
                <Text
                  fontSize={{ base: "4xl", sm: "5xl" }}
                  lineHeight="shorter"
                  marginBottom="1.5rem"
                >
                  Download our new <strong>Publication Buying Guide</strong>{" "}
                  today ...
                </Text>
                <Text fontSize={{ base: "lg", sm: "2xl" }}>
                  A free PDF with out best secrets for evaluating a book
                  purchase, calculating profit and so much more.
                </Text>
              </Box>
              <Box
                width={{ base: "100%", sm: "auto" }}
                marginTop={{ base: "2rem", sm: "0" }}
              >
                <Image
                  src="books/product1.jpg"
                  width="300px"
                  boxShadow={"dark-lg"}
                  rounded={"md"}
                />
              </Box>
            </Box>
          </Box>
        </Fade>
      </SwiperSlide>
      <SwiperSlide>
        <Fade in>
          <Box
            position="relative"
            minHeight={{ base: "110vh", sm: "60vh" }}
            // backgroundImage={`url('./hero/heroBg.jpeg')`}
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundAttachment="fixed"
          >
            <Box
              position="absolute"
              width="100%"
              height="100%"
              opacity="0.85"
              //   backgroundColor="blue.900"
            />
            <Box
              display="flex"
              flexDirection={{ base: "column", sm: "row" }}
              alignItems="center"
              justifyContent={{ base: "flex-start", sm: "space-between" }}
              maxWidth="1280px"
              position="absolute"
              //   color="white"
              fontWeight="light"
              left="0"
              right="0"
              bottom="0"
              top="0"
              margin="0 auto"
              padding="2rem"
            >
              <Box width={{ base: "100%", sm: "50%" }}>
                <Text
                  fontSize={{ base: "4xl", sm: "5xl" }}
                  lineHeight="shorter"
                  marginBottom="1.5rem"
                >
                  Download our new <strong>Publication Buying Guide</strong>{" "}
                  today ...
                </Text>
                <Text fontSize={{ base: "lg", sm: "2xl" }}>
                  A free PDF with out best secrets for evaluating a book
                  purchase, calculating profit and so much more.
                </Text>
              </Box>
              <Box
                width={{ base: "100%", sm: "auto" }}
                marginTop={{ base: "2rem", sm: "0" }}
              >
                <Image
                  src="books/product2.jpg"
                  width="300px"
                  boxShadow={"dark-lg"}
                  rounded={"md"}
                />
              </Box>
            </Box>
          </Box>
        </Fade>
      </SwiperSlide>
      <SwiperSlide>
        <Fade in>
          <Box
            position="relative"
            minHeight={{ base: "110vh", sm: "60vh" }}
            // backgroundImage={`url('./hero/heroBg.jpeg')`}
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundAttachment="fixed"
          >
            <Box
              position="absolute"
              width="100%"
              height="100%"
              opacity="0.85"
              //   backgroundColor="blue.900"
            />
            <Box
              display="flex"
              flexDirection={{ base: "column", sm: "row" }}
              alignItems="center"
              justifyContent={{ base: "flex-start", sm: "space-between" }}
              maxWidth="1280px"
              position="absolute"
              //   color="white"
              fontWeight="light"
              left="0"
              right="0"
              bottom="0"
              top="0"
              margin="0 auto"
              padding="2rem"
            >
              <Box width={{ base: "100%", sm: "50%" }}>
                <Text
                  fontSize={{ base: "4xl", sm: "5xl" }}
                  lineHeight="shorter"
                  marginBottom="1.5rem"
                >
                  Download our new <strong>Publication Buying Guide</strong>{" "}
                  today ...
                </Text>
                <Text fontSize={{ base: "lg", sm: "2xl" }}>
                  A free PDF with out best secrets for evaluating a book
                  purchase, calculating profit and so much more.
                </Text>
              </Box>
              <Box
                width={{ base: "100%", sm: "auto" }}
                marginTop={{ base: "2rem", sm: "0" }}
              >
                <Image
                  src="books/product3.jpg"
                  width="300px"
                  boxShadow={"dark-lg"}
                  rounded={"md"}
                />
              </Box>
            </Box>
          </Box>
        </Fade>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroBooks;

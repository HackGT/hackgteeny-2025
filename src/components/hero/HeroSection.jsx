import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import GenericSection from '../GenericSection';

import heroImg from "../../assets/hero.svg";
import styleConstants from '../../styleConstants';

const HeroSection = () => {
  return (
    <GenericSection id='home'>

      <Box
      bgImage={`linear-gradient(to bottom, #${styleConstants.gradientPrimary[0]}, #${styleConstants.gradientPrimary[1]})`}
      borderRadius={styleConstants.borderRadius}
      padding="min(5vmax, 3rem) min(8vmax, 4rem)"
      display={{
        base: 'block',
        lg: 'flex',
      }}>

        <Flex flexDirection="column" gap={4}>
          <Text
          fontFamily={styleConstants.fonts.heading}
          padding="min(2vw, 1rem) min(4vw, 2rem)"
          bgColor="white"
          width="fit-content"
          fontSize={{ base: '20px', lg: '35px' }}
          fontWeight='bold'
          borderRadius={{ base: 1000, lg: styleConstants.borderRadius }}>
            Register
          </Text>

          <Text color="white" fontWeight={400} fontSize={{ base: '15px', lg: '22px' }}>
            HackGTeeny is a series of one-hour workshops designed for Georgia Tech students eager to learn key computer science concepts, with a special focus on skills useful for hackathons. The workshops will take place throughout the day in Klaus classrooms on March 1st. Each session will cover a unique topic, hosted by various CS clubs from Tech, and will span a wide range of subjects—from web and app development to site design and more.
          </Text>
        </Flex>

        <Image mx="auto" src={heroImg} alt="" />

      </Box>

    </GenericSection>
  );
};

export default HeroSection;
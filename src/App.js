import { Box, Container, Flex, Text, useColorMode } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import PurpleDivider from './components/PurpleDivider';
import HeroSection from './components/hero/HeroSection';
import AdmissionsSection from './components/admissions/AdmissionsSection';
// import TracksSection from './components/tracks/TracksSection';
import ScheduleSection from './components/schedule/ScheduleSection';
import Footer from './components/Footer';
import FAQSection from './components/faq/FAQSection';
import WorkshopsSection from './components/workshops/WorkshopsSection';
import styleConstants from './styleConstants';
import { ArrowForwardIcon } from '@chakra-ui/icons';

function App() {

  const { colorMode, toggleColorMode } = useColorMode();

  if (colorMode === 'dark') {
    toggleColorMode();
  }

  return (
    <>
      <Container maxW='container.xl' py={4} px={10}>
        <NavBar />
        <PurpleDivider mb={12} mt={5} />

        <Flex 
        flexDirection={{base: 'column', md: 'row'}}
        gap={5}
        justifyContent='space-between'
        alignItems='center' 
        mb={12} px={8} py={4}
        border={`2px solid ${styleConstants.colorSecondary}`} 
        borderRadius={styleConstants.borderRadius}>
					<Text fontSize='2xl' textAlign='center'>HackGTeeny 2025 was held on <b>Saturday, March 1st!</b></Text>
          <Text
          fontFamily={styleConstants.fonts.heading}
          padding="min(1.6vw, 0.75rem) min(4vw, 2rem)"
          bgColor={styleConstants.colorSecondary}
          width={{base: "full", md: "fit-content"}}
	  textAlign={{base: "center", md: "left"}}
	  color="white"
          fontSize={{ base: '16px', md: '20px' }}
          fontWeight='bold'
          borderRadius={{ base: 1000, lg: styleConstants.borderRadius }}
          as="a"
          href="https://drive.google.com/drive/folders/1Xj4G0-HFLhUIAAOK5hsXWJGYfEW4wXTR"
          target='_blank'
          _hover={{filter: 'brightness(1.1)'}}
          transition='all .2s'>
            View Photos
          </Text>
        </Flex>

        { /* the only reason this isnt in the flex is cuz we need less space on the bottom */}
        <Box mb={16}>
          <HeroSection />
        </Box>

        <Flex direction='column' rowGap={32}>

          <AdmissionsSection />
          {/* <TracksSection /> */}
          <WorkshopsSection />
          <ScheduleSection />
          <FAQSection />

          <Footer />

        </Flex>

      </Container>
    </>
  );
}

export default App;

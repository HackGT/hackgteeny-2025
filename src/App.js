import { Box, Container, Flex, useColorMode } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import PurpleDivider from './components/PurpleDivider';
import HeroSection from './components/hero/HeroSection';
import AdmissionsSection from './components/admissions/AdmissionsSection';
// import TracksSection from './components/tracks/TracksSection';
import ScheduleSection from './components/schedule/ScheduleSection';
import Footer from './components/Footer';
import FAQSection from './components/faq/FAQSection';
import WorkshopsSection from './components/workshops/WorkshopsSection';

function App() {

  const { colorMode, toggleColorMode } = useColorMode();

  if (colorMode === 'dark') {
    toggleColorMode();
  }

  return (
    <>
      <Container maxW='container.xl' py={4} px={10}>
        <NavBar />
        <PurpleDivider mb={16} mt={5} />

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

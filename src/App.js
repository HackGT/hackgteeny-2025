import { Box, Container, Flex } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import PurpleDivider from './components/PurpleDivider';
import GenericSection from './components/GenericSection';
import HeroSection from './components/hero/HeroSection';
import AdmissionsSection from './components/admissions/AdmissionsSection';
import TracksSection from './components/tracks/TracksSection';
import ScheduleSection from './components/schedule/ScheduleSection';
import Footer from './components/Footer';
import FAQSection from './components/faq/FAQSection';

function App() {
  return (
    <>
      <Container maxW='container.lg' p={4}>
        <NavBar />
        <PurpleDivider mb={16} mt={5} />

        { /* the only reason this isnt in the flex is cuz we need less space on the bottom */}
        <Box mb={16}>
          <HeroSection />
        </Box>

        <Flex direction='column' rowGap={32}>

          <AdmissionsSection />
          <TracksSection />
          <ScheduleSection />
          <FAQSection />

          <Footer />

        </Flex>

      </Container>
    </>
  );
}

export default App;

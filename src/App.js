import { Box, Container, Flex, Text } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import PurpleDivider from './components/PurpleDivider';
import GenericSection from './components/GenericSection';
import HeroSection from './components/hero/HeroSection';
import AdmissionsSection from './components/admissions/AdmissionsSection';
import TracksSection from './components/tracks/TracksSection';

function App() {
  return (
    <>
      <Container maxW='container.lg' p={4}>
        <NavBar />
        <PurpleDivider mb={16} />       

        { /* the only reason this isnt in the flex is cuz we need less space on the bottom */}
        <Box mb={16}>
          <HeroSection /> 
        </Box>

        <Flex direction='column' rowGap={32}>

          <AdmissionsSection />
          <TracksSection />

          <GenericSection id='admissions' title='Schedule'>
            <h3>Schedule stuff!!!</h3>
          </GenericSection>

          <GenericSection id='faqs' title='FAQs'>
            <h3>FAQ stuff!!!</h3>
          </GenericSection>

          <Text textAlign="center" fontSize="3xl">Footer</Text>

        </Flex>

      </Container>
    </>
  );
}

export default App;

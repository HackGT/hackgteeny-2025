import { Container, Flex } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import PurpleDivider from './components/PurpleDivider';
import GenericSection from './components/GenericSection';
import HeroSection from './components/hero/HeroSection';
import AdmissionsSection from './components/admissions/AdmissionsSection';

function App() {
  return (
    <>
      <Container maxW='container.lg' p={4}>
        <NavBar />
        <PurpleDivider mb={16} />        

        <Flex direction='column' rowGap={10}>

        <HeroSection />
        <AdmissionsSection />

          <GenericSection id='tracks' title='Tracks'>
            <h3>Tracks stuff!!!</h3>
          </GenericSection>

          <GenericSection id='admissions' title='Schedule'>
            <h3>Schedule stuff!!!</h3>
          </GenericSection>

          <GenericSection id='faqs' title='FAQs'>
            <h3>FAQ stuff!!!</h3>
          </GenericSection>
        </Flex>

      </Container>
    </>
  );
}

export default App;

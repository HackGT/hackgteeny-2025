import { Container } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import PurpleDivider from './components/PurpleDivider';

function App() {
  return (
    <>
      <Container maxW='container.lg' p={4}>
        <NavBar />

        <PurpleDivider />

      </Container>
    </>
  );
}

export default App;

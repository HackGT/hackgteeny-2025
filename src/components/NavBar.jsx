import { Flex, Box, useDisclosure, IconButton, Stack, Collapse, Link, Img, Text, Grid, Center } from '@chakra-ui/react';
import hackgteeny from '../assets/hackgteeny.png';
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const NavLink = ({ children, href, textAlign }) => {
  return (
    <Text textAlign={textAlign ?? "center"} fontSize="27px">
      <Link href={href} _hover={{
        color: "#7B69EC"
      }}>
        {children}
      </Link>
    </Text>
  );
};

const DesktopNavBar = () => {
  return (
    <Grid templateColumns="1fr 1fr 1fr 1fr 1fr" alignItems='center' gap={4} width='100%' justifyContent='space-between'>
      <NavLink href="#admissions">
        Admissions
      </NavLink>
      <NavLink href="#workshops">
        Workshops
      </NavLink>

      <Center>
        <Img src={hackgteeny} alt='HackGT' h="153px" />
      </Center>

      <NavLink href="#schedule">
        Schedule
      </NavLink>
      <NavLink href="#faq">
        FAQ
      </NavLink>
    </Grid>
  );
};

const MobileNavBar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box color="black" bg="white" >
      {/* Navbar Container */}
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
      >
        {/* Hamburger Menu */}
        <IconButton
          fontSize='25px'
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Menu"
          variant="ghost"
          color="black"
          onClick={onToggle}
          _hover={{}}
        />

        {/* Logo */}
        <Flex direction="column" align="center" flexGrow={1} ml="-25px">
          <Img src={hackgteeny} alt="HackGT" h="100px" />
        </Flex>
      </Flex>

      {/* Mobile Menu */}
      <Collapse in={isOpen} animateOpacity>
        <Stack
          as="nav"
          spacing={4}
          p={4}
          borderRadius="md"
        >
          <NavLink href="#admissions">
            Admissions
          </NavLink>
          <NavLink href="#workshops">
            Workshops
          </NavLink>
          <NavLink href="#schedule">
            Schedule
          </NavLink>
          <NavLink href="#faq">
            FAQ
          </NavLink>
        </Stack>
      </Collapse>
    </Box>
  );
};
const NavBar = () => {
  return (
    // conditional render using chakra ui
    <>
      <Box display={{ base: 'none', lg: 'block' }}>
        <DesktopNavBar />
      </Box>

      <Box display={{ base: 'block', lg: 'none' }}>
        <MobileNavBar />
      </Box>
    </>
  );
};

export default NavBar;;;
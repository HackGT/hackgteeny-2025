import { Flex, Box, useDisclosure, IconButton, HStack, Stack, Button, Collapse, Link, Img, Text } from '@chakra-ui/react';
import hackgteeny from '../img/hackgteeny.png';
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const NavLink = ({ children, href }) => {
  return (
    <Text fontSize="27px">
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
    <Flex alignItems='center' gap={4} width='100%' justifyContent='space-between'>
      <NavLink href="#admissions">
        Admissions
      </NavLink>
      <NavLink href="#tracks">
        Tracks
      </NavLink>
      <Img src={hackgteeny} alt='HackGT' h="153px" />
      <NavLink href="#schedule">
        Schedule
      </NavLink>
      <NavLink href="#faq">
        FAQ
      </NavLink>
    </Flex>
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
          size='lg'
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Menu"
          variant="ghost"
          color="black"
          onClick={onToggle}
        />

        {/* Logo */}
        <Flex direction="column" align="center" flexGrow={1}>
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
          <NavLink href="#tracks">
            Tracks
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
      <Box display={{ base: 'none', md: 'block' }}>
        <DesktopNavBar />
      </Box>

      <Box display={{ base: 'block', md: 'none' }}>
        <MobileNavBar />
      </Box>
    </>
  );
};

export default NavBar;;;
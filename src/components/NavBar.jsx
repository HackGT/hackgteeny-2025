import { Flex, Box, Heading, Link, Img, Text } from '@chakra-ui/react';
import hackgteeny from '../img/hackgteeny.png';
const NavLink = ({ children, href }) => {
  return (
    <Text fontSize="27px">
      <Link href={href}>
        {children}
      </Link>
    </Text>
  );
};

const NavBar = () => {
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
};;

export default NavBar;;
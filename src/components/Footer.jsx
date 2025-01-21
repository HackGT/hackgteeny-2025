import { Box, HStack, Text, Icon, Link } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTwitter, FaGithub, Faweb } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";

const LINKS = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/thehexlabs/",
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/TheHexLabs/",
  },
  {
    icon: FaTwitter,
    href: "https://x.com/thehexlabs/",
  },
  {
    icon: FaGithub,
    href: "https://github.com/HackGT",
  },
  {
    icon: IoIosGlobe,
    href: "https://hexlabs.org/",
  }
];

const Footer = () => {
  return (
    <Box color="#33C2FF" my={5}>
      <HStack justifyContent="center" gap={4}>
        {
          LINKS.map(({ icon, href }) => {
            return (
              <Link href={href} isExternal>
                <Icon as={icon} boxSize={6} _hover={{ color: "#7B69EC" }} />
              </Link>
            );
          })
        }
      </HStack>
      <Text align='center' fontWeight={600}>Made with ♡ by HexLabs</Text>
    </Box>
  );
};

export default Footer;
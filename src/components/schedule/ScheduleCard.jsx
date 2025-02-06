import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import styleConstants from '../../styleConstants';

const ScheduleCard = ({ color, title, children }) => {
  return (
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      gap={{ base: 2, lg: 16 }}
      alignItems='center'
    >
      {/* Left Column - Time */}
      <Text
        bgColor={color}
        borderRadius={styleConstants.borderRadius}
        color="white"
        fontSize={{ base: "18px", lg: "20px" }}
        fontWeight={400}
        p="0.6rem"
        w={{ base: "fit-content", lg: "250px" }}
        mx={{ base: "auto", lg: 0 }}
        textAlign='center'
        justifySelf="flex-end"
      >
        {title}
      </Text>

      {/* Right Column - Description */}
      <Box
        fontSize={{ base: "16px", lg: "20px" }}
        textAlign={{ base: 'center', lg: 'left' }}
      >
        {children}
      </Box>
    </SimpleGrid>
  );
};

export default ScheduleCard;
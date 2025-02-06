import { Box, Grid, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import styleConstants from '../../styleConstants';

const ScheduleCard = ({ color, title, children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  if (width >= 1024) {
    return (
      <>
        <Grid
          templateColumns='repeat(10, 1fr)'
          gap={16}
          alignItems="center"
          justifyContent='center'
          width='70%'
          mx='auto'
        >
          {/* Left Column - Time */}
          <GridItem colSpan={4}>
            <Text
              bgColor={color}
              borderRadius={styleConstants.borderRadius}
              color="white"
              maxWidth="250px"
              fontSize={{ base: '18px', lg: '20px' }}
              fontWeight={600}
              p="0.6rem"
              textAlign="center"
              mx='auto'
            >
              {title}
            </Text>
          </GridItem>

          <GridItem colSpan={6}>
            <Text fontSize={{ base: '16px', lg: '20px' }}>
              {children}
            </Text>
          </GridItem>
        </Grid>
      </>
    );
  } else {
    return (
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        gap={2}
        alignItems='center'
      >
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

        <Box
          fontSize={{ base: "16px", lg: "20px" }}
          textAlign={{ base: 'center', lg: 'left' }}
        >
          {children}
        </Box>
      </SimpleGrid>
    );
  }
};

export default ScheduleCard;
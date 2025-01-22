import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react'
import styleConstants from '../../styleConstants';

const AdmissionsCard = ({_imgSrc, title, children}) => {
	return (
		<Box
			display={{ base: 'flex', lg: 'grid' }} 
			gap={{base: 10, lg: 10}}
			gridTemplateColumns='1fr 1fr'
			flexDir={'column'}> {/* switch to horiz. on small scrns */}
			
				<Image mx="auto" src={_imgSrc} alt="" />

				<Box 
				display={{ base: 'flex', lg: 'block' }}
				flexDir='column'
				alignItems='center'>

					<Text 
					bgColor={styleConstants.colorPrimary}
					borderRadius={styleConstants.borderRadius}
					color="white"
					fontSize={{base: "20px", lg: "27px"}}
					fontWeight={600}
					p="0.6rem min(10vw, 4rem)"
					w={{base: "fit-content", lg: "300px"}}
					textAlign="center"
					h="fit-content"
					mb={8}>
						{title}
					</Text>

					<Box fontSize={{base: "16px", lg: "22px"}} textAlign={{base: 'center', lg: 'left'}}>
						{children}
					</Box>

				</Box>
			</Box>
	);
};

export default AdmissionsCard;
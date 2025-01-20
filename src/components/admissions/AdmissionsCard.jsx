import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react'
import styleConstants from '../../styleConstants';

const AdmissionsCard = ({imgSrc, title, content}) => {
	return (
		<Box
			display={{ base: 'flex', lg: 'grid' }} 
			gap={{base: 10, lg: 0}}
			gridTemplateColumns='1fr 1fr'
			flexDir={'column'}> {/* switch to horiz. on small scrns */}
				<Image mx="auto" src={imgSrc} h="80%" alt="" />
				<Box 
				display={{ base: 'flex', lg: 'block' }}
				flexDir='column'
				alignItems='center'>
					<Text 
					bgColor={styleConstants.colorPrimary}
					borderRadius={styleConstants.borderRadius}
					color="white"
					fontSize="xl"
					fontWeight={400}
					p="0.6rem 4rem"
					w="fit-content"
					h="fit-content"
					mb={8}>
						{title}
					</Text>
					<Text textAlign={{base: 'center', lg: 'left'}}>
						{content}
					</Text>
				</Box>
			</Box>
	);
};

export default AdmissionsCard;
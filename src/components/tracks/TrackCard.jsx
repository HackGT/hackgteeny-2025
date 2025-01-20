import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react'

const TrackCard = ({_imgSrc, title, content}) => {
	return (
		<Flex width="100%" flexDir={{base: 'column', lg: 'row'}} gap={10}>		

			{/* NOTE: 168 happens to be the max width that causes the headers to not wrap... */}
			<Image maxW="min(100%, 168px)" m="auto" src={_imgSrc} alt="" />

			<Box h="fit-content">
				<Text 
				fontSize={{base: "20px", lg: "30px"}}
				fontWeight={500} 
				mb={4} 
				textAlign={{base: 'center', lg: 'left'}}>
					{title}
				</Text>

				<Text fontSize={{base: "16px", lg: "15px"}} textAlign={{base: 'center', lg: 'left'}}>
					{content}
				</Text>
			</Box>
		</Flex>
	);
};

export default TrackCard;
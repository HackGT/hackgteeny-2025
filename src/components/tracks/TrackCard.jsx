import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react'

const TrackCard = ({_imgSrc, title, content}) => {
	return (
		<Flex width="100%" flexDir={{base: 'column', lg: 'row'}} gap={10}>		

			{/* NOTE: because of that flexDir above,
				- width only applies for base (mobile) 
				- height only matters for lg (desktop) 
				this is intended!!!! */}
			<Image maxW="min(100%, 200px)" m="auto" src={_imgSrc} alt="" />

			<Box h="fit-content">
				<Text 
				fontSize={{base: "3xl", lg: "2xl"}}
				fontWeight={600} 
				mb={4} 
				textAlign={{base: 'center', lg: 'left'}}>
					{title}
				</Text>

				<Text fontSize={{base: "md", lg: "sm"}} textAlign={{base: 'center', lg: 'left'}}>
					{content}
				</Text>
			</Box>
		</Flex>
	);
};

export default TrackCard;
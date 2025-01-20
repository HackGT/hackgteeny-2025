import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import GenericSection from '../GenericSection';

import heroImg from "../../assets/hero.svg";
import styleConstants from '../../styleConstants';

const HeroSection = () => {
	return (
		<GenericSection id='home'>

			<Box 
			bgColor={styleConstants.colorPrimary} 
			borderRadius={styleConstants.borderRadius} 
			padding="min(5vh, 3rem) min(10vw, 4rem)"
			display={{
				base: 'block',
				lg: 'flex',
			}}>

				<Flex flexDirection="column" gap={4}>
					<Text
					padding="1rem min(4vw, 2rem)"
					bgColor="white" 
					width="fit-content" 
					fontSize='3xl' 
					fontWeight='bold' 
					borderRadius={styleConstants.borderRadius}>
						Register
					</Text>

					<Text color="white">
						HackGTeeny is a series of six hour-and-a-half workshops for any Georgia Tech student who wants to learn fundamental concepts in CS, especially skills that apply at a hackathon. Workshops will happen daily at locations throughout Georgia Tech's campus from Monday, September 27th to Saturday, October 2nd. Each day is a new topic, ranging from data science to how to participate in a hackathon!
					</Text>
				</Flex>

				<Image ml="auto" src={heroImg} alt="" />

			</Box>

		</GenericSection>
	);
};

export default HeroSection;
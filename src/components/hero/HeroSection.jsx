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
			padding="min(5vmax, 3rem) min(8vmax, 4rem)"
			display={{
				base: 'block',
				lg: 'flex',
			}}>

				<Flex flexDirection="column" gap={4}>
					<Text
					padding="min(2vw, 1rem) min(4vw, 2rem)"
					bgColor="white" 
					width="fit-content" 
					fontSize={{base: '20px', lg: '35px'}}
					fontWeight='bold' 
					borderRadius={{base: 1000, lg: styleConstants.borderRadius}}>
						Register
					</Text>

					<Text color="white" fontSize={{base: '15px', lg: '20px'}}>
						HackGTeeny is a series of six hour-and-a-half workshops for any Georgia Tech student who wants to learn fundamental concepts in CS, especially skills that apply at a hackathon. Workshops will happen daily at locations throughout Georgia Tech's campus from Monday, September 27th to Saturday, October 2nd. Each day is a new topic, ranging from data science to how to participate in a hackathon!
					</Text>
				</Flex>

				<Image ml="auto" src={heroImg} alt="" />

			</Box>

		</GenericSection>
	);
};

export default HeroSection;
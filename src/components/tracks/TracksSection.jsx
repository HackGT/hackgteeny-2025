import React from 'react'
import GenericSection from '../GenericSection';
import { Box, Flex } from '@chakra-ui/react';
import TrackCard from './TrackCard';

import iphoneIcon from "../../assets/tracks/iphone.svg";
import barchartIcon from "../../assets/tracks/barchart.svg";
import paletteIcon from "../../assets/tracks/palette.svg";
import robotarmIcon from "../../assets/tracks/robotarm.svg";

// TODO: add text content
const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const TracksSection = () => {
	return (
		<GenericSection id="tracks" title="Tracks">
			<Box 
			display={{base: 'flex', lg: 'grid'}}
			/* base (mobile) */
			flexDir="column"

			/* lg (desktop) */
			gridTemplateRows={{lg: '1fr 1fr'}}
			gridTemplateColumns={{lg: '1fr 1fr'}}
			gap={16}>
				<TrackCard _imgSrc={iphoneIcon} title="App Development" content={loremIpsum} />
				<TrackCard _imgSrc={barchartIcon} title="Data Science" content={loremIpsum} />
				<TrackCard _imgSrc={paletteIcon} title="Design" content={loremIpsum} />
				<TrackCard _imgSrc={robotarmIcon} title="Systems" content={loremIpsum} />
			</Box>
		</GenericSection>
	);
};

export default TracksSection;
import React from 'react'
import PurpleDivider from "./PurpleDivider";
import { Box, Text } from '@chakra-ui/react';
import styleConstants from '../styleConstants';

/** Generic component for wrapping 'Tracks', 'Admissions', etc. */
const GenericSection = ({id, title, children}) => {
	return (
		<section id={id} className="generic-section">
			
			{title && // no text/purple bar if no title (specifically for the top section)
				<>
					<Text
					fontFamily={styleConstants.fonts.heading} 
					fontSize={{base: "25px", lg: "55px"}} 
					fontWeight="semibold" textAlign="center">
						{title}
					</Text>

					<PurpleDivider mt={5} mb={16} />
				</>
			}

			<Box>{children}</Box>
		</section>
	);
};

export default GenericSection;
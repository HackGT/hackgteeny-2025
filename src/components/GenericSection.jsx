import React from 'react'
import PurpleDivider from "./PurpleDivider";
import { Box, Text } from '@chakra-ui/react';

/** Generic component for wrapping 'Tracks', 'Admissions', etc. */
const GenericSection = ({id, title, children}) => {
	return (
		<section id={id} className="generic-section">
			
			{title && // no text/purple bar if no title (specifically for the top section)
				<>
					<Text fontSize="55px" fontWeight="bold" textAlign="center">
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
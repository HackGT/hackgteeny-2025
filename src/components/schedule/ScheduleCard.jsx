import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import styleConstants from '../../styleConstants';

const ScheduleCard = ({ color, title, children }) => {
	return (
		<Box
			display={{ base: 'flex', lg: 'grid' }}
			gap={{ base: 2, lg: 10 }}
			gridTemplateColumns={{ base: '1fr', lg: 'auto auto' }}
			flexDir="column"
		>
			{/* Left Column - Time */}
			<Box
				display="flex"
				flexDir="column"
				alignItems={{ base: 'center', lg: 'flex-start' }}
			>
				<Text
					bgColor={color}
					borderRadius={styleConstants.borderRadius}
					color="white"
					fontSize={{ base: "18px", lg: "20px" }}
					fontWeight={400}
					p="0.6rem min(10vw, 4rem)"
					w={{ base: "fit-content", lg: "190px" }}
					textAlign={{ base: 'center', lg: 'flex-start' }}
					h="fit-content"
				>
					{title}
				</Text>
			</Box>

			{/* Right Column - Description */}
			<Box
				fontSize={{ base: "16px", lg: "20px" }}
				textAlign={{ base: 'center', lg: 'left' }}
				display="flex"
				flexDir="column"
				alignItems={{ base: 'center', lg: 'flex-start' }}
				justifyContent="center"
			>
				{children}
			</Box>
		</Box>
	);
};

export default ScheduleCard;
import { Box, Image, Text } from '@chakra-ui/react';
import styleConstants from '../../styleConstants';

const WorkshopCard = ({ title, icon, children }) => {
	return (
		<Box
			textAlign={{ base: 'center', lg: 'left' }}
			gap={4}
			alignItems="center">

			<Image
				alignSelf={{ base: 'flex-start', lg: 'center' }}
				width={{ base: "30vw", lg: "unset" }}
				src={icon}
				alt={title}
				mx={{ base: 'auto', lg: '0' }}
				mb={26} />

			<Box
				display='flex'
				flexDir='column'>
				<Text
					mb={26}
					textAlign='center'
					fontFamily={styleConstants.fonts.subheading}
					fontSize={{ base: '20px', lg: '27px' }}
					fontWeight='500'>
					{title}
				</Text>

				<Box fontSize={{ base: '16px', lg: '18px' }}>
					{children}
				</Box>
			</Box>

		</Box>
	);
};

export default WorkshopCard;
import { Box, Image, Text } from '@chakra-ui/react';
import styleConstants from '../../styleConstants';

const WorkshopCard = ({title, icon, children}) => {
	return (
		<Box
		gap={4}
		display={{base: 'flex', lg: 'block'}}
		alignItems="center">
		
			<Image 
			alignSelf={{base: 'flex-start', lg: 'center'}}
			width={{base: "30vw", lg: "unset"}}
			src={icon} 
			alt={title} 
			mb={26} />
			
			<Box
			display='flex'
			flexDir='column'>
				<Text 
				mb={26}
				fontFamily={styleConstants.fonts.subheading} 
				fontSize='22.8px' 
				fontWeight='500'>
					{title}
				</Text>

				<Box fontSize='11.4px'>
					{children}
				</Box>
			</Box>

		</Box>
	);
};

export default WorkshopCard;
import React from 'react'
import GenericSection from '../GenericSection';
import { Box, Grid, Image, Text } from '@chakra-ui/react';

import cubes1 from "../../assets/cubes1.svg";
import mentor1 from "../../assets/mentor1.svg";
import styleConstants from '../../styleConstants';

const AdmissionsSection = () => {
	return (
		<GenericSection id="admissions" title="Admissions">

			<Box
			display={{ base: 'flex', lg: 'grid' }} 
			gap={{base: 10, lg: 0}}
			gridTemplateColumns='1fr 1fr'
			flexDir={'column'} /* switch to horiz. on small scrns */
			mb={{base: 16, lg: 4}}>
				<Image mx="auto" src={cubes1} h="80%" alt="" />
				<Box 
				display={{ base: 'flex', lg: 'block' }}
				flexDir='column'
				alignItems='center'>
					<Text 
					bgColor={styleConstants.colorPrimary}
					borderRadius={styleConstants.borderRadius}
					color="white"
					fontSize="xl"
					fontWeight={400}
					p="0.6rem 4rem"
					w="fit-content"
					h="fit-content"
					mb={8}>
						Participants
					</Text>
					<Text textAlign={{base: 'center', lg: 'left'}}>
						Admissions for the event will be first come first serve per workshop (more information below), and for GT students only. However, all materials and workshop recordings will be available for free online after the event. Only those registered for the event will be allowed to attend workshops.
					</Text>
				</Box>
			</Box>

			<Box
			display={{ base: 'flex', lg: 'grid' }} 
			gap={{base: 10, lg: 0}}
			gridTemplateColumns='1fr 1fr'
			flexDir={'column'}> {/* switch to horiz. on small scrns */}
				<Image mx="auto" src={mentor1} h="80%" alt="" />
				<Box 
				display={{ base: 'flex', lg: 'block' }}
				flexDir='column'
				alignItems='center'>
					<Text 
					bgColor={styleConstants.colorPrimary}
					borderRadius={styleConstants.borderRadius}
					color="white"
					fontSize="xl"
					fontWeight={400}
					p="0.6rem 4rem"
					w="fit-content"
					h="fit-content"
					mb={8}>
						Mentors
					</Text>
					<Text textAlign={{base: 'center', lg: 'left'}}>
					We are looking for mentors for HackGTeeny! Any students or industry professionals who are patient, knowledgeable, and have a passion for at least one of the workshop topics are encouraged to sign up! You do not have to attend every workshop; but we'd love to have you as often as you'd like! You will help participants during the workshops to answer questions, and we will have training sessions and more information about how to prepare. **This mentor registration is separate from the HackGT 8 mentor registration**. If you already signed up for HackGT 8 as a mentor, you do not need to fill out the free response questions. If you are accepted as a HackGTeeny mentor you will automatically be a HackGT 8 mentor if you indicate in the registration.
					</Text>
				</Box>
			</Box>

		</GenericSection>
	);
};

export default AdmissionsSection;
import React from 'react'
import GenericSection from '../GenericSection';
import { Flex } from '@chakra-ui/react';

import cubes1 from "../../assets/cubes1.svg";
import mentor1 from "../../assets/mentor1.svg";
import AdmissionsCard from './AdmissionsCard';

const AdmissionsSection = () => {
	return (
		<GenericSection id="admissions" title="Admissions">
			<Flex flexDir="column" gap={16}>

				<AdmissionsCard
				_imgSrc={cubes1}
				title={"Participants"}
				content={"Admissions for the event will be first come first serve per workshop (more information below), and for GT students only. However, all materials and workshop recordings will be available for free online after the event. Only those registered for the event will be allowed to attend workshops."}
				/>

				<AdmissionsCard
				_imgSrc={mentor1}
				title={"Mentors"}
				content={"We are looking for mentors for HackGTeeny! Any students or industry professionals who are patient, knowledgeable, and have a passion for at least one of the workshop topics are encouraged to sign up! You do not have to attend every workshop; but we'd love to have you as often as you'd like! You will help participants during the workshops to answer questions, and we will have training sessions and more information about how to prepare. **This mentor registration is separate from the HackGT 8 mentor registration**. If you already signed up for HackGT 8 as a mentor, you do not need to fill out the free response questions. If you are accepted as a HackGTeeny mentor you will automatically be a HackGT 8 mentor if you indicate in the registration."}
				/>

			</Flex>
		</GenericSection>
	);
};

export default AdmissionsSection;
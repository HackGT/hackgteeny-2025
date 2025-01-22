import React from 'react'
import GenericSection from '../GenericSection';
import { Flex } from '@chakra-ui/react';

import cubes1 from "../../assets/cubes1.svg";
// import mentor1 from "../../assets/mentor1.svg";
import AdmissionsCard from './AdmissionsCard';

const AdmissionsSection = () => {
	return (
		<GenericSection id="admissions" title="Admissions">
			<Flex flexDir="column" gap={16}>

				<AdmissionsCard
				_imgSrc={cubes1}
				title={"Participants"}>
					All Georgia Tech students are welcome to apply to participate in HackGTeeny! Applications will be open from <b>February 1 to February 26, 2025</b>. Only students who are admitted to the event will be eligible to attend the workshops. <b>Participants will also receive priority acceptance to HackGT 12.</b> Each workshop will be hosted by a different CoC club, and there will be a mini-competition at the end of each session, with unique prizes for each workshop winner!
				</AdmissionsCard>

				{/* [admissions section removed as of 2025 hi-fi, 21 jan 2025]
				<AdmissionsCard
				_imgSrc={mentor1}
				title={"Mentors"}>
					We are looking for mentors for HackGTeeny! Any students or industry professionals who are patient, knowledgeable, and have a passion for at least one of the workshop topics are encouraged to sign up! You do not have to attend every workshop; but we'd love to have you as often as you'd like! You will help participants during the workshops to answer questions, and we will have training sessions and more information about how to prepare. 
					<br /><br />
					<b>This mentor registration is separate from the HackGT 8 mentor registration</b>. If you already signed up for HackGT 8 as a mentor, you do not need to fill out the free response questions. If you are accepted as a HackGTeeny mentor you will automatically be a HackGT 8 mentor if you indicate in the registration.
				</AdmissionsCard>
				*/}

			</Flex>
		</GenericSection>
	);
};

export default AdmissionsSection;
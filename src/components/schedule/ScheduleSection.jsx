import React from 'react';
import GenericSection from '../GenericSection';
import { Flex, Text } from '@chakra-ui/react';
import ScheduleCard from './ScheduleCard';

const ScheduleSection = () => {
	return (
		<GenericSection id="schedule" title="Schedule">
			<Text fontSize='xl' align='center'>We&apos;re working on it, coming soon!</Text>
			{/* <Flex flexDir="column" gap={16}>

				<ScheduleCard
					title={"10 am"} color={"#33C2FF"}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</ScheduleCard>

				<ScheduleCard
					title={"10 am"} color={"#4DA2F8"}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</ScheduleCard>

				<ScheduleCard
					title={"10 am"} color={"#6585F2"}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</ScheduleCard>

				<ScheduleCard
					title={"10 am"} color={"#7B69EC"}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</ScheduleCard>

			</Flex> */}
		</GenericSection>
	);
};

export default ScheduleSection;
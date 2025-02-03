import React from 'react';
import GenericSection from '../GenericSection';
import { Flex } from '@chakra-ui/react';
import ScheduleCard from './ScheduleCard';

/*
9:30 AM to 10:30 AM: Checkin —> Outside Klaus 1443
10:30 AM to 11:00 AM: Opening Ceremony —> Klaus 1443
11AM to 12PM: Al @ GT workshop —> Klaus 2443
12PM to 1pm: Lunch (pizza) —> Klaus 1443
1PM to 2PM: Design Club Workshop —> Klaus 1443
2PM to 3PM: IOS and GitMad (choose 1) —> IOS at Klaus 2443, GitMad at Klaus 1443
3 PM to 3:30PM: BREAK
3:30PM to 4:30PM: Startup Exchange Big Tech Speaker —> Klaus 2443
4:30PM to 5PM: Closing Ceremony, Hand out Shirts —> Klaus
*/

const SCHEDULE_ITEMS = [
	{
		time: "9:30 - 10:30 AM",
		description: "Check In: Outside Klaus 1443",
		color: "#33c2ff"
	},
	{
		time: "10:30 - 11:00 AM",
		description: "Opening Ceremony: Klaus 1443",
		color: "#29b9ff"
	},
	{
		time: "11:00 AM - 12:00 PM",
		description: "Al @ GT Workshop: Klaus 2443",
		color: "#28afff"
	},
	{
		time: "12:00 - 1:00 PM",
		description: "Lunch (Pizza): Klaus 1443",
		color: "#30a5ff"
	},
	{
		time: "1:00 - 2:00 PM",
		description: "Design Club Workshop: Klaus 1443",
		color: "#3e9bff"
	},
	{
		time: "2:00 - 3:00 PM",
		description: "IOS and GitMad (Choose 1): IOS at Klaus 2443, GitMad at Klaus 1443",
		color: "#4d90ff"
	},
	{
		time: "3:00 - 3:30 PM",
		description: "BREAK",
		color: "#5d84fb"
	},
	{
		time: "3:30 - 4:30 PM",
		description: "Startup Exchange Big Tech Speaker: Klaus 2443",
		color: "#6c77f5"
	},
	{
		time: "4:30 - 5:00 PM",
		description: "Closing Ceremony: Klaus 1443",
		color: "#7b69ec"
	}
];

const ScheduleSection = () => {
	return (
		<GenericSection id="schedule" title="Schedule">
			<Flex flexDir="column" gap={16}>

				{
					SCHEDULE_ITEMS.map((item, index) => {
						return (
							<ScheduleCard key={index} title={item.time} color={item.color}>
								{item.description}
							</ScheduleCard>
						);
					})
				}

				{/* <ScheduleCard
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
				</ScheduleCard> */}

			</Flex>
		</GenericSection>
	);
};

export default ScheduleSection;
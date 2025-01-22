import React from 'react'
import GenericSection from '../GenericSection';
import { Grid } from '@chakra-ui/react';

import WorkshopCard from './WorkshopCard';

import aiAtGt_icon from '../../assets/workshops/aiAtGT_icon.png';
import gitMad_icon from '../../assets/workshops/gitMad_icon.png';
import gtDesign_icon from '../../assets/workshops/gtDesign_icon.png';
import ios_icon from '../../assets/workshops/ios_icon.png';
import startupExchange_icon from '../../assets/workshops/startupExchange_icon.png';

const WorkshopsSection = () => {
	return (
		<GenericSection id="workshops" title="Workshops">
			<Grid 
			gap={12}
			templateRows={{base: "repeat(5, 1fr)", lg: "1fr"}}
			templateColumns={{base: "1fr", lg: "repeat(5, 1fr)"}}>

				<WorkshopCard title="GT Design" icon={gtDesign_icon}>
					Led by GT Design, this workshop will cover the fundamentals of Figma and website design. Participants will learn how to create mockup designs and gain hands-on experience in bringing their ideas to life through design tools.
				</WorkshopCard>

				<WorkshopCard title="iOS" icon={ios_icon}>
				This workshop, hosted by iOS Club, will teach participants how to plan and design iOS apps using Swift and Xcode. You'll gain hands-on experience building a basic iOS app from the ground up!
				</WorkshopCard>

				<WorkshopCard title="GitMad" icon={gitMad_icon}>
					In GitMad's workshop, you'll dive into the basics of Android app development using Android Studio. Get practical experience with developing and deploying Android applications, and leave with a solid foundation for your next app project.
				</WorkshopCard>

				<WorkshopCard title="AI @ GT" icon={aiAtGt_icon}>
				AI@GT’s workshop will be an introduction to the world of artificial intelligence. Learn how to work with tools like Python, TensorFlow, and machine learning algorithms to build AI models and understand their real-world applications.
				</WorkshopCard>

				<WorkshopCard title="Startup Exchange" icon={startupExchange_icon}>
				Learn about how to start your entrepreneurial journey by utilizing resources all around you with Georgia Tech's Startup Exchange organization.
				</WorkshopCard>

			</Grid>
		</GenericSection>
	);
};

export default WorkshopsSection;
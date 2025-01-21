import React from 'react'
import GenericSection from '../GenericSection';
import { Flex } from '@chakra-ui/react';
import FAQCard from './FAQCard';

const FAQSection = () => {
	return (
		<GenericSection id="faq" title="FAQ">
			<Flex flexDir="column" gap={13}>
				<FAQCard
				title = {"How do I participate?"} 
				text = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
				>	
				</FAQCard>

				<FAQCard
				title = {"Who is eligible to participate?"} 
				text = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
				>	
				</FAQCard>

				<FAQCard
				title = {"Add a FAQ here"} 
				text = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
				>	
				</FAQCard>
			</Flex>
		</GenericSection>
	);
};

export default FAQSection;

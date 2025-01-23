import React from 'react';
import GenericSection from '../GenericSection';
import { Flex } from '@chakra-ui/react';
import FAQCard from './FAQCard';

const FAQS = [
	{
		question: "Who is eligible to participate?",
		answer: "Any student in the Atlanta-area who can attend the event in person (at the Klaus Advanced Computing Building) eligible to participate. No prior computer science experience is required!"
	}
];

const FAQSection = () => {
	return (
		<GenericSection id="faq" title="FAQ">
			<Flex flexDir="column" gap={13}>
				{
					FAQS.map((faq, index) => {
						return (
							<FAQCard
								key={index}
								title={faq.question}
								text={faq.answer}
							>
							</FAQCard>
						);
					}
					)
				}
			</Flex>
		</GenericSection>
	);
};

export default FAQSection;

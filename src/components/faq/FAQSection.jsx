import React from 'react';
import GenericSection from '../GenericSection';
import { Flex } from '@chakra-ui/react';
import FAQCard from './FAQCard';

const FAQS = [
	{
		question: "How do I participate?",
		answer: "Template answer"
	},
	{
		question: "Who is eligible to participate?",
		answer: "Any student at Georgia Tech, regardless of major or year, can participate in HackGTeeny. Admissions is first come first serve per workshop, so register soon!"
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

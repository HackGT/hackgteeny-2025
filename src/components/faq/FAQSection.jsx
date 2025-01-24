import React from 'react';
import GenericSection from '../GenericSection';
import { Flex } from '@chakra-ui/react';
import FAQCard from './FAQCard';

/*
Q: When and where will HackGTeeny take place?
A: HackGTeeny will take place on March 1st, 2025, in the Klaus classrooms on the Georgia Tech campus. Workshops will take place all day starting from noon!

Q: How do I apply for HackGTeeny?
A: Applications for HackGTeeny will be open from February 1 to February 26, 2025. To apply, fill out the application linked in above, or access it at registration.hexlabs.org. We’ll review applications and admit participants based on enthusiasm and interest in learning!

Q: What are the mini-competitions at the end of each workshop?
A: Each workshop will conclude with a mini-competition where you’ll get to apply the skills you just learned! These challenges will test your knowledge from the session, and prizes range from high-tech keyboards to Echo Dots!
Q: Will attending HackGTeeny guarantee me a spot at HackGT 12?
A: Participating in HackGTeeny will give you priority acceptance to HackGT 12, but it does not guarantee entry. It’s a great way to get early access, but final admission to HackGT 12 will still be based on the application you submit then.
Q: Are the workshops free to attend?
A: Yes, HackGTeeny is completely free to attend! We will also provide dinner to all participants, and a few bonus merch, such as T-shirt and stickers!


*/
const FAQS = [
	{
		question: "Who is allowed to apply to be a participant in HackGTeeny?",
		answer: "HackGTeeny is open to students of all years and majors! We encourage individuals from all technical backgrounds, including those with no prior coding experience, to apply!"
	},
	{
		"question": "When and where will HackGTeeny take place?",
		"answer": "HackGTeeny will take place on March 1st, 2025, in the Klaus classrooms on the Georgia Tech campus. Workshops will take place all day starting from noon!"
	},
	{
		"question": "How do I apply for HackGTeeny?",
		"answer": "Applications for HackGTeeny will be open from February 1 to February 26, 2025. To apply, fill out the application linked in above, or access it at registration.hexlabs.org. We’ll review applications and admit participants based on enthusiasm and interest in learning!"
	},
	{
		"question": "What are the mini-competitions at the end of each workshop?",
		"answer": "Each workshop will conclude with a mini-competition where you’ll get to apply the skills you just learned! These challenges will test your knowledge from the session, and prizes range from high-tech keyboards to Echo Dots!"
	},
	{
		"question": "Will attending HackGTeeny guarantee me a spot at HackGT 12?",
		"answer": "Participating in HackGTeeny will give you priority acceptance to HackGT 12, but it does not guarantee entry. It’s a great way to get early access, but final admission to HackGT 12 will still be based on the application you submit then."
	},
	{
		"question": "Are the workshops free to attend?",
		"answer": "Yes, HackGTeeny is completely free to attend! We will also provide dinner to all participants, and a few bonus merch, such as T-shirt and stickers!"
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


import { React, useState } from 'react';

import {
  Text,
  Accordion as AccordionRoot,
  AccordionItem,
  AccordionButton as AccordionItemTrigger,
  AccordionPanel as AccordionItemContent,
} from "@chakra-ui/react";

import {
  AddIcon, MinusIcon
} from "@chakra-ui/icons";

const FAQCard = ({ title, text }) => {

  const [answerVisible, setAnswerVisible] = useState(false);

  const onToggle = () => {
    setAnswerVisible(!answerVisible);
  };

  return (
    <AccordionRoot allowToggle bgColor={"#33C2FF"} borderRadius={"20px"} >
      <AccordionItem borderRadius={"20px"}>
        <AccordionItemTrigger onClick={onToggle} borderRadius={"20px"}>
          <Text flex="1" textAlign="left" color={"#FFFFFF"} padding={"5px"}>{title} </Text>
          {answerVisible ? <MinusIcon color={"#FFFFFF"} /> : <AddIcon color={"#FFFFFF"} />}
        </AccordionItemTrigger>
        <AccordionItemContent bgColor={"#CCF0FF"} borderBottomRadius={"18px"} >{text}</AccordionItemContent>
      </AccordionItem>
    </AccordionRoot>
  );
};

export default FAQCard;
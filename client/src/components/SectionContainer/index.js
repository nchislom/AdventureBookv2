import React from "react";
import ChoiceButton from "../ChoiceButton";
import SectionTitle from "../SectionTitle";
import SectionText from "../SectionText";

import "./style.css";

const SectionContainer = (props) => {
  return (
    <div>
        <SectionTitle>{ props.scene_title }</SectionTitle>
        <SectionText>{ props.scene_text }</SectionText>
        <ChoiceButton className="choice" id="choice_a">{ props.choice_a }</ChoiceButton>
        <ChoiceButton className="choice" id="choice_b">{ props.choice_b }</ChoiceButton>
    </div>
  );
};

export default SectionContainer;
import React from "react";
import { GenerateTimetableWrap } from "./GenerateTimetableScreen.styles";
import { PageWrapper } from "../../styles/shared/PageWrapper";

const GenerateTimetableScreen = () => {
  return (
    <GenerateTimetableWrap>
      <PageWrapper>
        <h1>Generate Timetable</h1>
        <p>Generate timetables here.</p>
      </PageWrapper>
    </GenerateTimetableWrap>
  );
};

export default GenerateTimetableScreen;
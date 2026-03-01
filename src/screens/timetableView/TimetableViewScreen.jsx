import React from "react";
import { TimetableViewWrap } from "./TimetableViewScreen.styles";
import { PageWrapper } from "../../styles/shared/PageWrapper";

const TimetableViewScreen = () => {
  return (
    <TimetableViewWrap>
      <PageWrapper>
        <h1>Timetable View</h1>
        <p>View timetables here.</p>
      </PageWrapper>
    </TimetableViewWrap>
  );
};

export default TimetableViewScreen;
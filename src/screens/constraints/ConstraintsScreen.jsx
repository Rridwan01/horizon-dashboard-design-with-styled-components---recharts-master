import React from "react";
import { ConstraintsWrap } from "./ConstraintsScreen.styles";
import { PageWrapper } from "../../styles/shared/PageWrapper";

const ConstraintsScreen = () => {
  return (
    <ConstraintsWrap>
      <PageWrapper>
        <h1>Constraints</h1>
        <p>Manage constraints here.</p>
      </PageWrapper>
    </ConstraintsWrap>
  );
};

export default ConstraintsScreen;
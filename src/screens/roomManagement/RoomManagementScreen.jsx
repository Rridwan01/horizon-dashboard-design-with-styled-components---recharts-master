import React from "react";
import { RoomManagementWrap } from "./RoomManagementScreen.styles";
import { PageWrapper } from "../../styles/shared/PageWrapper";

const RoomManagementScreen = () => {
  return (
    <RoomManagementWrap>
      <PageWrapper>
        <h1>Room Management</h1>
        <p>Manage rooms here.</p>
      </PageWrapper>
    </RoomManagementWrap>
  );
};

export default RoomManagementScreen;
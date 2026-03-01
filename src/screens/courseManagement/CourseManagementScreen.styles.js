import styled from "styled-components";
import { theme, media } from "../../styles/theme/theme";

export const CourseManagement = styled.div`
overflow-y: auto;
  padding: 20px;
  background-color: ${theme.colors.darkBlue};
  
  .screen-header {
    margin-bottom: 24px;
    
    h1 {
      color: ${theme.colors.white};
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 8px;

      ${media.lg`
        font-size: 24px;
      `}
    }
    
    p {
      color: ${theme.colors.powderBlue};
      font-size: 16px;
    }
  }

  .table-container {
    width: 100%;
    /* Added standard bottom margin similar to other dashboard rows */
    margin-bottom: 20px; 
  }
`;
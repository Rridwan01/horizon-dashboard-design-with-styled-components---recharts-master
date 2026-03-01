import styled from "styled-components";
import { BlockWrapStyles } from "../../../../styles/global/default";
import { theme } from "../../../../styles/theme/theme";

export const CourseTableWrap = styled.div`
  ${BlockWrapStyles}

  .course-table-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    .head-ttl {
      font-size: 24px;
    }

    .add-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      background-color: ${theme.colors.majorelleBlue};
      color: ${theme.colors.white};
      padding: 10px 16px;
      border-radius: 10px;
      font-weight: 500;
      font-size: 14px;

      &:hover {
        opacity: 0.9;
      }
    }
  }

  .course-table-content {
    .table-block {
      overflow-x: scroll;

      table {
        tbody {
          tr {
            .data-cell-actions {
              display: flex;
              align-items: center;
              gap: 16px;

              button {
                color: ${theme.colors.powderBlue};
                transition: ${theme.transitions.easeInOut};
                display: flex;
                align-items: center;
                justify-content: center;

                &:hover {
                  color: ${theme.colors.white};
                }

                &.delete-btn:hover {
                  color: ${theme.colors.danger};
                }
                
                &.edit-btn:hover {
                  color: ${theme.colors.pictonBlue};
                }
              }
            }
          }
        }
      }
    }
  }
`;
import styled from "styled-components";
import { SeoBox } from "../../pages/home/stylesHome";

export const MainFooter = styled(SeoBox)`
  width: 1036px;
  margin-left: 400px;
  border-top: 1px solid #ccc;
  .lista__item {
    margin-bottom: 8px;
  }
  .mainContainer {
    display: flex;
    flex-direction: row;
    width: 120px;

    .lista__container {
      margin-right: 150px;
    }
    .lista__item__title {
      width: 150px;
    }
  }

  .InfosFooter__container {
    margin-left: -396px;
    background-color: #fff;
    width: 1900px;
    .InfosFooter {
      margin: 0 396px;
      display: flex;
      justify-content: space-between;
      padding: 30px 0px;
      .footer__icons {
        svg {
          margin-right: 16px;
        }
      }
      .infos {
        span {
          margin-right: 16px;
          font-size: 13px;
        }
      }
    }
  }
`;

export const InfosBox = styled(MainFooter)`
  display: flex;
  .lista__container {
    margin-right: 176px;
    .lista {
      width: 120px;
      .lista__item {
        font-weight: 550;
      }
    }
  }
`;

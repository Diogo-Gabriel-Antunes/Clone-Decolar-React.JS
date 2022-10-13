import styled from 'styled-components';

export const Logo = styled.img`
  width: 70px;
`;
export const NavbarBox = styled.div`
  background-color: #fff;
  height: 150px;
`;

export const NavbarContainer = styled.div`
  margin: 0 315px;
  display: flex;
  margin-bottom: 7px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  width: 180px;
  a {
    display: flex;
    align-items: center;
  }
  p {
    color: #444444;
    margin-left: 8px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Conteudo = styled.div`
  background-color: #eee;
  display: flex;
  align-items: center;
  border-radius: 0px 0px 20px 20px;
  min-width: 900px;
  width: 100vh;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  margin-left: 300px;
  margin-top: -1px;
`;

export const BoxOpcoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 18px;
  svg {
    width: 28px;
    padding: 2px;
  }
  p {
    font-size: 14px;
    margin-top: 8px;
  }
  &:hover {
    cursor: pointer;
    color: #007aff;
    svg {
      color: #007aff;
    }
  }
  .ativo {
    border-bottom: 3px solid #270570;
    border-radius: 5px;
  }
`;

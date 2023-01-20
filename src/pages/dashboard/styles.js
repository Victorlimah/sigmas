import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;

  * {
    // desabilitar a border-box do mui
    border: none;
  }

  #logo {
    margin-left: 20px;
    font-weight: bold;
  }

  .nav-extended {
    background-color: #1565c0 !important;
  }

  .nav-wrapper {
    padding-top: 25px;
    margin-right: 50px;
  }

  .collapsible {
    color: #000;
  }

  .MuiBox-root {
    button {
      color: #fff;
    }

    .MuiTabPanel-root {
      background-color: #fff;
    }
  }
`;

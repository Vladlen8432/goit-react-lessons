import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  .modal {
    padding: 20px;
    max-width: 450px;
    width: 100%;
    min-height: 450px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &:hover {
      cursor: auto;
    }
  }

  .closeBtn {
    position: absolute;
    top: 15px;
    right: 15px;
  }
`;

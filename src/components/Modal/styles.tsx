import styled from '@emotion/styled';

export const CreateModal = styled.div`
  display: block;
  position: fixed;
  top: 50%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 150;
  width: 980px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseModalButton = styled.button`
  position: absolute;
  right: 10px;
  top: 6px;
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
`;

import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  margin: 0 auto;
  padding: 10px;
  width: 100%;
  position: relative;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
`;

export const ImageContainer = styled.div`
  flex: 1;
  margin-right: 16px;
  // background-color: skyblue;

  & img {
    width: 60%;
    height: auto;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12);
  }
`;

export const DescContainer = styled.div`
  flex: 1;
`;

export const DescriptionText = styled.p`
  font-size: 16px;
  color: #333;
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

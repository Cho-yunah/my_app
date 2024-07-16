import styled from '@emotion/styled';

export const WaveH2 = styled.span`
  display: inline-block;
  font-size: 1.3rem;
  font-weight: 700;
  color: #5c7cfa;
`;

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
  justify-content: center;
  text-align: center;

  & img {
    flex: 1;
    max-width: 60%;
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

export const FloatingArrowIcon = styled.div`
  position: fixed;
  bottom: 10px;
  left: 65%;
  transform: translateX(-50%);
  font-size: 24px;
  color: #007bff;
  background-color: white;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  padding-top: 5px;
  cursor: pointer;
  z-index: 1000;
`
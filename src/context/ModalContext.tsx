import React, { createContext, useState, useContext, FC, ReactNode } from 'react';
import CreateModal from '@/components/common/CreateModal'; // 모달 컴포넌트 임포트

interface ModalContextProps {
  show: boolean;
  openModal: (content: ReactNode, images?: string[]) => void;
  closeModal: () => void;
  modalContent: ReactNode | null;
  imageUrls: string[]; // 이미지 URL 배열 추가
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: FC<{ children: ReactNode, isMenuOpen: boolean }> = ({ children, isMenuOpen }) => {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);
  const [imageUrls, setImageUrls] = useState<string[]>([]); // 이미지 URL 배열 상태
  console.log('isMenuOpen', isMenuOpen);

  const openModal = (content: ReactNode, images?: string[]) => {
    setModalContent(content);
    setShow(true);
    if (images) setImageUrls(images); // 이미지 URL 배열 설정
  };

  const closeModal = () => {
    setShow(false);
    setModalContent(null);
    setImageUrls([]); // 모달 닫힐 때 이미지 초기화
  };

  return (
    <ModalContext.Provider value={{ show, openModal, closeModal, modalContent, imageUrls }}>
      {children}
      {/* CreateModal에 imageUrls와 modalContent 전달 */}
      <CreateModal show={show} onCloseModal={closeModal} imageUrls={imageUrls} isMenuOpen={isMenuOpen}>
        {modalContent}
      </CreateModal>
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

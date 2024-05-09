// import React, { FC, useCallback } from 'react';
// import { CloseModalButton, CreateModal } from './styles';

// interface ModalProps {
//   show: boolean;
//   onCloseModal: () => void;
//   children: React.ReactNode;
// }

// const Modal:FC<ModalProps> = ({show, children, onCloseModal}) => {

//     const stopPropagation = useCallback((e)=> {
//       e.stopPropagation();
//     },[])

//     if(!show) {
//       document.body.style.overflow = 'auto';
//       return null;
//     }

//     return (<>
//       {/* <CreateModal onClick={onCloseModal}>
//         <div onClick={stopPropagation}>
//           {children}
//         </div>
//       </CreateModal> */}
//           <Modal
//           isOpen={show}
//           onRequestClose={onCloseModal}
//           // style={customStyles}
//           contentLabel="Example Modal"
//         >
//           {/* <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton> */}
//     </>
//     )
// }

// {/* export default Modal; */}

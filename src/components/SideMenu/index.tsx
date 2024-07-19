import React, { FC, useEffect, useState } from 'react';
import {
  CurrentBar,
  ListItem,
  MenuContainer,
  MenuItem,
  Ripple,
} from './styles';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MENU_CONTENTS } from 'src/constants';

interface SideMenuProps {
    isMobileSize: boolean;
    closeMenu: () => void;
}

const SideMenu:FC<SideMenuProps> = ({isMobileSize, closeMenu}) => {
  const {pathname} = useLocation();

  useEffect(() => {    
    setCurrentWorkspace(pathname.split('/')[1]);
  },[pathname])
  
  const [currentWorkspace, setCurrentWorkspace] = useState('');
  // 각 리스트 아이템에 대한 rippleStyle을 별도로 관리하기 위해 배열로 상태를 관리합니다.
  const [rippleStyles, setRippleStyles] = useState(Array(3).fill({}));

  // 클릭 이벤트 핸들러
  const handleClick = ({ index, e }: { index: number, e: any }) => {
    const rect = e.target.getBoundingClientRect();
    const xPos = e.clientX - rect.left;
    const yPos = e.clientY - rect.top;

    const size = Math.max(rect.width, rect.height);
    const newRippleStyles = [...rippleStyles];
    newRippleStyles[index] = {
      top: yPos - size / 2 + 'px',
      left: xPos - size / 2 + 'px',
      width: size + 'px',
      height: size + 'px',
      transform: 'scale(10)',
      opacity: '0',
      transition: 'transform 1.5s, opacity 0.5s',
    };

    setRippleStyles(newRippleStyles);

    // 클릭 이벤트 처리
    setTimeout(() => {
      const resetRippleStyles = [...rippleStyles];
      resetRippleStyles[index] = {};
      setRippleStyles(resetRippleStyles);
    }, 500); // 애니메이션 지속 시간

    isMobileSize && closeMenu();  
  };  

  return (
    <MenuContainer>
      {MENU_CONTENTS.map((item, index) => {
        return (
          <ListItem key={item.title + index} onClick={(e) => handleClick({ index, e})}>
            <Link to={`/${item.to}`}>
              {currentWorkspace === item.to && <CurrentBar />}
              <MenuItem className={`${currentWorkspace === item.to ? 'active' : ''}`}>
                <p className='title'>{item.title}</p>
                <p className="tag">{item.tag}</p>
              </MenuItem>
            <Ripple style={rippleStyles[index]}></Ripple>
            </Link>
          </ListItem>
        );
      })}
    </MenuContainer>
  );
};

export default SideMenu;

import React, { useEffect, useState } from 'react';
import { CurrentBar, MenuContainer, MenuItem } from './styles';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MENU_CONTENTS } from 'src/constants';

const SideMenu = () => {
  const workspace = useParams();

  return (
    <>
      <MenuContainer>
        {MENU_CONTENTS.map((item, index) => {
          return (
            <Link key={item.title + index} to={`/workspace/${item.to}`}>
              {workspace['*'] === item.to && <CurrentBar />}
              <MenuItem>
                <div>{item.title}</div>
                <div className="tag">{item.tag}</div>
              </MenuItem>
            </Link>
          );
        })}
      </MenuContainer>
    </>
  );
};

export default SideMenu;

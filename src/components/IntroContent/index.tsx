import React from 'react';
import { MainDesc } from './style';
import { Route, Routes, useParams } from 'react-router-dom';
import ChekitMvp from '@components/ChekitMvp';
import ChekitApp from '@components/ChekitApp';

const IntroContent = () => {
  const { workspace } = useParams();
  console.log('intro', workspace);
  return (
    <div>
      <Routes>
        <Route path="mvp" element={<ChekitMvp />} />
        <Route path="/app" element={<ChekitApp />} />
        {/* <Route path="/workspace/:workspace" element={<Home />} /> */}
        <Route path="/:workspace" element={<IntroContent />} />
      </Routes>
      <div className="title">
        <span className="title_inner">Hello</span>
      </div>
      <MainDesc>
        <span>
          Yuna&apos;s work includes a wide range of fields, reflecting his abilities in graphic design, web-based
          design, UI design, motion graphic design, typography and many other fields. Recently he interested in iOS, web
          developent to create the actual product. He is working as a UI/Interaction Designer.
        </span>
        <br />
        <ul className="links">
          <li className="mail">
            <a href="mailto:favoryun12@gmail.com">favoryun12@gmail.com</a>
          </li>
          {/* <li className="behance">
                <a target="_blank" href="https://www.behance.net/anzi">
                  behance
                </a>
              </li> */}
        </ul>
        You can use left and right arrow key to navigate the page of works.{' ← →'}
      </MainDesc>
    </div>
  );
};

export default IntroContent;

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
      <div className="title">
        <span className="title_inner">Hello</span>
      </div>
      <MainDesc>
        <span>
          Yuna&apos;s expertise lies in frontend development, collaborative problem-solving, and a strong focus on
          customer satisfaction. she actively engages in project planning and implementation, always striving to improve
          user experience. Committed to continual growth and excellence, she welcomes feedback and eagerly seeks
          opportunities to contribute meaningfully to the company&apos;s goals.
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

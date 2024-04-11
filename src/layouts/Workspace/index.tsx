import React, { useEffect, useState } from 'react';
import { Article, Aside, Container, Content, ContentsHeader, MainDesc, SideHeader, SideList } from './style';
import ArrowRight from '@assets/svg/ArrowRight';
import MenuHamburger from '@assets/svg/MenuHamburger';

const Workspace = () => {
  const workCount = 5;
  const [isMobileSize, setIsMobileSize] = useState(window.innerWidth < 800);
  const onLogout = () => {
    console.log('hhh');
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileSize(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container>
      <Aside>
        <SideHeader>
          <div className="name">Yuna Cho</div>
          <div className="desc">Frontend Engineer</div>
          <div className="workCount">
            <span>{workCount}</span> works
          </div>
        </SideHeader>
        <SideList></SideList>
      </Aside>

      <Content id="content">
        <ContentsHeader>
          <div>{isMobileSize ? <MenuHamburger /> : <ArrowRight />}</div>
        </ContentsHeader>
        <Article>
          <div className="title">
            <span className="title_inner">Hello</span>
          </div>
          <MainDesc>
            <span>
              Yuna&apos;s work includes a wide range of fields, reflecting his abilities in graphic design, web-based
              design, UI design, motion graphic design, typography and many other fields. Recently he interested in iOS,
              web developent to create the actual product. He is working as a UI/Interaction Designer.
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
        </Article>
      </Content>
      {/* 
      <WorkspaceWrapper>
      <Workspaces>test</Workspaces>
      <Channels>
        <WorkspaceName>Sleact</WorkspaceName>
        <MenuScroll>menuscroll</MenuScroll>
      </Channels>
      <Chats>
        {/* <Switch>
          <Route  path='/workspace/channel' component={Channel} />
          <Route  path='/workspace/dm' component={DirectMessage} />
        </Switch> 

     </Chats> 
    </WorkspaceWrapper> 
    */}
    </Container>
  );
};

export default Workspace;

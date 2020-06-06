/** @jsx jsx */
import React, { FC } from 'react';
import { jsx, css } from '@emotion/core';

import Header from './Header';

const wrapper = css({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#181818',
});

const main = css({
  paddingTop: '56px',
  display: 'flex',
  flex: '1',
  width: '100%',
  backgroundColor: '#181818',
  '@media screen and (max-width: 960px)': {
    maxWidth: '90%',
    margin: '0 auto',
    flexDirection: 'column',
  },
});

const Layout: FC = ({ children }) => {
  return (
    <div css={wrapper}>
      <Header />
      <div css={main}>{children}</div>
    </div>
  );
};

export default Layout;

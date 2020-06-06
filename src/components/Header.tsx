import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <header>
      <Link to="/">YouTubeClone</Link>
      <div>
        <form>
          <input type="text" placeholder="検索" />
          <button type="submit">検索</button>
        </form>
      </div>
    </header>
  );
};

export default Header;

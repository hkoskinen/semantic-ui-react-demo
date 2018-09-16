import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = () => (
  <div>
    <h1>appnamegoeshere</h1>
    <nav>
      <Link to='/'>home</Link>
      <Link to='/register'>register</Link>
      <Link to='/login'>login</Link>
    </nav>
  </div>
);

export default PageHeader;

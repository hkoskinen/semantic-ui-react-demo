import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';

const PageHeader = () => (
  <div>
    <Menu fixed='top' inverted>
      <Menu.Item as={Link} to='/'>home</Menu.Item>
      <Menu.Item as={Link} to='/register'>register</Menu.Item>
      <Menu.Item as={Link} to='/login'>login</Menu.Item>
    </Menu>
  </div>
);

export default PageHeader;

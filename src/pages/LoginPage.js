import React from 'react';
import { Container, Header, Form, Button } from 'semantic-ui-react';

const LoginPage = () => (
  <div>
    <Container style={{ marginTop: '7em' }}>
      <Header as='h1'>Login</Header>

      <Form>
        <Form.Field>
          <label htmlFor='username'>Username</label>
          <input placeholder='username' id='username' />
        </Form.Field>
        <Form.Field>
          <label htmlFor='password'>Password</label>
          <input placeholder='password' id='password' type='password' />
        </Form.Field>
        <Button type='submit'>Log In</Button>
      </Form>

    </Container>
  </div>
);

export default LoginPage;

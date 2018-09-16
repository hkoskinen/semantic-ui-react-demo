import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

const HomePage = () => (
  <div>
    <Container style={{ marginTop: '7em' }}>
      <Header as='h1'>my notebook app</Header>
    </Container>
  </div>
);

const mapStateToProps = state => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps)(HomePage);

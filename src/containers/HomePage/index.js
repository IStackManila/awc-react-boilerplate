import React, { Component } from 'react';
import styled from 'styled-components';
import logo from 'images/logo-black.svg';
import { Button } from 'antd';

const Wrapper = styled.section`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;

  > img {
    width: 150px;
  }
  > h1 {
    margin-top: 20px;
    font-weight: 300;
    font-size: 2.5em;
    margin: 25px 0;
  }
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <img src={logo} alt="" />
        <h1 className="boom">Welcome to AWC boilerplate<br />{process.env.REACT_APP_HOST}</h1>
        <Button type="primary">boom</Button>
      </Wrapper>
    );
  }
}

export default App;

import React from 'react';
import Header from './components/Header';
import GlobalStyle  from './theme/globalStyle';
import styled from 'styled-components';
import Profile from './components/Profile';

const AppWrapper = styled.div`
  background-color: #fafafa;
`

class App extends React.Component {
    render() {
      return (

        <>
            <AppWrapper>
                <GlobalStyle />
                <Header></Header>
                <Profile></Profile>
            </AppWrapper>
        </>
        
      );
    }
  }
  
  export default App;
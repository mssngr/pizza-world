import React from 'react'
import styled from 'styled-components'

import EditThis from './EditThis'

/* STYLES */
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-color: #08293f;
  color: white;
`

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: #08293f;
`

const HeaderTitle = styled.h1`
  position: absolute;
  margin: 0;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
`

const HeaderLogo = styled.img`
  height: 100%;
  mix-blend-mode: lighten;
  border-radius: 50%;
`

const FooterText = styled.p`
  text-align: center;
`

/* PRESENTATION */
export default class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <EditThis />
        <Footer />
      </AppContainer>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <HeaderLogo
          alt="spinning pizza world logo"
          src="https://cdn-images-1.medium.com/max/1600/1*ugOYJijzYBEw3a6yIvZ2cg.gif"
        />
        <HeaderTitle>Pizza World</HeaderTitle>
      </HeaderContainer>
    )
  }
}

class Footer extends React.Component {
  render() {
    return <FooterText>© Pizzas Anonymous</FooterText>
  }
}

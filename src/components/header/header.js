import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'
import LoginImageSorce from '../../assets/icons/login-icon.svg'

const MainHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 10vh;
  @media (min-width: 768px) {
    padding: 0 5rem;
  }
`

const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginLink = styled(Link)`
  font-size: 14px;
  color: #ffffff;
  font-weight: bold;
  text-decoration: none;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`

const LoginImage = styled.img`
  width: auto;
  height: 20px;
  margin-right: 0.3em;
  @media (min-width: 768px) {
    height: 35px;
    margin-right: 0.5em;
  }
`

const Logo = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 20px;
  @media (min-width: 768px) {
    font-size: 2em;
  }
`

const Header = ({ siteTitle }) => (
  <MainHeader>
    <h1>
      <Logo to="/">{siteTitle}</Logo>
    </h1>
    <Login>
      <LoginImage src={LoginImageSorce} />
      <LoginLink to="profile">Login</LoginLink>
    </Login>
  </MainHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

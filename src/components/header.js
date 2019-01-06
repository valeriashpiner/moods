import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'
import LoginImageSorce from '../assets/icons/login-icon.svg';

const MainHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  height: 10vh;
`;

const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginSpan = styled.span`
  font-size: 16px;
  color: #FFFFFF;
  font-weight: bold;
`;

const LoginImage = styled.img`
  width: auto;
  height: 35px;
  margin-right: 0.5em;
`;

const Header = ({ siteTitle }) => (
  <MainHeader>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    <Login>
      <LoginImage src={LoginImageSorce} />
      <LoginSpan>
        Login
      </LoginSpan>
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

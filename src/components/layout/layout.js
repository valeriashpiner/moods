import React from 'react'
import PropTypes from 'prop-types'
import {
  FisrtGradient,
  SecondGradient,
  ThirdGradient,
  GlobalStyle,
  Footer,
  Sign,
} from './styles'

const Layout = ({ children }) => (
  <>
    <FisrtGradient />
    <SecondGradient />
    <ThirdGradient />
    {children}
    <Footer>
      <Sign>Create with &hearts; by Valerie</Sign>
    </Footer>
    <GlobalStyle />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

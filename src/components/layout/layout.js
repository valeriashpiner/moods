import React from 'react'
import PropTypes from 'prop-types'
import { FisrtGradient, SecondGradient, ThirdGradient, GlobalStyle, Footer, Sign } from './styles'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../header'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <FisrtGradient />
        <SecondGradient />
        <ThirdGradient />
          {children}
        <Footer>
          <Sign>Create with &hearts; by Valerie</Sign>
        </Footer>
        <GlobalStyle />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

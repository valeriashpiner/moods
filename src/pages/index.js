import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../components/header/header'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import { LandingPage } from '../content/static'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`

const Title = styled.span`
  font-size: 35px;
  color: #ffffff;
  @media (min-width: 768px) {
    font-size: 70px;
  }
`

const MainPagePointList = styled.ul`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const MainPagePoint = styled.li`
  font-size: 20px;
  color: #ffffff;
  list-style: none;
  padding: 0;
  @media (min-width: 768px) {
    font-size: 25px;
    padding: 0 0.5em;
  }
`

const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    align-items: center;
  }
`

export class IndexPage extends Component {
  render() {
    const LandingPageSubtitle = LandingPage.map((item, id) => (
      <MainPagePoint key={id}>{item}</MainPagePoint>
    ))
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Header siteTitle={`Mood's`} />
        <Container>
          <BaseContainer>
            <Title>Keep a clear head</Title>
            <MainPagePointList>{LandingPageSubtitle}</MainPagePointList>
          </BaseContainer>
        </Container>
      </Layout>
    )
  }
}

export default IndexPage

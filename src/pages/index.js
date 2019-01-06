import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const Title = styled.span `
  font-size: 70px;
  color: #FFFFFF;
`

const MainPagePointList = styled.ul`
  display: flex;
`;

const MainPagePoint = styled.li`
  font-size: 25px;
  color: #FFFFFF;
  list-style: none;
  padding: 0 0.5em;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <Title>
        Keep a clear head
      </Title>
      <MainPagePointList>
        <MainPagePoint>
        Create your profile
        </MainPagePoint>
        <MainPagePoint>
        Collect your feelings
        </MainPagePoint>
        <MainPagePoint>
        Connect to your therapist
        </MainPagePoint>
      </MainPagePointList>
    </Container>  
  </Layout>
)

export default IndexPage

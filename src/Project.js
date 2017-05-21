import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Project = styled.article`
  display: flex;
  flex-direction: row;
  padding: 2em;
`

const Info = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`

const Right = styled.div`
  flex: 1;
  text-align: center;
`

const Button = styled.button`
  background: none;
  border-width: 1px;
  border-image: linear-gradient(to bottom, orange, purple) 1 100%;
  border-image-slice: 1;
  padding: 0.7em 2.5em;
  cursor: pointer;
`

const Name = styled.h1`
  font-weight: bold;
  font-size: 2.5em;
`

const Description = styled.p`
  margin-top: -1em;
`

const Meta = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`

const MetaWrapper = styled.div`
  flex: ${p => p.bigger ? 2 : 1 };
  display: flex;
  flex-direction: row;
  align-items: baseline;
`

const Title = styled.h2``

const Year = styled.p`
  font-weight: bold;
  font-size: 1.5em;
  margin-left: 0.5em;
`

const Company = styled.p`
  font-weight: bold;
  font-size: 1.5em;
  margin-left: 0.5em;
`

const Bold = styled.b`
  font-weight: bold;
`

const Li = styled.li`
  list-style: square;
`

const ResponsibilitiesWrapper = styled.div`
  margin-top: -1em;
`

const When = props =>
  <MetaWrapper>
    <Title><Bold>When</Bold></Title>
    <Year>{props.children}</Year>
  </MetaWrapper>

const Employer = props =>
  <MetaWrapper bigger>
    <Title>For <Bold>Who</Bold></Title>
    <Company>{props.children}</Company>
  </MetaWrapper>

const Responsibilities = props =>
  <ResponsibilitiesWrapper>
    <Title>What <Bold>I Did</Bold></Title>
    <ul>
      {props.items.map(item =>
        <Li key={item}>{item}</Li>
      )}
    </ul>
  </ResponsibilitiesWrapper>

const Challenges = props =>
  <div>
    <Title>My <Bold>Challenges</Bold></Title>
    <p>{props.children}</p>
  </div>

const Results = props =>
  <div>
    <Title><Bold>Results</Bold></Title>
    <p>{props.children}</p>
  </div>

export default project =>
  <Project key={project.name}>
    <Info>
      <Name>{project.name}</Name>
      <Description>{project.description}</Description>
      <Meta>
        <When>{project.year}</When>
        <Employer>{project.employer}</Employer>
      </Meta>
      <Responsibilities items={project.responsibilities} />
      <Challenges>{project.challenges}</Challenges>
      <Results>{project.results}</Results>
    </Info>
    <Right>
      <img src="http://"/>
      <Link to={`case/${project.id}`}>
        <Button>View case</Button>
      </Link>
    </Right>
  </Project>

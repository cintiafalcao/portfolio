import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const thumb = require.context('./thumbs', true);

const Project = styled.article`
  display: flex;
  flex-direction: row;
  padding: 2em;
`

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-right: 1em;
`

const Right = styled.div`
  flex: 1;
  text-align: center;
`

const Image = styled.img`
  align-self: center;
  max-width: 100%;
`

const Button = styled.button`
  color: #251c45;
  font-size: 0.9em;
  background: none;
  position: relative;
  border-width: 1px;
  border-image: linear-gradient(to bottom, #f29221, #4c388f) 1 100%;
  border-image-slice: 1;
  padding: 0.5em 1.8em;
  cursor: pointer;
  margin-top:10px;
  -webkit-transition: color 200ms;
  overflow: hidden;

  &:hover {
    color: white;

  }

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 100%;
    background: linear-gradient(to bottom, #f29221, #4c388f);
    transition: top 200ms;
    z-index: -1;
  }

  &:hover::before { 
    top: 0;
  }
`

const Name = styled.h1`
  font-weight: bold;
  font-size: 2.5em;
  color: #251c45;
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

const Title = styled.h2`
  color: #251c45;
`

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
  color: #251c45;

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
      {project.description ? <Description>{project.description}</Description> : null}
      <Meta>
        {project.year ? <When>{project.year}</When> : null}
        {project.employer ? <Employer>{project.employer}</Employer> : null}
      </Meta>
      {project.responsibilities ? <Responsibilities items={project.responsibilities} /> : null}
      {project.challenges ? <Challenges>{project.challenges}</Challenges> : null}
      {project.results ? <Results>{project.results}</Results> : null}
    </Info>
    <Right>
      <Image src={thumb(project.image)}/>
      <Link to={`/case/${project.id}`}>
        <Button>View case</Button>
      </Link>
    </Right>
  </Project>

import React from 'react'
import styled from 'styled-components'

const ShadowDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  /* box-shadow: 8px 8px 16px #22252c, -8px -8px 16px #2e333c; */
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  margin-bottom: 30px;
`

const StyledImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-top: -2px;
`

const CardTitle = styled.div`
  & h2 {
    margin-top: 10px;
    margin-bottom: 0;
  }
  padding: 10px 20px;
`

const Text = styled.p`
  font-size: 16px;
  text-align: left;
  padding: 0 20px;
`

const Tags = styled.div`
  padding: 10px 20px;

  & span {
    border-radius: 3px;
    padding: 3px;
    color: red;
    margin: 5px;
    font-size: 12px;
    border: 1px solid red;
  }
`

const StyledLink = styled.a`
  color: rgb(89, 167, 253);
  padding: 10px 15px;
  text-decoration: none;
  text-transform: uppercase;
  margin-bottom: 30px;
  font-size: 16px;
  text-align: center;

  &:hover {
    color: rgb(89, 167, 253);
    text-decoration: underline;
  }

  &:active {
    color: rgb(89, 167, 253);
  }

  &:visited {
    color: rgb(89, 167, 253);
  }
`

const Card = ({ title, text, link, imgUrl, tags }) => {
  return (
    <article>
      <ShadowDiv>
        <StyledImg src={imgUrl} />
        <CardTitle>
          <h2>{title}</h2>
        </CardTitle>
        <Text>{text}</Text>

        <Tags>
          {tags.map((tag) => {
            return <span key={tag}>{tag}</span>
          })}
        </Tags>
        <StyledLink href={link.url}> {link.text}</StyledLink>
      </ShadowDiv>
    </article>
  )
}

export default Card

import React from 'react'
import styled from 'styled-components'

const ShadowDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 2px 2px 10px rgba(10, 10, 100, 0.1);
  overflow: hidden;
  margin-bottom: 30px;
`

const StyledImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-top: -2px;

  &:hover {
    opacity: 0.9;
  }
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
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 20px;

  & span {
    border-radius: 5px;
    padding: 3px 8px;
    color: gray;
    margin: 5px;
    font-size: 12px;
    border: 1px solid gray;
  }
`

const StyledLink = styled.a`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'rgb(89, 167, 253)'};
  color: white;
  padding: 20px;
  &:active,
  &:visited,
  &:hover {
    color: white;
  }
`

const Card = ({ skip, title, text, link, imgUrl, tags }) => {
  if (skip) {
    return null
  }
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
        <StyledLink
          target="_blank"
          href={link.url}
          backgroundColor={link.backgroundColor}
        >
          {link.text}
        </StyledLink>
      </ShadowDiv>
    </article>
  )
}

export default Card

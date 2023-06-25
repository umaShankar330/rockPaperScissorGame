import styled from 'styled-components'

export const PlayingGameContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  list-style-type: none;
  @media screen and (min-width: 768px) {
    height: 400px;
    width: 400px;
  }
`
export const ItemBtn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
`

export const ItemImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50px;
`

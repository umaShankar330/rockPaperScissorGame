import styled from 'styled-components'

export const BoardContainer = styled.div`
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  width: 60%;
  border: 2px solid #ffffff;
  border-radius: 10px;
  font-family: 'Bree Serif';
`
export const TextContainer = styled.div`
  display: flex;
  width: 80px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`
export const ItemsText = styled.p`
  color: #ffffff;
  font-size: 17px;
  margin: 0px;
  margin-bottom: 5px;
`
export const ScoreContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  color: #223a5f;
  border-radius: 10px;
`
export const ScoreTitle = styled.p`
  font-size: 18px;
  margin: 0px;
`

export const ScoreText = styled.p`
  font-size: 23px;
  margin: 0px;
  font-family: 'Roboto';
`
export const TextHeading = styled.h1`
  font-size: 18px;
  margin: 10px;
  line-height: 1.5;
  font-weight: 500;
  color: white;
`

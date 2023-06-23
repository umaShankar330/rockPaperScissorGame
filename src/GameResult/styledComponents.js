import styled from 'styled-components'

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 400px;
  width: 400px;
  font-family: 'Roboto';
`
export const SelectedItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const PlayAgainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PlayerText = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
`

export const PLayerImg = styled.img`
  border: none;
  width: 150px;
  height: 150px;
  border-radius: 50px;
`
export const ResultText = styled.p`
  font-size: 25px;
  color: white;
  font-weight: bold;
`

export const PlayAgainBtn = styled.button`
  height: 35px;
  width: 140px;
  border: none;
  border-radius: 10px;
  background-color: #ffffff;
  color: #223a5f;
  font-weight: 600;
  font-family: 'Bree Serif';
`

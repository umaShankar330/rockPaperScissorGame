import styled from 'styled-components'

export const GameMainContainer = styled.div`
  display: flex;
  margin: 0px;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  min-width: 100vw;
  background-color: #223a5f;
  align-items: center;
  padding: 40px;
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`

export const RulesContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

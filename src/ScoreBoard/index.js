import {
  BoardContainer,
  TextContainer,
  //   ItemsText,
  ScoreContainer,
  ScoreTitle,
  ScoreText,
  TextHeading,
} from './styleComponent'

const ScoreBoard = props => {
  const {score} = props

  return (
    <BoardContainer>
      <TextContainer>
        <TextHeading>Rock Paper Scissors</TextHeading>
      </TextContainer>
      <ScoreContainer>
        <ScoreTitle>Score</ScoreTitle>
        <ScoreText>{score}</ScoreText>
      </ScoreContainer>
    </BoardContainer>
  )
}

export default ScoreBoard

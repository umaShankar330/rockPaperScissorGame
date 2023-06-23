import {
  ResultContainer,
  SelectedItemsContainer,
  PlayAgainContainer,
  PlayerContainer,
  PlayerText,
  PLayerImg,
  PlayAgainBtn,
  ResultText,
} from './styledComponents'

const GameResult = props => {
  const {Result, Player, Opponent, choicesList, playAgain} = props

  const playerItem = choicesList.filter(each => each.id === Player)
  const playerItemImg = playerItem[0].imageUrl
  console.log(Player, 'Player')
  console.log(Opponent, 'Opponent')
  const OpponentItem = choicesList.filter(each => each.id === Opponent)
  const triggerPlay = () => {
    playAgain()
  }

  return (
    <ResultContainer>
      <SelectedItemsContainer>
        <PlayerContainer>
          <PlayerText>YOU</PlayerText>
          <PLayerImg src={playerItemImg} alt="your choice" />
        </PlayerContainer>
        <PlayerContainer>
          <PlayerText>OPPONENT</PlayerText>
          <PLayerImg src={OpponentItem[0].imageUrl} alt="opponent choice" />
        </PlayerContainer>
      </SelectedItemsContainer>
      <PlayAgainContainer>
        <ResultText>{Result}</ResultText>
        <PlayAgainBtn onClick={triggerPlay}>Play Again</PlayAgainBtn>
      </PlayAgainContainer>
    </ResultContainer>
  )
}

export default GameResult

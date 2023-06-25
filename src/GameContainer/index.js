import {Component} from 'react'
import {GameMainContainer} from './styledComponents'
import ScoreBoard from '../ScoreBoard'
import PlayingGame from '../PlayingGame'
import GameResult from '../GameResult'
import Rules from '../Rules'

class GameContainer extends Component {
  state = {score: 0, isPlaying: true, Result: '', Player: '', Opponent: ''}

  playerSelection = id => {
    const playerItem = id
    const {choicesList} = this.props
    let OpponentItem = ''
    const randomNum = Math.floor(Math.random() * choicesList.length)

    if (randomNum === 0) {
      OpponentItem = 'ROCK'
    } else if (randomNum === 1) {
      OpponentItem = 'PAPER'
    } else {
      OpponentItem = 'SCISSORS'
    }

    let result = null

    if (playerItem === OpponentItem) {
      result = 'IT IS DRAW'
    }
    if (playerItem === 'ROCK' && OpponentItem === 'PAPER') {
      result = 'YOU LOSE'
    }
    if (playerItem === 'ROCK' && OpponentItem === 'SCISSORS') {
      result = 'YOU WON'
    }
    if (playerItem === 'PAPER' && OpponentItem === 'ROCK') {
      result = 'YOU WON'
    }
    if (playerItem === 'PAPER' && OpponentItem === 'SCISSORS') {
      result = 'YOU LOSE'
    }
    if (playerItem === 'SCISSORS' && OpponentItem === 'PAPER') {
      result = 'YOU WON'
    }
    if (playerItem === 'SCISSORS' && OpponentItem === 'ROCK') {
      result = 'YOU LOSE'
    }
    let PlayerScore = 0
    if (result === 'YOU WON') {
      PlayerScore = 1
    } else if (result === 'YOU LOSE') {
      PlayerScore = -1
    }
    console.log(result)
    this.setState(prevState => ({
      score: parseInt(prevState.score) + PlayerScore,
    }))
    this.setState({
      Result: result,
      Player: playerItem,
      Opponent: OpponentItem,
      isPlaying: false,
    })
  }

  playAgain = () => {
    this.setState({isPlaying: true, Result: '', Player: '', Opponent: ''})
  }

  render() {
    const {score, isPlaying, Result, Player, Opponent} = this.state
    const {choicesList} = this.props
    console.log(isPlaying)
    return (
      <GameMainContainer>
        <ScoreBoard score={score} />
        {isPlaying ? (
          <PlayingGame
            playerSelection={this.playerSelection}
            choicesList={choicesList}
          />
        ) : (
          <GameResult
            Result={Result}
            Player={Player}
            Opponent={Opponent}
            choicesList={choicesList}
            playAgain={this.playAgain}
          />
        )}
        <Rules />
      </GameMainContainer>
    )
  }
}

export default GameContainer

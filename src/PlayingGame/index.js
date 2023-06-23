import {PlayingGameContainer, ItemBtn, ItemImage} from './styledComponents'

const PlayingGame = props => {
  const {choicesList, playerSelection} = props

  const selectedItem = id => {
    console.log(id)
    playerSelection(id)
  }
  return (
    <PlayingGameContainer>
      {choicesList.map(each => {
        const {id, imageUrl} = each
        const dataId = `${id.toLowerCase()}Button`
        console.log(dataId)
        return (
          <li key={id}>
            <ItemBtn data-testid={dataId} onClick={() => selectedItem(id)}>
              <ItemImage src={imageUrl} alt={id} />
            </ItemBtn>
          </li>
        )
      })}
    </PlayingGameContainer>
  )
}

export default PlayingGame

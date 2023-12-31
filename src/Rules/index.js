import Popup from 'reactjs-popup'
// import {RulesContainer} from './styledComponents'
import 'reactjs-popup/dist/index.css'

import {IoIosClose} from 'react-icons/io'

import './index.css'

const Rules = () => (
  <div className="popup-container">
    <Popup
      className="popUp-component"
      modal
      trigger={
        <button type="button" className="trigger-button">
          Rules
        </button>
      }
    >
      {close => (
        <>
          <div className="rules-image-section">
            <div className="close-btn-container">
              <button
                type="button"
                className="close-button"
                onClick={() => close()}
              >
                <IoIosClose />
              </button>
            </div>

            <img
              className="rules-img"
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png "
              alt="rules"
            />
          </div>
        </>
      )}
    </Popup>
  </div>
)
export default Rules

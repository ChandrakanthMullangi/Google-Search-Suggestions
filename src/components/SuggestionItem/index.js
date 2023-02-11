// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails

  const updateSuggesion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggestion-container">
      <p className="suggestion-text"> {suggestion} </p>
      <button type="button" className="arrow-btn" onClick={updateSuggesion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-icon"
          alt="arrow icon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem

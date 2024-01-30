import {Component} from 'react'
import './index.css'

class EditableText extends Component {
  state = {
    isEditable: true,
    text: '',
  }

  onInput = event => {
    this.setState({text: event.target.value})
  }

  onEditableBtn = () => {
    this.setState(prevState => ({
      isEditable: !prevState.isEditable,
    }))
  }

  render() {
    const {isEditable, text} = this.state

    return (
      <div className="bg-container">
        <div className="editable-text-content">
          <h1>Editable Text Input</h1>

          {isEditable ? (
            <div className="input-container">
              <input
                type="text"
                value={text}
                onChange={this.onInput}
                className="input"
              />
              <button
                type="button"
                onClick={this.onEditableBtn}
                className="button"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="input-container">
              <p>{text}</p>
              <button
                type="button"
                onClick={this.onEditableBtn}
                className="button"
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EditableText

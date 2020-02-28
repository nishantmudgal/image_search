import React from 'react';
import ReactDOM from 'react-dom';

class Searchbar extends React.Component {
  state = {term : ""}
  constructor(props) {
    super(props)
  }
  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.term);
  }
  render() {
    return <div className = "ui segment">
      <form className = "ui form" onSubmit = {this.onFormSubmit}>
      <div className = "field">
        <label> Image Search </label>
        <input
          type = 'text'
          onChange = {e => this.setState({term: e.target.value})}
          value = {this.state.term}/>
      </div>
      </form>
    </div>
  }
}
export default Searchbar

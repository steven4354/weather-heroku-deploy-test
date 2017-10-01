import React, {Component} from 'react'

class SearchBar extends Component {
  constructor(){
    super(props)

    this.state = {
      term: ''
    }

    this.onInputChange.bind(this)
  }

  onInputChange(event){
    console.log(event.target.value);
    this.setState({
      term: event.target.value
    })
  }

  render(){
    return(
      <form className="input-group">
        <input
          placeholder='Get a five-day forecast in your favorite cities'
          className='form-control'
          onChange={this.onInputChange}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

export default SearchBar

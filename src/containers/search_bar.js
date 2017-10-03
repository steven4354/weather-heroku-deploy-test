import React, {Component} from 'react'
import { fetchWeather } from '../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class SearchBar extends Component {
  constructor(props){
    super(props)

    this.state = {
      term: ''
    }

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event){
    console.log(event.target.value);
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit(event){
    event.preventDefault();

    this.props.fetchWeather(this.state.term)
    //by finding the action creator fetchWeather to the application state it gives this.props the property fetchWeather because
    //props is the application state for any component
    //importing fetchWeather is important for the mapDispatchToProps not for the class Searchbar
    this.setState({term: ''})
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder='Get a five-day forecast in your favorite cities'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch)
  //makes sure the action that is created from calling the action creator flows down the middleware and reducers by stating the action creator
}

export default connect(null, mapDispatchToProps)(SearchBar)

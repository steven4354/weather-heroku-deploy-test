import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Sparklines, SparklinesLine } from 'react-sparklines'

class WeatherList extends Component {

  renderWeather(citydata){

    const name = citydata.city.name
    const temps = citydata.list.map(function(obj){return obj.main.temp})

    console.log('renderWeather ran');
    console.log(temps);
    return(
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Sparklines height={120} width={180} data={temps}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
      </tr>
    )
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

//we don't need to state the argument because that is how map works
//var roots = numbers.map(Math.sqrt);

function mapStateToProps(state){
  return {weather: state.weather}
}

//can also be written as function mapStateToProps({weather}){return {weather}} to pull just the weather and <-- is just weather: weather

export default connect(mapStateToProps)(WeatherList)

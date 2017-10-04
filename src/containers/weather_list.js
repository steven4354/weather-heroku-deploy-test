import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import Chart from '../components/chart'

class WeatherList extends Component {

  renderWeather(citydata){

    const name = citydata.city.name
    const temps = citydata.list.map(function(obj){return obj.main.temp})
    const pressures = citydata.list.map(function(obj){return obj.main.pressure})
    const humidities = citydata.list.map(function(obj){return obj.main.humidity})

    console.log('renderWeather ran');
    console.log(temps);
    return(
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color="red" />
        </td>
        <td>
          <Chart data={temps} color="orange" />
        </td>
        <td>
          <Chart data={temps} color="yellow" />          
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

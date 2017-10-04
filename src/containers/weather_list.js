import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component {

  renderWeather(citydata){

    const name = citydata.city.name
    const temps = citydata.list.map(function(obj){return obj.main.temp})
    const pressures = citydata.list.map(function(obj){return obj.main.pressure})
    const humidities = citydata.list.map(function(obj){return obj.main.humidity})
    const {lon, lat} = citydata.city.coord
    //const lon = citydata.city.coord.lon
    //const lat = citydata.city.coord.lat

    console.log('renderWeather ran');
    console.log(temps);
    console.log("lat", lat);
    return(
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <Chart data={temps} color="red" units="K"/>
        </td>
        <td>
          <Chart data={pressures} color="orange" units="hPa"/>
        </td>
        <td>
          <Chart data={humidities} color="yellow" units="%"/>
        </td>
      </tr>
    )
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th >City</th>
            <th >Temperature (K)</th>
            <th >Pressure (hPa)</th>
            <th >Humidity (%)</th>
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

/**
 * Created by suzanne on 8/20/19.
 */
import React from 'react'
import PropTypes from 'prop-types'; // ES6

import runImg from '../img/run.png'
import bikeImg from '../img/bike.png'
import swimImg from '../img/swim.png'

class DailyWorkout extends React.Component {
  handleClick = () => {
    console.log('Show workout details');
  }

  render() {
    let iconObj =
      {"run": runImg, "bike": bikeImg, "swim": swimImg}
    return (
      <div  onClick={this.handleClick}>
        <img
        alt={this.props.mode}
        src={iconObj[this.props.mode]}
        width={this.props.size}/>
      <span>
            {this.props.mode}
      </span>
        {" "}
        <span>
            {this.props.distance}{" "}
      </span>
        <span>
            {this.props.units}
      </span>
      </div>
    )
  }
}
DailyWorkout.propTypes = {
  mode: PropTypes.string,
  distance: PropTypes.number,
  units: PropTypes.string,
  size: PropTypes.string,
  dailyData: PropTypes.array
}

export default DailyWorkout


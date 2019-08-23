/**
 * Created by suzanne on 8/20/19.
 */
import React from 'react'
import PropTypes from 'prop-types'; // ES6
import '../css/DailyWorkouts.css'
import moment from 'moment';

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
      <div
        className="component-daily-workouts"
        onClick={this.handleClick}>
        <div className="workout-card">
          <div className='workoutIcon'>
            <img
              alt={this.props.mode}
              src={iconObj[this.props.mode]}
              width={this.props.size}/>
          </div>
          <div className='shortInfo'>
            <span>
              { moment(this.props.date).format('ddd MMM Do')}
            </span>
            <br></br>

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
      </div>
      </div>
    )
  }
}
DailyWorkout.propTypes = {
  dailyData: PropTypes.array
}

export default DailyWorkout


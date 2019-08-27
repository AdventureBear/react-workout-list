/**
 * Created by suzanne on 8/20/19.
 */
import React from 'react'
import PropTypes from 'prop-types'; // ES6
import '../css/DailyWorkouts.css'
import moment from 'moment';

// import runImg from '../img/run.png'
// import bikeImg from '../img/bike.png'
// import swimImg from '../img/swim.png'

import {RunSVG, BikeSVG, SwimSVG} from "./SVGRunIcon";


class DailyWorkout extends React.Component {


  handleClick = () => {
    console.log('Show workout details');
  }
  render() {
    // let iconObj =
    //   {"run": runImg, "bike": bikeImg, "swim": swimImg}
    return (
      <div
        className="component-daily-workouts"
        onClick={this.handleClick}>
        <div className="workout-card">
            <Icon
              mode={this.props.mode}
            />
          {console.log(this.props.mode)}
            {/*<img*/}
            {/*  alt={this.props.mode}*/}
            {/*  src={iconObj[this.props.mode]}*/}
            {/*  width={this.props.size}/>*/}
         <Data
           mode={this.props.mode}
           size={this.props.size}
           distance={this.props.distance}
           units={this.props.units}
           date={this.props.date}
         />
        </div>
      </div>
    )
  }
}


class Icon extends React.Component {
  renderSwim (){
    return (
      <div className='workoutIcon'>
    < BikeSVG
      alt={this.props.mode}
      width={24}
      fill="#49c" />
      </div>
    )
  }
  renderBike (){
    return (
      <div className='workoutIcon'>
        <SwimSVG

          alt={this.props.mode}
          width={24}
          fill="blue" />
      </div>
    )
  }

  renderRun (){
    return(
      <div className='workoutIcon'>
        <RunSVG

          alt={this.props.mode}
          width={24}
          fill="#49c" />
      </div>
    )
  }

    render () {
      if (this.props.mode==="run") {
        return this.renderRun()
      } else if (this.props.mode==="swim") {
        return this.renderSwim()
      } else {
        return this.renderBike()
      }
    }

}
class Data extends React.Component {
  render () {
    return (
      <div className='shortInfo'>
            <span>
              { moment(this.props.date).format('ddd MMM Do')}
              {console.log(this.props.date)}
            </span>
        {" "}
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
  size:PropTypes.string,
  distance:PropTypes.number,
  units:PropTypes.string,
  date:PropTypes.string,
}

export default DailyWorkout


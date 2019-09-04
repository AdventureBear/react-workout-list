/**
 * Created by suzanne on 8/20/19.
 */
import React from 'react'
import PropTypes from 'prop-types'; // ES6
import '../css/DailyWorkouts.css'
import Icon from './Icon'

// import {RunSVG, BikeSVG, SwimSVG} from "./SVGRunIcon";


class DailyWorkouts extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      show: true
    }
  }

  handleClick = () => {
    console.log('Show workout details');
  }

  showWorkout = () => {
    this.setState({
      show: !this.state.show
    })
    console.log("toggled show")
  }

  renderShow () {
    return(
    // this.props.sessions.map ((workout,j)=> {
    //   return(
        <div className="component-daily-workouts workout-main">
            <div className="workout-mode-header">

              <div className="mode-toggle">
                <div className="workout-icon">
                  <Icon
                    mode={this.props.workout.mode}
                  />
                </div>
                <div className="workout-mode">
                  {this.props.workout.mode }
                </div>
                <div className="workout-distance push">
                  <b>{this.props.workout.distance}</b>{" "}{this.props.workout.units}
                </div>
                <div className="toggle-workout push pointer"
                     onClick = {this.showWorkout}
                       >
                  <i className="material-icons">keyboard_arrow_up</i>
                </div>
              </div>
            </div>

            <div className="workout-short">
              <strong>{this.props.workout.code}: </strong>{this.props.codeDesc}
                {this.props.workout.descriptionShort}
            </div>
            <div className="workout-long">
              {this.props.workout.descriptionLong}
            </div>
        </div>
     )
  }

  renderHide() {
    return(
      <div className="component-daily-workouts workout-main">
        <div className="workout-mode-header">
          <div className="mode-toggle">
            <div className="workout-icon">
              <Icon
                mode={this.props.workout.mode}
              />
            </div>
            <div className="workout-mode">
              {this.props.workout.mode }
            </div>
            <div className="workout-distance push">
              <b>{this.props.workout.distance}</b>{" "}{this.props.workout.units}
            </div>
            <div className="toggle-workout push pointer"
                 onClick = {this.showWorkout}
            >
              <i className="material-icons">keyboard_arrow_up</i>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    if (this.state.show){
      return this.renderShow()
    } else {
      return this.renderHide()
    }
  }

}


DailyWorkouts.propTypes = {
  sessions: PropTypes.array

}

export default DailyWorkouts



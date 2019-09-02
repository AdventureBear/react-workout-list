/**
 * Created by suzanne on 8/20/19.
 */
import React from 'react'
import PropTypes from 'prop-types'; // ES6
import '../css/DailyWorkouts.css'

import {RunSVG, BikeSVG, SwimSVG} from "./SVGRunIcon";


class DailyWorkouts extends React.Component {

  handleClick = () => {
    console.log('Show workout details');
  }

  render () {
    return(
    this.props.sessions.map ((workout,j)=> {

      return(
        <div key={j} className="component-daily-workouts workout-main">
            <div className="workout-mode-header">
              <div className="mode-toggle">
                <div className="workout-mode">
                  {workout.mode }
                </div>
                <div className="toggle-workout push">
                  <i className="material-icons">keyboard_arrow_up</i>
                </div>
              </div>
                <div className="workout-mode-details">
                    <div className="workout-icon">
                      <Icon
                            mode={workout.mode}
                      />
                    </div>

                    <div className="workout-distance push">
                      <b>{workout.distance}</b>{" "}{workout.units}
                    </div>
               </div>
            </div>

            <div className="workout-short">
              <strong>{workout.code}: </strong>{this.props.codeDesc}
                {workout.descriptionShort}
            </div>
            <div className="workout-long">
              {workout.descriptionLong}
            </div>
        </div>
      )
    })
    )
  }
}

class Icon extends React.Component {
  renderBike (){
    return (
      <div className='workoutIcon inline-block-child'>
    < BikeSVG
      alt={this.props.mode}
      width={30}
      fill="lightseagreen" />
      </div>
    )
  }
  renderSwim (){
    return (
      <div className='workoutIcon inline-block-child'>
        <SwimSVG

          alt={this.props.mode}
          width={30}
          fill="dodgerblue" />
      </div>
    )
  }

  renderRun (){
    return(
      <div className='workoutIcon inline-block-child'>
        <RunSVG className={"run-icon"}
          alt={this.props.mode}
          width={30}
          fill="coral" />
      </div>
    )
  }

    render () {
      if (this.props.mode==="Running") {
        return this.renderRun()
      } else if (this.props.mode==="Lap Swimming") {
        return this.renderSwim()
      } else if (this.props.mode==="Cycling"){
        return this.renderBike()
      }
    }

}


DailyWorkouts.propTypes = {
  sessions: PropTypes.object
}

export default DailyWorkouts


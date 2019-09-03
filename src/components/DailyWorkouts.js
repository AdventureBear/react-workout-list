/**
 * Created by suzanne on 8/20/19.
 */
import React from 'react'
import PropTypes from 'prop-types'; // ES6
import '../css/DailyWorkouts.css'

import {RunSVG, BikeSVG, SwimSVG} from "./SVGRunIcon";


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
                {/*<div className="workout-mode-details">*/}
                    {/*<div className="workout-icon">*/}
                    {/*  <Icon*/}
                    {/*        mode={this.props.workout.mode}*/}
                    {/*  />*/}
                    {/*</div>*/}

                    {/*<div className="workout-distance push">*/}
                    {/*  <b>{this.props.workout.distance}</b>{" "}{this.props.workout.units}*/}
                    {/*</div>*/}
               {/*</div>*/}
            </div>

            <div className="workout-short">
              <strong>{this.props.workout.code}: </strong>{this.props.codeDesc}
                {this.props.workout.descriptionShort}
            </div>
            <div className="workout-long">
              {this.props.workout.descriptionLong}
            </div>
        </div>

    //   )
    // }
    // )

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
          {/*<div className="workout-mode-details">*/}
          {/*<div className="workout-icon">*/}
          {/*  <Icon*/}
          {/*        mode={this.props.workout.mode}*/}
          {/*  />*/}
          {/*</div>*/}

          {/*<div className="workout-distance push">*/}
          {/*  <b>{this.props.workout.distance}</b>{" "}{this.props.workout.units}*/}
          {/*</div>*/}
          {/*</div>*/}

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
  sessions: PropTypes.array

}

export default DailyWorkouts



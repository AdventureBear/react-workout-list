/**
 * Created by suzanne on 8/20/19.
 */

import React from 'react'
import PropTypes from 'prop-types'; // ES6
import DailyWorkouts from './DailyWorkouts'

import '../css/WorkoutListView.css'
import moment from 'moment'

import { WorkoutContext } from '../context/WorkoutContext.js'

class WorkoutListView extends React.Component {
  constructor(props) {
    super(props)
      this.state={
        showDay: true
      }
  }

  handleDateToggle=() => {
    this.setState({
      showDay: !this.state.showDay
    })
    console.log("toggle date")
  }

  handleAddClick =() => {
    this.props.addWorkout(this.props.index)
}

  renderShow() {
    const workouts =  this.props.sessions.map ((workout,j)=> {
        return(
          <DailyWorkouts
            key={j}
            dayIndex={this.props.index}
            sessionIndex={j}
            {...workout}
            saveWorkoutHeaderChanges={this.props.saveWorkoutHeaderChanges}
          />
        )
      })

    return (

      <div className="component-workout-list">
        {console.log(this.context)}
        <div className="daily-card">
          <div className="daily-header">
            <div className="date">{ moment(this.props.date, 'MM DD YYYY').format('ddd MMM Do')}</div>
            <div className="add-workout push pointer"
                 onClick={this.handleAddClick}
            >
              <i className="material-icons">add_box</i>
            </div>
            <div className="toggle-date pointer"
                 onClick = {this.handleDateToggle}
            >
              <i className="material-icons">keyboard_arrow_up</i>
            </div>
          </div>
          {workouts}
        </div>
      </div>
    )
  }

  renderHide () {
    return (
      <div className="component-workout-list">
        <div className="daily-card">
          <div className="daily-header">
            <div className="date">{ moment(this.props.date, 'MM DD YYYY').format('ddd MMM Do')}</div>
            <div className="add-workout push pointer"
                 onClick={this.handleAddClick}
            >
              <i className="material-icons">add_box</i>
            </div>
            <div className="toggle-date pointer"
                 onClick = {this.handleDateToggle}
            >
              <i className="material-icons">keyboard_arrow_down</i>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    if (this.state.showDay){
      return this.renderShow()
    } else {
      return this.renderHide()
    }
  }
}


WorkoutListView.propTypes = {
  dailyData: PropTypes.object,
  addWorkout: PropTypes.func,
  editWorkout: PropTypes.func,
  index: PropTypes.number,
  saveWorkoutHeaderChanges: PropTypes.func
}

WorkoutListView.contextType = WorkoutContext
export default WorkoutListView
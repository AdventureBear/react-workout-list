/**
 * Created by suzanne on 8/20/19.
 */

import React from 'react'
import PropTypes from 'prop-types'; // ES6
import DailyWorkouts from './DailyWorkouts'

import '../css/WorkoutListView.css'
import moment from 'moment'
import dailyWorkouts from '../dailyWorkouts'

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
  renderShow() {
    return (
      <div className="component-workout-list">
        <div className="daily-card">
          <div className="daily-header">
            <div className="date">{ moment(this.props.dailyData.date).format('ddd MMM Do')}</div>
            <div className="toggle-date push pointer"
                 onClick = {this.handleDateToggle}
            >
              <i className="material-icons">keyboard_arrow_u</i>
            </div>
          </div>

          { this.props.dailyData.sessions.map ((workout,j)=> {
            return(
              <DailyWorkouts
                key={j}
                workout={workout}
              />
            )
          })}
        </div>
      </div>
    )
  }

  renderHide () {
    return (
      <div className="component-workout-list">
        <div className="daily-card">
          <div className="daily-header">
            <div className="date">{ moment(this.props.dailyData.date).format('ddd MMM Do')}</div>
            <div className="toggle-date push pointer"
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
}

export default WorkoutListView
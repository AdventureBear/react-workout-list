/**
 * Created by suzanne on 8/20/19.
 */

import React from 'react'
import PropTypes from 'prop-types'; // ES6
import DailyWorkouts from './DailyWorkouts'

import '../css/WorkoutListView.css'
import moment from 'moment'

class WorkoutListView extends React.Component {
  render() {
    return (
      <div className="component-workout-list">
          {
            this.props.dailyData.map((dailyData,i) => {
              return (
                <div className="daily-card" key={i}>
                  <div className="daily-header">
                    <div className="date">{ moment(dailyData.date).format('ddd MMM Do')}</div>
                    <div className="toggle-date push">
                      <i className="material-icons">keyboard_arrow_down</i>
                    </div>
                  </div>

                    <DailyWorkouts
                      key={i}
                      sessions={dailyData.sessions}
                    />

                </div>
              )
            })
          }


      </div>
    )
  }
}
WorkoutListView.propTypes = {
  dailyData: PropTypes.array,
}

export default WorkoutListView
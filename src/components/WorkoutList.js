/**
 * Created by suzanne on 8/20/19.
 */

import React from 'react'
import PropTypes from 'prop-types'; // ES6
import DailyWorkout from './DailyWorkout'

import '../css/WorkoutList.css'

class WorkoutList extends React.Component {
  render() {
    return (
      <div className="component-workout-list">{
        this.props.dailyData.map((dailyData,i) => {
          return (
            <DailyWorkout
              key={i}
              mode={dailyData.mode}
              size={dailyData.size}
              distance={dailyData.distance}
              units={dailyData.units}
              date={dailyData.date}
            />
          )
        })
      }
      </div>
    )
  }
}
WorkoutList.propTypes = {
  dailyData: PropTypes.array,
}

export default WorkoutList
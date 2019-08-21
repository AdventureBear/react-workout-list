/**
 * Created by suzanne on 8/20/19.
 */

import React from 'react'
import PropTypes from 'prop-types'; // ES6
import DailyWorkout from './DailyWorkout'

// import run from './../img/run.png' // relative path to image
// import bike from './../img/bike.png' // relative path to image
// import swim from './../img/swim.png' // relative path to image

class WorkoutList extends React.Component {
  render() {
    return (
      <div>{
        this.props.dailyData.map((dailyData,i) => {
          return (
            <DailyWorkout
              key={i}
              mode={dailyData.mode}
              size={dailyData.size}
              distance={dailyData.distance}
              units={dailyData.units}
              icon={dailyData.icon}
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
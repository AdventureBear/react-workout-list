/**
 * Created by suzanne on 8/20/19.
 */

import React from 'react'
import DailyWorkout from './DailyWorkout'

import run from './../img/run.png' // relative path to image
import bike from './../img/bike.png' // relative path to image
import swim from './../img/swim.png' // relative path to image

class WorkoutList extends React.Component {
  render() {
    return (
      <div>
        <DailyWorkout
          mode="Run"
          size="24px"
          distance="3"
          units="miles"
          icon={run}
        />
        <DailyWorkout
          mode="Bike"
          size="24px"
          distance="24"
          units="miles"
          icon={bike}
        />
        <DailyWorkout
        mode="Swim"
        size="24px"
        distance="3000"
        units="meters"
        icon={swim}
      />
      </div>

    )
  }
}

export default WorkoutList
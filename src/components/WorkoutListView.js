/**
 * Created by suzanne on 8/20/19.
 */

import React from 'react'
import PropTypes from 'prop-types'; // ES6
import DailyWorkouts from './DailyWorkouts'
import ToggleDisplay from 'react-toggle-display'

import '../css/WorkoutListView.css'
import moment from 'moment'
import dailyWorkouts from '../dailyWorkouts'

class WorkoutListView extends React.Component {
  constructor(props) {
    super(props)

  }



  render() {
    return (
      <div className="component-workout-list">
          {
            this.props.dailyData.map((dailyData,i) => {
              return (
                <div className="daily-card" key={i}>
                  <div className="daily-header">
                    <div className="date">{ moment(dailyData.date).format('ddd MMM Do')}</div>
                    <div className="toggle-date push"


                    >
                      <i className="material-icons">keyboard_arrow_down</i>
                    </div>
                  </div>

                  { dailyData.sessions.map ((workout,j)=> {
                    return(
                      <DailyWorkouts
                        key={j}
                        workout={workout}
                      />
                    )
                  })}


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
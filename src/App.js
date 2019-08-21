import React from 'react'
import WorkoutList from './components/WorkoutList'
import Header from './components/Header'
// import DailyWorkout from './components/DailyWorkout'

import runImg from './img/run.png'
import bikeImg from './img/bike.png'
import swimImg from './img/swim.png'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header
          athlete="Kirsten Sass"
        />
        <WorkoutList
          dailyData={[
            {
              mode: 'run',
              size: '24px',
              distance: 3,
              units: 'miles',
              icon: runImg
            }, {
              mode: 'bike',
              size: '24px',
              distance: 24,
              units: 'miles',
              icon: bikeImg
            }, {
              mode: 'swim',
              size: '24px',
              distance: 3000,
              units: 'meters',
              icon: swimImg
            }
          ]}

        />
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0"  rel="noopener noreferrer" target="_blank">CC 3.0 BY</a></div>
      </div>
    )
  }
}

export default App
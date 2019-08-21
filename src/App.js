import React from 'react'
import WorkoutList from './components/WorkoutList'
import Header from './components/Header'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header
          athlete="Kirsten Sass"
        />
        <WorkoutList

        />
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0"  rel="noopener noreferrer" target="_blank">CC 3.0 BY</a></div>
      </div>
    )
  }
}

export default App
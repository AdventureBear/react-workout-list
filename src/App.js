import React from 'react'
import WorkoutListView from './components/WorkoutListView'
import Header from './components/Header'
import './css/App.css'
import dailyWorkouts from './dailyWorkouts'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      dailyWorkouts: dailyWorkouts,
      daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      currentDate: new Date(),
      athlete: "Kirsten Sass",
      newWorkout: {
        "mode": "New Workout",
        "size": "24px",
        "distance": 1,
        "units": "mile",
        "code": "E",
        "codeDesc": "Endurance",
        "descriptionShort": "Easy Endurance",
        "descriptionLong": "When you feel sad, it’s okay. It’s not the end of the world. Everyone has those days when you doubt yourself, and when you feel like everything you do sucks, but then there’s those days when you feel like Superman. It’s just the balance of the world. I just write to feel better."
      }

    }
  }

  addWorkout = (i) => {
    console.log("toggled add")
    // const newWorkoutObj = this.state.newWorkout
    // arr.push(newWorkoutObj)
    // this.setState({
    //   dailyData: arr
    // })
  }

  saveNewWorkout = (i, newWorkout) => {
    console.log("saving new workout")
    var arr=this.state.dailyWorkouts[i].sessions
    arr.push(newWorkout)
    this.setState({
      dailyData: arr
    })
  }

  saveWorkout = (i) => {
    console.log("saving edits TODO")

  }

  handleModeChange = (e, refs) => {
    console.log("saving mode change TODO" + e.target.value + refs)

  }

  editWorkout = (i) => {
    console.log("toggled Edit TODO")
  }

  render() {
    return (
      <div>
      <div>
        <Header
          athlete={this.state.athlete}
        />
      </div>
        <div className="container">
          <div className="component-workout-list">
              {
                dailyWorkouts.map((dailyData, i) => {
                  console.log(i)
                  return (
                    <WorkoutListView
                      {...dailyData}
                      key={i}
                      index={i}
                      addWorkout={this.addWorkout}
                      handleModeChange={this.handleModeChange}
                    />)
                })
              }
          </div>
        </div>
        <div className="">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0"  rel="noopener noreferrer" target="_blank">CC 3.0 BY</a></div>
      </div>
    )
  }
}

export default App
import React from 'react'
import WorkoutListView from './components/WorkoutListView'
import Header from './components/Header'
import './css/App.css'
import dailyWorkouts from './dailyWorkouts'
import moment from 'moment'
import { WorkoutContext } from './context/WorkoutContext.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      dailyWorkouts: dailyWorkouts,
      currentDate: moment(new Date()),
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

  saveWorkoutHeaderChanges = (updateObj, dayIndex, sessionIndex) => {
    console.log("saving mode change TODO " + updateObj )
    let arrKeys = Object.keys(updateObj)
    let session = this.state.dailyWorkouts[dayIndex].sessions[sessionIndex]
   arrKeys.map((elem) => {
        if (elem in session) {
            session[elem] = updateObj[elem]
          }
        }
     )

    let arr = this.state.dailyWorkouts

    arr[dayIndex].sessions[sessionIndex] = session

    this.setState({
      dailyWorkouts: arr
    })
    console.log(session)

  }

  editWorkout = (i) => {
    console.log("toggled Edit TODO")
  }

  render() {
    return (
       <WorkoutContext.Provider
        value = {this.state}
       >
      <div>
        <div>
          <Header
            athlete={this.state.athlete}
          />
        </div>
        <div className="container">
          <div className="component-workout-list">
              {this.state.dailyWorkouts.map((dailyData, i) => {
                  return (
                    <WorkoutListView
                      {...dailyData}
                      key={i}
                      index={i}
                      addWorkout={this.addWorkout}
                      handleModeChange={this.handleModeChange}
                      saveWorkoutHeaderChanges = {this.saveWorkoutHeaderChanges}
                    />)
                })
              }
          </div>
        </div>
        <div className="">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0"  rel="noopener noreferrer" target="_blank">CC 3.0 BY</a></div>
      </div>
       </WorkoutContext.Provider>



    )
  }
}


export default App
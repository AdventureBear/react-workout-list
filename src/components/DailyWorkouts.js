/**
 * Created by suzanne on 8/20/19.
 */
import React from 'react'
import PropTypes from 'prop-types'; // ES6
import '../css/DailyWorkouts.css'
import WorkoutHeader from './WorkoutHeader'


class DailyWorkouts extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      show: true,
      edit: false
    }
  }

  handleClick = () => {
    console.log('Show workout details');
  }

  showWorkout = () => {
    this.setState({
      show: !this.state.show,
      edit: false
    })
    console.log("edit set to false")
    console.log("toggled show")
  }

  handleEditClick = () => {
    this.setState({
      edit: !this.state.edit
    })
    console.log("toggled edit")
  }

  saveEdits = () => {
    console.log("Save button clicked")
    this.setState({
      edit: false,
      show: true
    })

  }

  // handleModeChange = (e) => {
  //   console.log("saving mode change TODO" + e.target.value)
  //
  // }

  renderShow () {
    return(
        <div className="component-daily-workouts workout-main">
            <div className="workout-mode-header">
              <WorkoutHeader
                mode={this.props.mode}
                distance = {this.props.distance}
                units = {this.props.units}
                showWorkout = {this.showWorkout}
                handleEditClick={this.handleEditClick}
                show = {this.state.show}
                saveEdits={this.saveEdits}
              />
            </div>

            <div className="workout-short">
              <strong>{this.props.code}: </strong>{this.props.codeDesc}
                {this.props.descriptionShort}
            </div>
            <div className="workout-long">
              {this.props.descriptionLong}
            </div>
        </div>
     )
  }

  renderHide() {
    return(
      <div className="component-daily-workouts workout-main">
        <div className="workout-mode-header">
          <WorkoutHeader
            mode={this.props.workout.mode}
            distance = {this.props.workout.distance}
            units = {this.props.workout.units}
            showWorkout = {this.showWorkout}
            // handleEditClick={this.handleEditClick}
            show = {this.state.show}
          />
        </div>
      </div>
    )
  }

  renderEdit () {
    return(
      <div className="component-daily-workouts workout-main">
        <div className="workout-mode-header">
          <WorkoutHeader
            edit={this.state.edit}
            mode={this.props.workout.mode}
            distance = {this.props.workout.distance}
            units = {this.props.workout.units}
            showWorkout = {this.showWorkout}
            handleEditClick={this.handleEditClick}
            saveEdits={this.saveEdits}
            handleModeChange={this.props.handleModeChange}
            show = {this.state.show}
          />
        </div>

        <div className="workout-short">
          <strong>{this.props.workout.code}: </strong>{this.props.codeDesc}
          {this.props.workout.descriptionShort}
        </div>
        <div className="workout-long">
          {this.props.workout.descriptionLong}
        </div>
      </div>
    )
  }

  render() {
    if (this.state.show) {
      if (this.state.edit) {
        return this.renderEdit()
      } else {
        return this.renderShow()
      }
    } else {
      return this.renderHide()
    }
  }

}


DailyWorkouts.propTypes = {
  sessions: PropTypes.array,
  editWorkout: PropTypes.func
}

export default DailyWorkouts



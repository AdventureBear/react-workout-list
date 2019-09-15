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

  saveEdits = (updateObj, ) => {
    console.log("This was passed: " + Object.keys(updateObj))
    // console.log(e.target.value)
    this.setState({
      edit: false,
      show: true
    })
    this.props.saveWorkoutHeaderChanges(updateObj, this.props.dayIndex, this.props.sessionIndex)
  }

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
            mode={this.props.mode}
            distance = {this.props.distance}
            units = {this.props.units}
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
            mode={this.props.mode}
            distance = {this.props.distance}
            units = {this.props.units}
            showWorkout = {this.showWorkout}
            handleEditClick={this.handleEditClick}
            saveEdits={this.saveEdits}
            handleModeChange={this.props.handleModeChange}
            show = {this.state.show}
          />
        </div>

        <ShortWorkouts
          {...this.props}
        />
        <LongWorkouts
          {...this.props}
        />
        {/*<div className="workout-short">*/}
        {/*  <strong>{this.props.code}: </strong>{this.props.codeDesc}*/}
        {/*  {this.props.descriptionShort}*/}
        {/*</div>*/}
        {/*<div className="workout-long">*/}
        {/*  {this.props.descriptionLong}*/}
        {/*</div>*/}
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

const ShortWorkouts = props => (
  <div className="workout-short">
    <strong>{props.code}: </strong>{props.codeDesc}
    {props.descriptionShort}
  </div>
)

const LongWorkouts = props => (
  <div className="workout-long">
    {props.descriptionLong}
  </div>
)
DailyWorkouts.propTypes = {
  sessions: PropTypes.array,
  editWorkout: PropTypes.func,
  saveWorkoutHeaderChanges: PropTypes.func
}

export default DailyWorkouts



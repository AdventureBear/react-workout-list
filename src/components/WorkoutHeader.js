import Icon from './Icon'
import React from 'react'
import PropTypes from 'prop-types'
import '../css/WorkoutHeader.css'


class WorkoutHeader extends React.Component {
  handleSaveClick = (e) => {
    let modeObj = {
      "mode": this.refs.mode.value,
      "distance": this.refs.distance.value,
      "units": this.refs.units.value
    }

    console.log(modeObj)
    this.props.saveEdits(modeObj)
  }

  renderShow() {
    return(
    <div className="mode-toggle">
      <div className="workout-icon">
        <Icon
          mode={this.props.mode}
        />
      </div>
      <div className="workout-mode">
        {this.props.mode}
      </div>
      <div className="workout-distance">
        <b>{this.props.distance}</b>{" "}{this.props.units}
      </div>
      <div className="edit  pointer"
           onClick={this.props.handleEditClick}>
        <i className="material-icons md-dark">
          edit
        </i>
      </div>

      <div className="toggle-workout pointer"
           onClick={this.props.showWorkout}
      >
        <i className="material-icons">keyboard_arrow_up</i>
      </div>
    </div>

    )
  }

  renderHide() {
    return(
      <div className="mode-toggle">
        <div className="workout-icon">
          <Icon
            mode={this.props.mode}
          />
        </div>
        <div className="workout-mode">
          {this.props.mode}
        </div>
        <div className="workout-distance">
          <b>{this.props.distance}</b>{" "}{this.props.units}
        </div>
        <div className="edit push ">
          <i className="material-icons md-dark md-inactive">
            edit
          </i>
        </div>

        <div className="toggle-workout pointer"
             onClick={this.props.showWorkout}
        >
          <i className="material-icons">keyboard_arrow_down</i>
        </div>
      </div>
    )
  }

  renderEdit() {
    return(
      <div className="mode-toggle">
        <div className="workout-icon">
          <Icon
            mode={this.props.mode}
          />
        </div>

        <div className="workout-mode workout-mode-edit">
          <input ref="mode" className="workout-mode-input" type="text"
                 defaultValue={this.props.mode}
                 onChange={this.props.handleModeChange} />
        </div>

        <div className="workout-distance workout-distance-edit">
          <b><input ref="distance"  type="number"
                 defaultValue={this.props.distance}
                 onChange={this.props.handleModeChange} /></b>
                 {" "}
          <select className ="units-select" ref="units"  type="text"
                 defaultValue={this.props.units}
                  onChange={this.props.handleModeChange} >
            <option value="miles">Miles</option>
            <option value="kilos">Kilos</option>
            <option value="meters">Meters</option>
            <option value="yards">Yards</option>
          </select>
        </div>

        <div className="save pointer"
          onClick={this.handleSaveClick}
        >
          <i className="material-icons md-dark md-24">
            save
          </i>
        </div>

        <div className="toggle-workout pointer md-inactive"
             onClick={this.props.showWorkout}
        >
          <i className="material-icons">keyboard_arrow_down</i>
        </div>
      </div>

    )
  }

  render() {
    if (this.props.show){
      if (this.props.edit) {
        return this.renderEdit()
      } else {
      return this.renderShow()
      }
    } else if (!this.props.show) {
      return this.renderHide()
    }
  }

}

WorkoutHeader.propTypes = {
  distance: PropTypes.number,
  units: PropTypes.string,
  showWorkout: PropTypes.func,
  addWorkout: PropTypes.func,
  saveEdits: PropTypes.func,
  // editWorkout: PropTypes.func,
  handleEditClick: PropTypes.func,
  handleModeChange: PropTypes.func,
  mode: PropTypes.string,
  saveWorkoutHeaderChanges: PropTypes.func
}

export default WorkoutHeader
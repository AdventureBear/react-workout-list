import Icon from './Icon'
import React from 'react'
import PropTypes from 'prop-types'
import '../css/WorkoutHeader.css'

class WorkoutHeader extends React.Component {
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
      <div className="edit push pointer"
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
        <div className="workout-mode-edit">
          <input ref="mode" className="workout-mode-input" type="text"
                 defaultValue={this.props.mode}
                 onChange={this.props.handleModeChange} />
        </div>
        <div className="workout-distance">
          <b>{this.props.distance}</b>{" "}{this.props.units}
        </div>
        <div className="save push"
          onClick={this.props.handleSaveClick}
        >
          <i className="material-icons md-dark md-24">
            edit
          </i>
        </div>

        <div className="toggle-workout pointer md-inactive"
             // onClick={this.props.showWorkout}
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
  handleSaveClick: PropTypes.func,
  // editWorkout: PropTypes.func,
  handleEditClick: PropTypes.func,
  handleModeChange: PropTypes.func,
  mode: PropTypes.string
}

export default WorkoutHeader
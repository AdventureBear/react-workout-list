import Icon from './Icon'
import React from 'react'
import PropTypes from 'prop-types'

class WorkoutHeader extends React.Component {
  render() {
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
      <div className="workout-distance push">
        <b>{this.props.distance}</b>{" "}{this.props.units}
      </div>
      <div className="toggle-workout push pointer"
           onClick={this.props.showWorkout}
      >
        <i className="material-icons">keyboard_arrow_up</i>
      </div>
    </div>

    )
  }
}

WorkoutHeader.propTypes = {
  distance: PropTypes.number,
  units: PropTypes.string,
  showWorkout: PropTypes.func,
  mode: PropTypes.string
}

export default WorkoutHeader
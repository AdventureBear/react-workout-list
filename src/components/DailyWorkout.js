/**
 * Created by suzanne on 8/20/19.
 */
import React from 'react'
import PropTypes from 'prop-types'; // ES6


class DailyWorkout extends React.Component {
  handleClick = () => {
    console.log('Show workout details');
  }

  render() {
    return (
      <div  onClick={this.handleClick}>
        <img
        alt={this.props.mode}
        src={this.props.icon}
        width={this.props.size}/>
      <span>
            {this.props.mode}
      </span>
        {" "}
        <span>
            {this.props.distance}{" "}
      </span>
        <span>
            {this.props.units}
      </span>
      </div>
    )
  }
}
DailyWorkout.propTypes = {
  mode: PropTypes.string,
  icon: PropTypes.string,
  distance: PropTypes.number,
  units: PropTypes.string,
  size: PropTypes.string,
  dailyData: PropTypes.array
}

export default DailyWorkout
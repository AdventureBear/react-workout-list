import {BikeSVG, RunSVG, SwimSVG} from './SVGRunIcon'

import React from 'react'
import PropTypes from 'prop-types'; // ES6

class Icon extends React.Component {
  renderBike (){
    return (
      <div className='workoutIcon inline-block-child'>
        < BikeSVG
          alt={this.props.mode}
          width={30}
          fill="lightseagreen" />
      </div>
    )
  }
  renderSwim (){
    return (
      <div className='workoutIcon inline-block-child'>
        <SwimSVG

          alt={this.props.mode}
          width={30}
          fill="dodgerblue" />
      </div>
    )
  }

  renderRun (){
    return(
      <div className='workoutIcon inline-block-child'>
        <RunSVG className={"run-icon"}
                alt={this.props.mode}
                width={30}
                fill="coral" />
      </div>
    )
  }

  renderNull(){
    return (
      <div className='workoutIcon inline-block-child'>
        <i className="material-icons">
          fitness_center
        </i>
      </div>
    )
  }

  render () {
    if (this.props.mode==="Running") {
      return this.renderRun()
    } else if (this.props.mode==="Lap Swimming") {
      return this.renderSwim()
    } else if (this.props.mode==="Cycling"){
      return this.renderBike()
    } else {
      return this.renderNull()
    }
  }

}

Icon.propTypes = {
  mode: PropTypes.string
}

export default Icon;
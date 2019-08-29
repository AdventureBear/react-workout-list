/**
 * Created by suzanne on 8/20/19.
 */
import React from 'react'
import PropTypes from 'prop-types'; // ES6
import '../css/DailyWorkouts.css'
import moment from 'moment';

// import runImg from '../img/run.png'
// import bikeImg from '../img/bike.png'
// import swimImg from '../img/swim.png'

import {RunSVG, BikeSVG, SwimSVG} from "./SVGRunIcon";


class DailyWorkout extends React.Component {


  handleClick = () => {
    console.log('Show workout details');
  }
  render() {
    // let iconObj =
    //   {"run": runImg, "bike": bikeImg, "swim": swimImg}
    return (
      <div
        className="col-xs-6 col-xs-offset-3  component-daily-workouts"
        onClick={this.handleClick}>
        <div className="card shadow-sm mb-3 d-inline-block" >
          <div className="card-header">
            { moment(this.props.date).format('ddd MMM Do')}
          </div>
          <div className="card-body text-black bg-light">
            <h4 className="card-title">{this.props.mode}</h4>
            <div className="workout">
              <Icon className="icon"
                    mode={this.props.mode}
              />                         {/* Inline child 1 */}
              <Data className="data"
                    mode={this.props.mode}
                    size={this.props.size}
                    distance={this.props.distance}
                    units={this.props.units}
                    date={this.props.date}
              />                          { /* Inline Child 2 */}
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
            </div>
          </div>
        </div>

        {/*<div className="card workout-card">{ /* Parent *!/*/}
        {/*<div className="card-body">*/}
        {/*    <div className="card-title">*/}
        {/*      <h5>{ moment(this.props.date).format('ddd MMM Do')}</h5>*/}
        {/*    </div>*/}
        {/*    <div className="card-subtitle">*/}
        {/*    {this.props.mode}*/}
        {/*    </div>*/}
        {/*    <div className="workout">*/}
        {/*      <Icon className="icon"*/}
        {/*            mode={this.props.mode}*/}
        {/*          />                         /!* Inline child 1 *!/*/}
        {/*       <Data className="data"*/}
        {/*         mode={this.props.mode}*/}
        {/*         size={this.props.size}*/}
        {/*         distance={this.props.distance}*/}
        {/*         units={this.props.units}*/}
        {/*         date={this.props.date}*/}
        {/*       />                          { /* Inline Child 2 *!/*/}
        {/*    </div>*/}
        {/*   </div>*/}
        {/*  </div>*/}
      </div>
    )
  }
}


class Icon extends React.Component {
  renderBike (){
    return (
      <div className='workoutIcon inline-block-child'>
    < BikeSVG
      alt={this.props.mode}
      width={30}
      fill="#49c" />
      </div>
    )
  }
  renderSwim (){
    return (
      <div className='workoutIcon inline-block-child'>
        <SwimSVG

          alt={this.props.mode}
          width={30}
          fill="blue" />
      </div>
    )
  }

  renderRun (){
    return(
      <div className='workoutIcon inline-block-child'>
        <RunSVG className={"run-icon"}
          alt={this.props.mode}
          width={30}
          fill="#49c" />
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
      }
    }

}
class Data extends React.Component {
  render () {
    return (
      <div className='shortInfo inline-block-child'>
        {" "}
          <span  className="distance"><b>{this.props.distance}</b></span>{" "}{this.props.units}
      </div>
    )
  }
}


DailyWorkout.propTypes = {
  mode: PropTypes.string,
  size:PropTypes.string,
  distance:PropTypes.number,
  units:PropTypes.string,
  date:PropTypes.string,
}

export default DailyWorkout


/**
 * Created by suzanne on 8/20/19.
 */
import React from 'react'
import PropTypes from 'prop-types'
import '../css/Header.css'


class Header extends React.Component {
  render() {
    return (
      <header className="component-header">
        Daily Training {" "}
        <div className="athlete">
          {this.props.athlete}
        </div>
        <span className="current-year">2019</span>
      </header>
    )
  }
}


Header.propTypes ={
  athlete: PropTypes.string
}
export default Header
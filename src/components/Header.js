/**
 * Created by suzanne on 8/20/19.
 */
import React from 'react'
import PropTypes from 'prop-types'

class Header extends React.Component {
  render() {
    return (
      <header className="component-header">
        Workout List for {" "}
        <span>
          {this.props.athlete}
        </span>
      </header>
    )
  }
}

// const Header = () => <div>
//   Workout List for
// <span>
//   {this.props.athlete}
// </span>
// </div>

Header.propTypes ={
  athlete: PropTypes.string
}
export default Header
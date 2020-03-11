import React from 'react'
import PropTypes from 'prop-types'

import User from '../User'

const Users = ({ users, ...rest }) => {
  return (<React.Fragment>
    {
      users.map(user => {
        return <User {...user} key={user.id} {...rest} />   
      })
    }
  </React.Fragment>)
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired
}

export default Users

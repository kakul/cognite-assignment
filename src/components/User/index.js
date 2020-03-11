import React, { useMemo, useCallback } from 'react'
import classNames from 'classnames';
import { Avatar } from 'antd'

import './index.css'

const User = ({ name, id, selected, setSelected }) => {
  const initial = useMemo(() => name.charAt(0), [name])
  const selectUser = useCallback(() => { setSelected(id)}, [id, setSelected]) 
  return (
    <div className={classNames('user-card', { selected: selected === id })} onClick={selectUser}>
      <Avatar className={"user-avatar"} size={50}>{initial}</Avatar>
      <div class="user-info">
        <span class="user-name">{name}</span>
      </div>
    </div>
  )
}

export default User

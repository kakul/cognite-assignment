import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'

import './index.css'

const MessageCard = ({text, className }) => {
return <div className={className}>
    <Card
      style={{ display: 'inline-block' }}
      size="small"
      >
        {text}
    </Card>
  </div>
}

MessageCard.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}

export default MessageCard

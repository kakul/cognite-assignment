import React from 'react'

import MessageCard from '../MessageCard'

const MessageThread = ({messages, me, them}) => {
  return <div style={{paddingTop: '5px'}}>
    {
      messages.map(message => {
        return <MessageCard
          text={message.body}
          className={ me.id === message.from ? 'msg-card-right' : 'msg-card-left' }
        />
      })
    }
  </div>
}
export default MessageThread

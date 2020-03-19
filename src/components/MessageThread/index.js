import React from 'react'

import MessageCard from '../MessageCard'

const MessageThread = ({messages, me, them, deleteMessage}) => {
  return <div style={{paddingTop: '5px'}}>
    {
      messages.map(message => {
        return <MessageCard
          id={message.id}
          deleteMessage={deleteMessage}
          text={message.body}
          className={ me.id === message.from ? 'msg-card-right' : 'msg-card-left' }
        />
      })
    }
  </div>
}
export default MessageThread

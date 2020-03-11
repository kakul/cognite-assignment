import React, { useCallback, useRef } from 'react'

const MessageText = ({ sendMessage }) => {
  const divEl = useRef(null)
  const selectTextDiv = useCallback(()=> {
    if (divEl.current.innerHTML === 'Send a message') {
      divEl.current.innerHTML = ''
    }
  }, [])

  const keyListener = useCallback(event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      if (divEl.current.innerHTML) {
        sendMessage(divEl.current.innerHTML)
        divEl.current.innerHTML = 'Send a message'
        let selected = window.getSelection()
        selected.removeAllRanges()
      }
    }
  }, [sendMessage])
  
  const blurListener = useCallback(() => {
    if(!divEl.current.innerHTML) {
      divEl.current.innerHTML = 'Send a message'
    }
  },[])
  
  return (
    <div style={{ height: '25px' }}
      onKeyPress={keyListener}
      onBlur={blurListener}
      onClick={selectTextDiv}
      ref={divEl}
      contentEditable>
      Send a message
    </div>
  )
}

export default MessageText

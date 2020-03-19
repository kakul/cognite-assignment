import React, { useCallback, useRef } from 'react'

const MessageText = ({ sendMessage, setDraft, draft }) => {
  const divEl = useRef(null)
  const selectTextDiv = useCallback(()=> {
    if (divEl.current.innerHTML === 'Send a message') {
      divEl.current.innerHTML = ''
    }
  }, [])

  const keyListener = useCallback(event => {
    if (event.key === 'Enter') {
      setDraft('')
      event.preventDefault()
      if (divEl.current.innerHTML) {
        sendMessage(divEl.current.innerHTML)
        divEl.current.innerHTML = 'Send a message'
        let selected = window.getSelection()
        selected.removeAllRanges()
      }
    } else {
      setDraft(divEl.current.innerHTML)
    }
  }, [sendMessage, setDraft])
  
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
      {draft || 'Send a message'}
    </div>
  )
}

export default MessageText

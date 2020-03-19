import React, { useState, useMemo, useCallback } from 'react'
import { Layout } from 'antd'

import './App.css'

import Users from './components/Users'
import MessageText from './components/MessageText'
import MessageThread from './components/MessageThread'

import { users, messages, me } from './mock'

const { Header, Content, Footer, Sider } = Layout

function App() {
  const [ userDrafts, setUserDrafts ] = useState({ 1: '', 2: '', 3: '' })
  const [ selected, setSelected ] = useState(null)
  const [ userMessages, setUserMessages ] = useState(messages)
  
  const selectedUser = useMemo(() => {
    return users.find(user => user.id === selected)
  }, [selected])
  
  const sendMessage = useCallback((value) => {
    setUserMessages(prevState =>  {
      const prevMessages = prevState[selected]
      prevMessages.push({ from: me.id, to: selected, body: value }) 
      return {...prevState, [selected]:prevMessages}
    })
  }, [selected])

  const setDraft = useCallback((value) => {
    setUserDrafts(prevState => {
      return {...prevState, [selected]: value}
    })
  })

  const deleteUserMessage = useCallback(id => {
    setUserMessages(prevState => {
      let prevMessages = prevState[selected]
      prevMessages = prevMessages.filter(message => message.id !== id)
      return {...prevState, [selected]: prevMessages}
    })
  })
  
  return (
    <div className="App">
        <Layout>
          <Sider
            width={250} 
            style={{
            textAlign: 'center',
            overflow: 'auto',
            height: '100vh',
            borderRight: '1px solid #ccc',
            backgroundColor: '#f0f2f5'
          }}>
            <Users 
              users={users}
              selected={selected}
              setSelected={setSelected}
            />
          </Sider>
          <Layout>
        <Header
          style={{
            fontWeight: 'bold',
            backgroundColor: '#fafafa'
          }}
        >
          { (selectedUser && selectedUser.name) || 'Messenger' }
        </Header>
            <Content>
              <MessageThread
                deleteMessage={deleteUserMessage} 
                messages={(selected && userMessages[selected]) || []}
                me={me}
                them={selectedUser}
              />
            </Content>
            <Footer
              style={{
                visibility: !selectedUser ? 'hidden' : 'visible',
                padding: "10px",
                backgroundColor: "white"
              }}
            >
              <MessageText sendMessage={sendMessage} setDraft={setDraft} draft={userDrafts[selected] || ''} />
            </Footer>
          </Layout>
        </Layout>
    </div>
  )
}

export default App

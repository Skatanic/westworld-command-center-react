import React, { useEffect, useState } from 'react'
import { Segment } from 'semantic-ui-react'
import ErrorBoundary from './ErrorBoundary'
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'

export const AreaContext = React.createContext([])
export const HostContext = React.createContext({})

const App = () => {
  const [areas, setAreas] = useState([])
  const [hosts, setHosts] = React.useState([])

  const editSelectedHost = obj => setHosts(
    hosts.reduce((all, current) => {
      if (current.id === obj.id) {
        return [...all, { ...obj }]
      } else {
        return [...all, current]
      }
    }, [])
  )

  const selectHost = id => setHosts(
    hosts.reduce((all, current) => {
      if (current.id === id) {
        return [...all, { ...current, selected: true }]
      } else {
        const { selected, ...rest } = current
        return [...all, { ...rest }]
      }
    }, [])
  )

  useEffect(() => {
    fetch('/areas')
      .then(response => response.json())
      .then(areas => setAreas(areas))
  }, [])

  useEffect(() => {
    fetch('/hosts')
      .then(response => response.json())
      .then(hosts => setHosts(hosts))
  }, [])

  const hostStore = {
    hosts,
    setHosts,
    editSelectedHost,
    selectHost
  }

  console.log('App rerenders')

  return (
    <ErrorBoundary>
      <AreaContext.Provider value={areas}>
        <HostContext.Provider value={hostStore}>
          <Segment id='app'>
            <WestworldMap />
            <Headquarters />
          </Segment>
        </HostContext.Provider>
      </AreaContext.Provider>
    </ErrorBoundary>
  )
}

export default App

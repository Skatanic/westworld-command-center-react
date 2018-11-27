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
    hosts.map(host => {
      if (host.id === obj.id) {
        return obj
      } else {
        return host
      }
    })
  )

  const selectHost = id => setHosts(
    hosts.map(host => {
      if (host.id === id) {
        return { ...host, selected: true }
      } else {
        const { selected, ...rest } = host
        return { ...rest }
      }
    })
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
    editSelectedHost,
    selectHost
  }

  console.log('App rerenders')

  return (
    <ErrorBoundary>
      <AreaContext.Provider value={areas}>
        <HostContext.Provider value={hostStore}>
          <Segment id='app'>
            <WestworldMap areas={areas} />
            <Headquarters />
          </Segment>
        </HostContext.Provider>
      </AreaContext.Provider>
    </ErrorBoundary>
  )
}

export default App

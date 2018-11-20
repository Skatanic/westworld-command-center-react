import React, { useEffect, useState } from 'react'
import { Segment } from 'semantic-ui-react'
import ErrorBoundary from './ErrorBoundary'
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'

export const AreaContext = React.createContext([])
export const HostContext = React.createContext([])

const App = () => {
  const [areas, setAreas] = useState([])

  const [hosts, setHosts] = React.useState([])
  const [selectedHost, setSelectedHost] = React.useState(null)
  const editSelectedHost = obj => {
      let newSelectedHost
      const newHosts = hosts.map(host => {
      if (host.id !== selectedHost.id) return host
      newSelectedHost = { ...host, ...obj }
      return newSelectedHost
      })
      setHosts(newHosts)
      setSelectedHost(newSelectedHost)
  }
  const activeHosts = hosts.filter(host => host.active)
  const coldHosts = hosts.filter(host => !host.active)

  // As you go through the components you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.
  
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
    selectedHost,
    setSelectedHost,
    editSelectedHost,
    activeHosts,
    coldHosts
  }
  return (
    <ErrorBoundary>
      <AreaContext.Provider value={areas}>
        <HostContext.Provider value={hostStore}>
          <Segment id='app'>
            <WestworldMap />
            <Headquarters />
            {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
          </Segment>
        </HostContext.Provider>
      </AreaContext.Provider>
    </ErrorBoundary>
  )
}

export default App;

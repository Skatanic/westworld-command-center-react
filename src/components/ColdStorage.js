import React, { useContext } from 'react'
import { Segment } from 'semantic-ui-react'
import { HostContext } from '../App'
import Host from './Host'

const ColdStorage = () => {
  const { hosts, selectHost } = useContext(HostContext)
  console.log('ColdStorage rerenders')

  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact style={{ display: 'flex', flexWrap: 'wrap' }}>
        {hosts.filter(host => !host.active).map(host => <Host 
          key={host.id} 
          host={host}
          onSelect={selectHost}
        />)}
      </Segment>
    </Segment.Group>
  )
}

export default ColdStorage

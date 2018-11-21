import React, { useContext } from 'react'
import { Segment } from 'semantic-ui-react'
import { HostContext } from '../App'
import Host from './Host'

const ColdStorage = () => {
  const { hosts } = useContext(HostContext) 
  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact style={{ display: 'flex', flexWrap: 'wrap' }}>
        {hosts.map(host => <Host 
          key={host.id} 
          host={host} 
        />)}
        {/* Cold Storage contains hosts....but how? Directly? Or is there something else we could use to contain them... */}

      </Segment>
    </Segment.Group>
  )
}

export default ColdStorage

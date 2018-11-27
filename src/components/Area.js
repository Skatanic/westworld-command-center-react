import React, { useContext } from 'react'
import startCase from 'lodash/startCase'
import Host from './Host'
import { HostContext } from '../App'

const Area = ({ area }) => {
  console.log(`Area ${area.name} rerenders`)
  const { hosts, selectHost } = useContext(HostContext)

  return <div className='area' id={area.name}>
    <h3 className='labels'>{startCase(area.name)}</h3>
    {hosts.filter(host => host.area === area.name && host.active)
      .map(host => <Host 
        key={host.id}
        host={host}
        onSelect={selectHost}
      />)
    }
  </div>
}

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;

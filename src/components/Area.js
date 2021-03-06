import React from 'react'
import startCase from 'lodash/startCase'

const Area = ({ area }) => (

  <div className='area' id={area.name}>
    <h3 className='labels'>{startCase(area.name)}</h3>

    {/* See Checkpoint 1 item 2 in the Readme for a clue as to what goes here */}

  </div>

)

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

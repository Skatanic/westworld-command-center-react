import React, { useContext } from 'react';
import { Segment } from 'semantic-ui-react';
import { AreaContext } from '../App'
import Area from './Area'

const WestworldMap = ({ areas }) => {
  const areaContext = useContext(AreaContext)
  console.log('areaConext', areaContext)
  return (
    <Segment id="map">
      {areaContext.map(area => <Area key={area.id} area={area} />)}
    </Segment>
  )
}

export default WestworldMap

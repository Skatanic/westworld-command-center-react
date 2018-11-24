import React, { memo, useContext } from 'react'
import { Segment } from 'semantic-ui-react'
import { AreaContext } from '../App'
import Area from './Area'

const WestworldMap = memo(({ areas }) => {
  const areaContext = useContext(AreaContext)
  console.log('WestWorldMap rerenders')
  return (
    <Segment id="map">
      {areaContext.map(area => <Area key={area.id} area={area} />)}
    </Segment>
  )
})

export default WestworldMap

import React, { memo } from 'react'
import { Segment } from 'semantic-ui-react'
import Area from './Area'

const WestworldMap = memo(({ areas }) => {
  console.log('WestWorldMap rerenders')
  return (
    <Segment id="map">
      {areas.map(area => <Area key={area.id} area={area} />)}
    </Segment>
  )
})

export default WestworldMap

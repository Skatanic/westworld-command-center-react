import React, { memo } from 'react'
import { Card } from 'semantic-ui-react'

const Host = ({ host, onSelect }) => {
  // {/* Remove the "selected" portion of the className above to see what happens to the host. */}
  console.log('Host rerenders')
  
  const handleClick = evt => onSelect(host.id)

  return (
    <div style={{ margin: 14 }}>
      <Card
        className={`host ${host.selected && 'selected'}`}
        onClick={handleClick}
        image={host.imageUrl}
        raised
      />
    </div>
  )
}

export default Host

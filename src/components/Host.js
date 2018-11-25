import React, { memo } from 'react'
import { Card } from 'semantic-ui-react'

const Host = memo(({ host, onSelect, selected }) => {
  // {/* Remove the "selected" portion of the className above to see what happens to the host. */}
  console.log('Host rerenders')
  
  return (
    <div style={{ margin: 14 }}>
      <Card
        className={`host ${selected && 'selected'}`}
        onClick={onSelect}
        image={host.imageUrl}
        raised
      />
    </div>
  )
}, (prevProps, nextProps) => prevProps.selected === nextProps.selected)

export default Host

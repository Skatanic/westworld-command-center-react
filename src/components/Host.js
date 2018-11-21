import React, { useState } from 'react'
import { Card } from 'semantic-ui-react'

const Host = ({ host, onSelect, selected }) => {
  // {/* Remove the "selected" portion of the className above to see what happens to the host. */}
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
}

export default Host

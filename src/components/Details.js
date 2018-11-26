import React, { memo, useContext } from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo'
import { HostContext } from '../App'

const Details = memo(() => {
  const { hosts } = useContext(HostContext)
  const selectedHost = hosts.find(h => h.selected)
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.
  return(
    <Segment id="details" className="HQComps">
      {selectedHost 
        ? <HostInfo selectedHost={selectedHost} />
        : <Image size='medium' src={Images.westworldLogo} />
      }
    </Segment>
  )
})

export default Details

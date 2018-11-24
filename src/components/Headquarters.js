import React, { memo } from 'react'
import { Grid } from 'semantic-ui-react'
import Details from './Details'
import ColdStorage from './ColdStorage'
import LogPanel from './LogPanel'

const Headquarters = memo(() => {
  console.log('Headquarters rerenders')
  return(
    <Grid celled='internally'>
      <Grid.Column width={8}>
        <ColdStorage />
      </Grid.Column>
      <Grid.Column width={5}>
        <Details />
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel />
      {/* and here. Take visual cues from the screenshot/video in the Readme. */}
      </Grid.Column>
    </Grid>
  )
})

export default Headquarters

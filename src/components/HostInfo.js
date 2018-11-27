import React, { useContext } from 'react'
import startCase from 'lodash/startCase'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'
import { AreaContext, HostContext } from '../App'

const HostInfo = ({ selectedHost }) => {
  const areas = useContext(AreaContext)
  const { editSelectedHost } = useContext(HostContext)

  const handleChange = (e, { value }) => 
    editSelectedHost({ ...selectedHost, area: value })

  const toggleActive = (event, { checked }) =>
    editSelectedHost({ ...selectedHost, active: checked })

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image style={{overflow: "hidden", height: "160px", width: "130px"}} floated='left' size='small' src={selectedHost.imageUrl}/>
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {selectedHost.firstName} | {selectedHost.gender === 'Male' ? <Icon name='man' /> : <Icon name='woman' />}
            </Card.Header>
            <Card.Meta>
              <Radio 
                style={{margin: "10px"}} 
                slider 
                onChange={toggleActive} 
                label={selectedHost.active ? 'Active' : 'Decomissioned'} 
                checked={selectedHost.active} 
              />
            </Card.Meta>

            <Divider />
            Current Area:
            <Dropdown
              onChange={handleChange}
              value={selectedHost.area}
              selection
              options={areas.map(area => ({
                key: area.name,
                text: startCase(area.name),
                value: area.name
              }))}
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  )
}

export default HostInfo

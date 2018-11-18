import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import ErrorBoundary from './ErrorBoundary'
import WestworldMap from './components/WestworldMap'
// import Headquarters from './components/Headquarters'

export const AreaContext = React.createContext([])

class App extends Component {
  state: {
    areas: Array<any>,
  } = {
    areas: []
  }
  // As you go through the components you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.
  componentDidMount() {
    fetch('/areas')
      .then(response => response.json())
      .then(areas => this.setState({ areas }))
  }

  render(){
    return (
      <ErrorBoundary>
        <AreaContext.Provider value={this.state.areas}>
          <Segment id='app'>
            <WestworldMap />
            {/* <Headquarters /> */}
            {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
          </Segment>
        </AreaContext.Provider>
      </ErrorBoundary>
    )
  }
}

export default App;

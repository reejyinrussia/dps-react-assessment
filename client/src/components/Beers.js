import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  Button,
  Header,
  Menu,
  Label,
  Container,
  Loader,
  Segment,
  Card }
  from 'semantic-ui-react';
import { getBeers } from '../actions/beers';

class Beers extends React.Component {
  state = { page: 1 }
  componentDidMount() {
    this.props.dispatch(getBeers())
  }

handleNextPageClick = () => {
  let newPage = this.state.page + 1
  this.setState({ page: newPage })
  this.props.dispatch(getBeers(newPage))
  }

  handlePrevPageClick = () => {
    let prevPage = this.state.page - 1
    if (prevPage < 1) {
      return
    }
    this.setState({ page: prevPage })
    this.props.dispatch(getBeers(prevPage))
    }

  render() {
    let { beers } = this.props

    return (
      <Container>
        <Header styles={styles.Header} as="h2" block textAlign="center">{this.state.page}
        <Button primary color='blue' floated='right' onClick={this.handleNextPageClick}>Next Page</Button>
        <Button primary color='blue' floated='left' onClick={this.handlePrevPageClick}>Previous Page</Button>
        </Header>
        {/* <Label circular color="blue">{this.state.page}</Label> */}
        <Menu >
        <Card.Group fluid itemsPerRow={2} computer={4} mobile={16} tablet={16}>
          {beers.map(beer => (
            <Card key={beer.id}>
              <Card.Content>
                <Card.Header>{beer.name}</Card.Header>
                <Card.Description style={styles.beerDescription}>
                  {beer.description}
                </Card.Description>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
        </Menu>
      </Container>
    )
  }
}

const styles = {
  beerDescription: {
    height: '200px',
    overflowY: 'scroll',
  },
  Header: {
    marginTop: '50px',
    backgroundColor: 'black',
    color: 'blue',
  }
}

let mapStateToProps = (state) => {
  return {
    beers: state.beers
  }
}

export default connect(mapStateToProps)(Beers);










// import React from 'react';
// import { Container, Grid, Header, Card, Image, Dropdown, Button, Segment } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
//
//
// class Beers extends React.Component {
//   state = { beers: [], id: '', page: 1, totalPages: 0  }
//   render() {
//
//     return(
//       <Segment>
//         <Header as='h1' textAlign='center'>Beers</Header>
//         <Container style={styles.background}>
//           <Card.Group itemsPerRow={6}>
//             <Card>
//
//             </Card>
//           </Card.Group>
//         </Container>
//       </Segment>
//     )
//   }
// }
//
//
//
//
// const styles = {
//   iframe: {
//     width: '100%',
//     height: '100vh'
//   },
//   centered: {
//     margin: '0 auto',
//   },
//   header: {
//     color: '#2ecc40'
//   },
//   background: {
//     backgroundColor: 'white',
//   },
// }
//
//
//
// export default Beers;

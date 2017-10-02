import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  Button,
  Header,
  Menu,
  Image,
  Container,
  Loader,
  Segment,
  Card }
  from 'semantic-ui-react';
import { getBreweries } from '../actions/breweries';

class Breweries extends React.Component {
  state = { page: 1 }


  componentDidMount() {
    this.props.dispatch(getBreweries())
  }

  handleNextPageClick = () => {
    let newPage = this.state.page + 1
    this.setState({ page: newPage })
    this.props.dispatch(getBreweries(newPage))
    }

  handlePrevPageClick = () => {
    let prevPage = this.state.page - 1
    if (prevPage < 1) {
      return
    }
    this.setState({ page: prevPage })
    this.props.dispatch(getBreweries(prevPage))
    }

    // loadImages = () => {
    //   let { id, name, images = {} } = brewery
    // }

  render() {
    let { breweries } = this.props
    //let { id, name, images = {} } = brewery

    return (
      <Container>
        <Header styles={styles.Header} as="h2" block textAlign="center">{this.state.page}
        <Button primary color='blue' floated='right' onClick={this.handleNextPageClick}>Next Page</Button>
        <Button primary color='blue' floated='left' onClick={this.handlePrevPageClick}>Previous Page</Button>
      </Header>
        {/* <Label circular color="blue">{this.state.page}</Label> */}
        <Menu >
        <Card.Group fluid itemsPerRow={2} computer={4} mobile={16} tablet={16}>
          {breweries.map(brewery => (
            <Card key={brewery.id}>
              <Image as="img" />
              <Card.Content>
                <Card.Header>{brewery.name}</Card.Header>
                <Card.Description style={styles.breweryDescription}>
                  {brewery.description}
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
  breweryDescription: {
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
    breweries: state.breweries
  }
}

export default connect(mapStateToProps)(Breweries);

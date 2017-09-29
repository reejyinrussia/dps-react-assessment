import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Button, Header, List, Container, Loader, Segment } from 'semantic-ui-react';
import InfiniteScroll from 'react-infinite-scroller';

const styles = {
  scroller: { height: '60vh', overflow: 'auto' }
}

class Beers extends React.Component {
  state = { beers: [], page: 1, totalPages: 0 }

  componentDidMount() {
    axios.get('/api/all_beers')
      .then( res => {
        let { data, headers } = res;
        this.setState({ beers: data.beers, totalPages: data.total_pages })
        this.props.dispatch({ type: 'HEADERS', headers })
      });
  }



  loadMore = () => {
    const page = this.state.page + 1;
    axios.get(`/api/all_beers?page=${page}`)
      .then( ({ data, headers }) => {
        this.setState( state => {
          return { beers: [...state.beers, ...data.beers], page: state.page + 1 }
        })
        this.props.dispatch({ type: 'HEADERS', headers })
      });
  }

  render() {
    let { beers, page, totalPages } = this.state;
    return (
      <Container>
        <Header as="h2">{'Da Beers'}</Header>

        <List divided style={styles.scroller}>
          <InfiniteScroll
            pageStart={page}
            loadMore={this.loadMore}
            hasMore={page < totalPages}
            loader={<Loader />}
            useWindow={false}
          >
            { beers.map( beers =>
                <List.Item key={beers.id}>
                  <List.Content>
                    <List.Header>{beers.name}</List.Header>
                    <List.Description>{beers.description}</List.Description>
                  </List.Content>
                </List.Item>
              )
            }
          </InfiniteScroll>
        </List>
      </Container>
    )
  }
}

export default connect()(Beers);









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

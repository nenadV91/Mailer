import React, { Component } from 'react';
import {withStyles} from '@material-ui/core'
import Sidebar from 'components/sidebar';
import Clients from './Clients';
import Filters from './Filters';
import styles from './index.style';
import {connect} from 'react-redux';
import {setFilter, removeClient, selectClient} from 'redux/actions';
import moment from 'moment'

class ClientsPage extends Component {
  state = {
    sources: [],
    fields: [],
    searchText: "",
    loaded: false
  }

  componentDidMount() {
    let {clients} = this.props;
    let {loaded} = this.state;

    if(!loaded) {
      this.setState({
        fields: [...new Set(clients.map(({field}) => field))],
        sources: [...new Set(clients.map(({source}) => source))],
        loaded: true
      })
    }
  }

  handleSearch = ({target: {value}}) => {
    this.setState({searchText: value})
  }

  clearSearch = () => {
    this.setState({searchText: ""})
  }

  filterBySearch = () => {
    let searchText = this.state.searchText.toLowerCase();

    if(!searchText) {
      return this.props.clients;
    }

    return this.props.clients.filter(client => {
      let name = client.name.toLowerCase();
      let email = client.email.toLowerCase();
      return email.includes(searchText) || name.includes(searchText)
    })
  }

  render() {
    let {classes, filters} = this.props;
    let {setFilter} = this.props;
    let clients = this.filterBySearch()

    return (
      <div className={classes.root}>
        <Sidebar isOpen={this.props.sidebar}>
          <Filters 
          clearSearch={this.clearSearch}
          searchText={this.state.searchText}
          handleSearch={this.handleSearch}
          sources={this.state.sources}
          fields={this.state.fields}
          setFilter={setFilter}
          filters={filters} />
        </Sidebar>

        <Clients 
        selectClient={this.props.selectClient}
        removeClient={this.props.removeClient}
        clients={clients} />
      </div>
    );
  }
}


function filterClients({clients, filters}) {
  let today = new Date();

  return clients.filter(client => {
    for(var [key, value] of Object.entries(filters)) {
      if(key !== 'date_added') {
        if((value || value === false)) {
          if(key === 'contacted' && "" + client[key] !== value) {
            return false;
          } 

          if(key !== 'contacted' && client[key] !== value) {
            return false;
          }
        }
      } else {
        if(filters.date_added) {
          if(!moment(client.date_added).isSame(today, filters.date_added)) {
            return false
          }
        }
      }
    }
    return true;    
  })
}


const WithStyles = withStyles(styles)(ClientsPage)
const WithConnect = connect(({clients, filters, sidebar}) => {
  clients = filterClients({clients, filters})
  return {
    filters,
    clients,
    sidebar
  }
}, {
  setFilter,
  removeClient,
  selectClient
})(WithStyles)

export default WithConnect;
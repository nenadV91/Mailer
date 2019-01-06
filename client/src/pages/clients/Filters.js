import React, { Component } from 'react';
import {List, ListItem, Select } from '@material-ui/core'
import {withStyles, FormControl, MenuItem, InputLabel } from '@material-ui/core';
import {RadioGroup, FormControlLabel, Radio} from '@material-ui/core';
import {Paper, InputBase } from '@material-ui/core';
import {
  Search as SearchIcon,
  Close as CloseIcon
} from '@material-ui/icons'

import Slider from '@material-ui/lab/Slider';
import styles from './Filters.style'


class Filters extends Component {
  handleChange = name => event => {
    this.props.setFilter({[name]: event.target.value})
  };

  handleSliderChange = (event, value) => {
    this.props.setFilter({rating: value})
  };

  handleContactedChange = event => {
    this.props.setFilter({ contacted: event.target.value });
  };

  handleAddedDateChange = event => {
    this.props.setFilter({ date_added: event.target.value });
  };

  render() {
    let {sources, fields, classes, filters, searchText} = this.props;

    let selectProps = {
      getContentAnchorEl: null,
      anchorOrigin: {
        vertical: "top",
        horizontal: "left",
      }
    }

    return (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <FormControl className={classes.formControl} fullWidth>
            <Paper className={classes.formPaper}>
              <SearchIcon className={classes.icon} />

              <InputBase
              fullWidth
              id="search-field"
              value={searchText}
              placeholder="Search for client..."
              className={classes.textField}
              onChange={this.props.handleSearch} />

              {searchText &&
              <CloseIcon
              onClick={this.props.clearSearch}
              className={classes.icon} />}
            </Paper>
          </FormControl>
        </ListItem>


        <ListItem style={{paddingTop: 0}} className={classes.listItem}>
          <FormControl style={{marginBottom: 10}} className={classes.formControl} fullWidth>
            <InputLabel className={classes.radioLabel} shrink htmlFor="contacted">
              Contacted
            </InputLabel>

            <RadioGroup
            name="contacted"
            aria-label="Contacted"
            className={classes.radioGroup}
            value={filters.contacted || ""}
            onChange={this.handleContactedChange} >
              <FormControlLabel 
              value="" 
              className={classes.radio} 
              control={<Radio 
                classes={{checked: classes.checked}} 
                color="primary" />} 
              label="All" />
              
              <FormControlLabel 
              value="true" 
              className={classes.radio} 
              control={<Radio 
                classes={{checked: classes.checked}} 
                color="primary" />} 
              label="Contacted" />
              
              <FormControlLabel 
              value="false" 
              className={classes.radio} 
              control={<Radio 
                classes={{checked: classes.checked}} 
                color="primary" />} 
              label="Not contacted" />
            </RadioGroup>
          </FormControl>
        </ListItem>


        <ListItem style={{paddingTop: 0}} className={classes.listItem}>
          <FormControl style={{marginBottom: 10}} className={classes.formControl} fullWidth>
            <InputLabel className={classes.radioLabel} shrink htmlFor="date_added">
              Added date
            </InputLabel>

            <RadioGroup
            name="date_added"
            aria-label="Date added"
            className={classes.radioGroup}
            value={filters.date_added || ""}
            onChange={this.handleAddedDateChange} >
              <FormControlLabel 
              value="" 
              className={classes.radio} 
              control={<Radio 
                classes={{checked: classes.checked}} 
                color="primary" />} 
              label="Anytime" />
              
              <FormControlLabel 
              value="week" 
              className={classes.radio} 
              control={<Radio 
                classes={{checked: classes.checked}} 
                color="primary" />} 
              label="This week" />
              
              <FormControlLabel 
              value="month" 
              className={classes.radio} 
              control={<Radio 
                classes={{checked: classes.checked}} 
                color="primary" />} 
              label="This month" />

              <FormControlLabel 
              value="year" 
              className={classes.radio} 
              control={<Radio 
                classes={{checked: classes.checked}} 
                color="primary" />} 
              label="This year" />
            </RadioGroup>
          </FormControl>
        </ListItem>


        <ListItem className={classes.listItem}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel shrink htmlFor="source-select">
              Source
            </InputLabel>

            <Select
            displayEmpty
            id="source-select"
            MenuProps={selectProps}
            value={filters.source}
            className={classes.textField}
            onChange={this.handleChange('source')}>
              <MenuItem value="">All</MenuItem>
              {sources.map(source => {
                return <MenuItem 
                key={source} 
                value={source}>
                {source}</MenuItem>
              })}
            </Select>
          </FormControl>

          <FormControl className={classes.formControl} fullWidth>
            <InputLabel shrink htmlFor="field-select">
              Field
            </InputLabel>

            <Select
            displayEmpty
            id="field-select"
            MenuProps={selectProps}
            value={filters.field}
            className={classes.textField}
            onChange={this.handleChange('field')}>
              <MenuItem value="">Any</MenuItem>
              {fields.map(field => {
                if(!field) return null;
                return <MenuItem 
                key={field } 
                value={field}>
                {field}</MenuItem>
              })}
            </Select>
          </FormControl>
  
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel className={classes.ratingLabel} shrink htmlFor="rating">
              <span>Rating</span>
              <span>{filters.rating || 'All'}</span>
            </InputLabel>

            <Slider
            min={0}
            max={3}
            step={1}
            aria-labelledby="rating"
            classes={{ container: classes.slider, track: classes.track }}
            value={filters.rating || 0}
            onChange={this.handleSliderChange} />
          </FormControl>
        </ListItem>
      </List>
    );
  }
}

export default withStyles(styles)(Filters)

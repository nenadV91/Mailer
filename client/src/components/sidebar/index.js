import React, { Component } from 'react';
import {Drawer, withStyles} from "@material-ui/core";
import styles from './index.style';
import className from 'classnames';

class Sidebar extends Component {
  render() {
    let {classes, isOpen, width} = this.props;
    let style = {}

    let sidebarClass = className({
      [classes.show]: isOpen
    })

    if(width) {
      style.flex = `0 0 ${width}px`
    }

    return (
      <Drawer 
      open={isOpen} 
      variant="permanent"
      style={style}
      className={sidebarClass}
      classes={{
        docked: classes.root,
        paper: classes.paper,
      }}>
        {this.props.children}
      </Drawer>
    );
  }
}


export default withStyles(styles)(Sidebar);

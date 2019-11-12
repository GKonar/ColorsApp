import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import MiniPalette from './MiniPalette';

const styles = {
  root: {
    backgroundColor: "blue"
  }
}
class PaletteList extends Component {
  render() {
    const { palettes } = this.props;

    return (
      <div className={this.props.classes.root}>
        <MiniPalette/>
          <h1>React Colors</h1>
          {
            palettes.map(palette => (
              <MiniPalette {...palette}/>
            ))
          }
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList);
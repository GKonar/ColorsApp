import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    width: "20%",
    height:  "25%",
    margin: "0 auto",
    marginBottom: "-3.5px",
    cursor: "pointer",
    position: "relative",
    display: "inline-block",
  }
}

function DraggableColorBox(props) {
  return (
    <div className={props.classes.root} style={{ backgroundColor: props.color }}>
      {props.name}
    </div>
  );
};

export default withStyles(styles)(DraggableColorBox);
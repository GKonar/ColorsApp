import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { all } from 'q';
import { transform } from '@babel/core';

const styles = {
  root: {
    width: "20%",
    height:  "25%",
    margin: "0 auto",
    marginBottom: "-3.5px",
    cursor: "pointer",
    position: "relative",
    display: "inline-block",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)"
    }
  },
  boxContent: {
    width: "100%",
    padding: "10px",
    textTransform: "uppercase",
    fontSize: "12px",
    position: "absolute",
    left: "0",
    bottom: "0",
    color: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  deleteIcon: {
    transition: "all .3s ease-in-out"
  }
}

function DraggableColorBox(props) {
  const { classes, color, name } = props;

  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon className={classes.deleteIcon}/>
      </div>
    </div>
  );
};

export default withStyles(styles)(DraggableColorBox);

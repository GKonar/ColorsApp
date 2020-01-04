import sizes from './sizes';
import chroma from 'chroma-js';

const styles = {
  root: {
    width: "20%",
    height:  "25%",
    margin: "0 auto",
    marginBottom: "-5.5px", // ?
    cursor: "pointer",
    position: "relative",
    display: "inline-block",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)"
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "20%"    
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%"    
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "5%"  
    }
  },
  boxContent: {
    width: "100%",
    padding: "10px",
    color: props => chroma(props.color).luminance() <= 0.08 ? "white" : "black" ,
    textTransform: "uppercase",
    fontSize: "12px",
    position: "absolute",
    left: "0",
    bottom: "0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  deleteIcon: {
    transition: "all .3s ease-in-out"
  }
}

export default styles;
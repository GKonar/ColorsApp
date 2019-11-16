import chroma from 'chroma-js';

export default {
  colorBox: {
    width: "20%",
    height: props => props.showingFullPalette ? "25%" : "50%",
    margin: "0 auto",
    marginBottom: "-3.5px",
    cursor: "pointer",
    position: "relative",
    display: "inline-block",
    "&:hover button": {
      opacity: "1"
    }
  },
  copyText: {
    color: props => chroma(props.background).luminance() >= 0.7 ? "black" : " white"
  },
  colorName: {
    color: props => chroma(props.background).luminance() <= 0.08 ? "white" : "black" 
  },
  seeMore: {
    color: props => chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,.6)" : " white",
    position: "absolute",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    width: "60px",
    height: "30px",
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: "30px"
  },
  copyButton: {
    color: props => chroma(props.background).luminance() <= 0.08 ? "white" : "black", 
    width: "100px",
    height: "30px",
    display: "inline-block",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    fontSize: "1rem",
    textTransform: "uppercase",
    border: "none",
    transition: ".5s",
    position: "absolute",
    left: "50%",
    top: "50%",
    opacity: "0"
  },
  boxContent: {
    width: "100%",
    padding: "10px",
    textTransform: "uppercase",
    fontSize: "12px",
    position: "absolute",
    left: "0",
    bottom: "0",
    color: "black",
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s ease-in-out",
    transform: "scale(.1)",
  },
  showOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "10",
    position: "absolute",
  },
  copyMessage: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    fontSize: "4rem",
    transform: "scale(.1)",
    opacity: "0",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "& h1": {
      textTransform: "uppercase",
      fontWeight: "400",
      textShadow: "1px 2px #000",
      background: "rgba(255, 255, 255, .2)",
      width: "100%",
      textAlign: "center",
      marginBottom: "0",
      padding: ".5rem",
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "100"
    }
  },
  showMessage: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transition: "all .4s ease-in-out",
    transitionDelay: ".3s"
  }
}
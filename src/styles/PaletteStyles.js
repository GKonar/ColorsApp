import sizes from './sizes';

export default {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  colors: {
    height: "90%",
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    marginBottom: "-3.5px",
    cursor: "pointer",
    position: "relative",
    display: "inline-block",
    opacity: 1,
    backgroundColor: "black",
    "& a": {
      color: "white",
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
      textDecoration: "none",
      lineHeight: "30px",
      border: "none",
      transition: ".5s",
      position: "absolute",
      left: "50%",
      top: "50%",
    },
    [sizes.down("lg")]: {
      height: "33.33333%",
      width: "25%"
    },
    [sizes.down("md")]: {
      height: "20%",
      width: "50%"
    },
    [sizes.down("xs")]: {
      height: "10%",
      width: "100%"
    },
    
  }
}
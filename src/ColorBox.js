import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import chroma from 'chroma-js';

import './ColorBox.css';

const styles = {
  colorBox: {
    width: "20%",
    height: props => props.showingFullPalette ? "25%" : "50%",
    margin: "0 auto",
    marginBottom: "-3.5px",
    cursor: "pointer",
    position: "relative",
    display: "inline-block",
    "&:hover button": {
      opacity: 1
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

class ColorBox extends Component {
  constructor(props) {
    super(props) 
    this.state = { copied: false };

    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500)
    })
  }
 
  render() {
    const { name, background, moreUrl, showingFullPalette, classes } = this.props;  
    const { copied } = this.state;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className={classes.colorBox}>
          <div style={{ background }} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} />
          <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
            <h1>copied!</h1>
            <p className={classes.copyText}>{ background }</p>
          </div>
            <div>
              <div className={classes.boxContent}>
                <span className={classes.colorName}>{ name }</span>
              </div>
              <button className={classes.copyButton}>Copy</button>
            </div>
            { 
              showingFullPalette && (
              <Link 
                to={ moreUrl }  
                onClick={e => e.stopPropagation()}>
                <span className={classes.seeMore}>More</span>
              </Link>) 
            }
        </div>
      </CopyToClipboard>
    )
  }
}

export default withStyles(styles)(ColorBox);
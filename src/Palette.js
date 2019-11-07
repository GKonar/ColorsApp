import React, { Component } from 'react';
import Slider, { Range } from 'rc-slider';

import ColorBox from './ColorBox';


import 'rc-slider/assets/index.css';
import './Palette.css'

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500} ;

    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(newLevel) {
    this.setState({level: newLevel})
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;

    const colorBoxes = colors[level].map(color => (
       <ColorBox background={color.hex} name={color.name} />
    ))

    return (
      <div className='Palette'>
        <Slider 
          defaultValue={this.state.level} 
          min={100} max={900} 
          onAfterChange={this.changeLevel}
          step={100}/>
        {/* <Navbar /> */}
        <div className="Palette-colors">
          { colorBoxes }
        </div>
        {/* <Footer /> */}
      </div>
    )
  }
}

export default Palette;
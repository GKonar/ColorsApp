import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles/ColorPickerFormStyles';

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: 'teal',
      newColorName: '',
    }

    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", value => 
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    
    ValidatorForm.addValidationRule("isColorUnique", value => 
      this.props.colors.every(
        ({ color }) => color !== this.state.currentColor
      )
    );
  }

  updateCurrentColor(newColor){
    this.setState({ currentColor: newColor.hex })
  }

  handleChange(e) {
    this.setState({ 
      [e.target.name]: e.target.value
    })
  }

  handleSubmit() {
    const newColor = { 
      color: this.state.currentColor, 
      name: this.state.newColorName 
    };  
    this.props.addNewColor(newColor);
    this.setState({ newColorName: '' });
  }

  render() {
    const { paletteFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;

    return (
      <div>
        <ChromePicker 
          color={currentColor}
          onChangeComplete={this.updateCurrentColor} 
          className={classes.picker}
        />
        <ValidatorForm 
          onSubmit={this.handleSubmit}
          ref="form"
          instantValidate={false}>
          <TextValidator 
            value={newColorName} 
            name='newColorName'
            onChange={this.handleChange}
            variant="filled"
            margin="normal"
            placeholder="Color Name"
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={['Enter color name !','Color name must be unique', 'Color already used !']}
            className={classes.colorNameInput}
          />
          <Button 
            variant="contained" 
            type='submit'
            color="primary" 
            style={{backgroundColor: paletteFull ? 'grey' : currentColor}}
            disabled={ paletteFull } 
            className={classes.addColor}>
            {paletteFull ? 'Palette Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
      </div>
    )
  }
}

export default withStyles(styles)(ColorPickerForm);
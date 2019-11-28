import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart';

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: true,
      newPaletteName: ''
    };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange(e) {
    this.setState({ 
      [e.target.name]: e.target.value
    })
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => 
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );  
  }

  render() {
    const { newPaletteName } = this.state;

    return (
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Choose A Palette Name</DialogTitle>
          <ValidatorForm onSubmit={() => this.props.handleSubmit(newPaletteName)}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for Your new Palette. It has to be unique !
              </DialogContentText>
              <Picker />
                <TextValidator 
                name='newPaletteName'
                value={this.state.newPaletteName}
                label='Palette Name'
                onChange={this.handleChange}
                fullWidth
                margin="normal"
                validators={["required", 'isPaletteNameUnique']}
                errorMessages={['Enter Palette Name !', 'Name already taken']}
                />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button 
                variant="contained" 
                color="primary" 
                type="submit">
                  Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
    );
  }
}


export default PaletteMetaForm;

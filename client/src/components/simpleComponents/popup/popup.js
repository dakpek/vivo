import React, { Component } from 'react';
import './popup.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setOpen: false,
            open: false,
            scroll: false,

        }
    }

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    }



    render() {
        return (
            <div className="popupContainer">
            <Dialog
                open={this.props.open}
                onClose={this.props.handlePopup}
                scroll={'paper'}
            >
                <DialogTitle><div className="popupHeader">{this.props.header}</div></DialogTitle>
                <DialogContent dividers={'paper'}>
                <DialogContentText>
                {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
                </DialogContentText>
                </DialogContent>
                    <DialogActions>
                    <Button className="popupClose" onClick={this.props.handlePopup}>
                        Kapat
                    </Button>
                </DialogActions>
            </Dialog>
        </div>

        )
    }
}


function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
}
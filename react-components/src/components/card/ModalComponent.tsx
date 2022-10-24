import * as React from 'react';
import Fade from '@mui/material/Fade';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CardContent from '@mui/material/CardContent';
import { ICard } from '../../global/interfaces';

export interface IProps {
  item: ICard;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

interface IModalState {
  setOpen: boolean;
}

class ModalComponent extends React.Component<IProps, IModalState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      setOpen: false,
    };
  }

  render() {
    return (
      <Box className="wand__continer">
        <Typography paragraph variant="h5" align="center">
          Alias names:
        </Typography>
        <Box>
          {this.props.item.alias_names !== null
            ? this.props.item.alias_names.map((names, id) => (
                <Typography paragraph key={id}>
                  {names}
                </Typography>
              ))
            : ''}
        </Box>
      </Box>
    );
  }
}

export default ModalComponent;

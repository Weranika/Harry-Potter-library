import * as React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Gryffindor from '../../assets/img/Gryffindor.jpg';
import Hufflepuff from '../../assets/img/Hufflepuff.jpg';
import Ravenclaw from '../../assets/img/Ravenclaw.jpg';
import Slytherin from '../../assets/img/Slytherin.jpg';
import GryffindorIcon from '../../assets/icons/GryffindorIcon.png';
import HufflepuffIcon from '../../assets/icons/HufflepuffIcon.png';
import RavenclawIcon from '../../assets/icons/RavenclawIcon.png';
import SlytherinIcon from '../../assets/icons/SlytherinIcon.png';
import Hogw from '../../assets/icons/hogw.png';
import { ICard } from '../../global/interfaces';
import ModalComponent from './ModalComponent';
import './card.scss';

interface ExpandMoreProps extends IconButtonProps {
  expand: string;
}
export interface IProps {
  item: ICard;
}
interface IState {
  expanded: boolean;
  setOpen: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: expand === 'false' ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

class CardComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      expanded: false,
      setOpen: false,
    };
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  handleOpen = () =>
    this.setState({
      setOpen: true,
    });

  handleClose = () =>
    this.setState({
      setOpen: false,
    });

  render() {
    const color: string = this.props.item.house;
    const mapNameToBg = new Map();
    mapNameToBg.set('Gryffindor', Gryffindor);
    mapNameToBg.set('Hufflepuff', Hufflepuff);
    mapNameToBg.set('Ravenclaw', Ravenclaw);
    mapNameToBg.set('Slytherin', Slytherin);

    const mapNameToIcon = new Map();
    mapNameToIcon.set('Gryffindor', GryffindorIcon);
    mapNameToIcon.set('Hufflepuff', HufflepuffIcon);
    mapNameToIcon.set('Ravenclaw', RavenclawIcon);
    mapNameToIcon.set('Slytherin', SlytherinIcon);

    if (this.props.item.image !== null) {
      return (
        <StylesProvider injectFirst>
          <Card role="listitem" className="card">
            <CardContent style={{ backgroundImage: `url(${mapNameToBg.get(color)})` }}>
              <CardMedia
                component="img"
                image={this.props.item.image}
                alt={this.props.item.name}
                className="card-img"
                onClick={this.handleOpen}
              />
              <CardContent className="card__title-content">
                {mapNameToIcon.has(color) ? (
                  <CardMedia
                    component="img"
                    image={`${mapNameToIcon.get(color)}`}
                    alt="mapNameToIcon"
                    className="card-icon"
                  />
                ) : (
                  <CardMedia
                    component="img"
                    image={Hogw}
                    alt="without house"
                    className="card-icon"
                  />
                )}
                <Box>
                  <Typography variant="h6" align="center" className="card__title-name">
                    {this.props.item.name}
                  </Typography>
                  <Typography variant="h6" align="center">
                    {this.props.item.house}
                  </Typography>
                </Box>
              </CardContent>

              <CardActions disableSpacing>
                <ExpandMore
                  expand={this.state.expanded.toString()}
                  onClick={this.handleExpandClick}
                  aria-expanded={this.state.expanded}
                  aria-label="show-more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent className="card__dropp-container">
                  {this.props.item.gender !== null ? (
                    <Box className="card__dropp-content-row">
                      <Typography paragraph variant="h6">
                        Gender:
                      </Typography>
                      <Typography paragraph>{this.props.item.gender}</Typography>
                    </Box>
                  ) : (
                    ''
                  )}

                  {this.props.item.born !== null ? (
                    <Box className="card__dropp-content-row">
                      <Typography paragraph variant="h6">
                        Date of birth:
                      </Typography>
                      <Typography paragraph>{this.props.item.born}</Typography>
                    </Box>
                  ) : (
                    ''
                  )}

                  {this.props.item.blood_status !== null ? (
                    <Box className="card__dropp-content-row">
                      <Typography paragraph variant="h6">
                        Blood status:
                      </Typography>
                      <Typography paragraph>{this.props.item.blood_status}</Typography>
                    </Box>
                  ) : (
                    ''
                  )}

                  {this.props.item.eye_color !== null ? (
                    <Box className="card__dropp-content-row">
                      <Typography paragraph variant="h6">
                        Eye colour:
                      </Typography>
                      <Typography paragraph>{this.props.item.eye_color}</Typography>
                    </Box>
                  ) : (
                    ''
                  )}

                  {this.props.item.hair_color !== null ? (
                    <Box className="card__dropp-content-row">
                      <Typography paragraph variant="h6">
                        Hair colour:
                      </Typography>
                      <Typography paragraph>{this.props.item.hair_color}</Typography>
                    </Box>
                  ) : (
                    ''
                  )}

                  {this.props.item.patronus !== null ? (
                    <Box className="card__dropp-content-row">
                      <Typography paragraph variant="h6">
                        Patronus:
                      </Typography>
                      <Typography paragraph>{this.props.item.patronus}</Typography>
                    </Box>
                  ) : (
                    ''
                  )}

                  {this.props.item.species !== null ? (
                    <Box className="card__dropp-content-row">
                      <Typography paragraph variant="h6">
                        Species:
                      </Typography>
                      <Typography paragraph>{this.props.item.species}</Typography>
                    </Box>
                  ) : (
                    ''
                  )}

                  {this.props.item.boggart !== null ? (
                    <Box className="card__dropp-content-row">
                      <Typography paragraph variant="h6">
                        Boggart:
                      </Typography>
                      <Typography paragraph>{this.props.item.boggart}</Typography>
                    </Box>
                  ) : (
                    ''
                  )}

                  {this.props.item.wands !== null ? (
                    <Box className="wand__continer">
                      <Typography paragraph variant="h5" align="center">
                        Wand
                      </Typography>
                      <Box>
                        {this.props.item.wands !== null
                          ? this.props.item.wands.map((wand, id) => (
                              <Typography paragraph key={id}>
                                {wand}
                              </Typography>
                            ))
                          : ''}
                      </Box>
                    </Box>
                  ) : (
                    ''
                  )}
                </CardContent>
              </Collapse>
            </CardContent>
          </Card>
          <Modal
            open={this.state.setOpen}
            onClose={this.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Box className="modal-card__container">
              {this.props.item.alias_names !== null ? (
                <Box>
                  <Typography paragraph variant="h5" align="center" className="modal-card__title">
                    Alias names
                  </Typography>
                  <Box className="modal-card">
                    {this.props.item.alias_names !== null
                      ? this.props.item.alias_names.map((names, id) => (
                          <Typography paragraph key={id}>
                            {names}
                          </Typography>
                        ))
                      : ''}
                  </Box>
                </Box>
              ) : (
                ''
              )}

              {this.props.item.family_members !== null ? (
                <Box>
                  <Typography paragraph variant="h5" align="center" className="modal-card__title">
                    Family
                  </Typography>
                  <Box className="modal-card">
                    {this.props.item.family_members !== null
                      ? this.props.item.family_members.map((names, id) => (
                          <Typography paragraph key={id}>
                            {names}
                          </Typography>
                        ))
                      : ''}
                  </Box>
                </Box>
              ) : (
                ''
              )}

              {this.props.item.jobs !== null ? (
                <Box>
                  <Typography paragraph variant="h5" align="center" className="modal-card__title">
                    Jobs
                  </Typography>
                  <Box className="modal-card">
                    {this.props.item.jobs !== null
                      ? this.props.item.jobs.map((names, id) => (
                          <Typography paragraph key={id}>
                            {names}
                          </Typography>
                        ))
                      : ''}
                  </Box>
                </Box>
              ) : (
                ''
              )}

              {this.props.item.romances !== null ? (
                <Box>
                  <Typography paragraph variant="h5" align="center" className="modal-card__title">
                    Romances
                  </Typography>
                  <Box className="modal-card">
                    {this.props.item.romances !== null
                      ? this.props.item.romances.map((names, id) => (
                          <Typography paragraph key={id}>
                            {names}
                          </Typography>
                        ))
                      : ''}
                  </Box>
                </Box>
              ) : (
                ''
              )}
            </Box>
            {/* <ModalComponent item={this.props.item} /> */}
          </Modal>
        </StylesProvider>
      );
    }
  }
}

export default CardComponent;

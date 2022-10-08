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
import './card.scss';

interface ExpandMoreProps extends IconButtonProps {
  expand: string;
}
export interface ICardInfo {
  name: string;
  alternate_names: Array<string>;
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number | string;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: string;
    core: string;
    length: number | string;
  };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: Array<string>;
  alive: boolean;
  image: string;
}
export interface IProps {
  item: ICardInfo;
  //itemFilter: ICardInfo;
}

interface IState {
  expanded: boolean;
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
    this.state = { expanded: false };
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
    //console.log('expand', this.state.expanded);
  };

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

    return (
      <StylesProvider injectFirst>
        <Card role="listitem" className="card">
          <CardContent style={{ backgroundImage: `url(${mapNameToBg.get(color)})` }}>
            <CardMedia
              component="img"
              image={this.props.item.image}
              alt={this.props.item.name}
              className="card-img"
            />
            <CardContent className="card__title-content">
              <CardMedia
                component="img"
                image={`${mapNameToIcon.get(color)}`}
                alt="puffendujIcon"
                className="card-icon"
              />
              <Box>
                <Typography variant="h5" align="center">
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
                <Box className="card__dropp-content-row">
                  <Typography paragraph variant="h6">
                    Gender:
                  </Typography>
                  <Typography paragraph>{this.props.item.gender}</Typography>
                </Box>
                <Box className="card__dropp-content-row">
                  <Typography paragraph variant="h6">
                    Date of birth:
                  </Typography>
                  <Typography paragraph>{this.props.item.dateOfBirth}</Typography>
                </Box>
                <Box className="card__dropp-content-row">
                  <Typography paragraph variant="h6">
                    Year of birth:
                  </Typography>
                  <Typography paragraph>{this.props.item.yearOfBirth}</Typography>
                </Box>
                <Box className="card__dropp-content-row">
                  <Typography paragraph variant="h6">
                    Wizard:
                  </Typography>
                  <Typography paragraph>{this.props.item.wizard.toString()}</Typography>
                </Box>
                <Box className="card__dropp-content-row">
                  <Typography paragraph variant="h6">
                    Eye colour:
                  </Typography>
                  <Typography paragraph>{this.props.item.eyeColour}</Typography>
                </Box>
                <Box className="card__dropp-content-row">
                  <Typography paragraph variant="h6">
                    Hair colour:
                  </Typography>
                  <Typography paragraph>{this.props.item.hairColour}</Typography>
                </Box>
                <Box className="card__dropp-content-row">
                  <Typography paragraph variant="h6">
                    Patronus:
                  </Typography>
                  <Typography paragraph>{this.props.item.patronus}</Typography>
                </Box>
                <Box className="card__dropp-content-row">
                  <Typography paragraph variant="h6">
                    Hogwarts student:
                  </Typography>
                  <Typography paragraph>{this.props.item.hogwartsStudent.toString()}</Typography>
                </Box>
                <Box className="card__dropp-content-row">
                  <Typography paragraph variant="h6">
                    Actor:
                  </Typography>
                  <Typography paragraph>{this.props.item.actor}</Typography>
                </Box>
                <Box className="card__dropp-content-row">
                  <Typography paragraph variant="h6">
                    Alive:
                  </Typography>
                  <Typography paragraph>{this.props.item.alive.toString()}</Typography>
                </Box>

                <Box className="wand__continer">
                  <Typography paragraph variant="h5" align="center">
                    Wand
                  </Typography>
                  <Box className="card__dropp-content-row">
                    <Typography paragraph variant="h6">
                      Wood:
                    </Typography>
                    <Typography paragraph>{this.props.item.wand.wood}</Typography>
                  </Box>
                  <Box className="card__dropp-content-row">
                    <Typography paragraph variant="h6">
                      Core:
                    </Typography>
                    <Typography paragraph>{this.props.item.wand.core}</Typography>
                  </Box>
                  <Box className="card__dropp-content-row">
                    <Typography paragraph variant="h6">
                      Length:
                    </Typography>
                    <Typography paragraph>{this.props.item.wand.length}</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Collapse>
          </CardContent>
        </Card>
      </StylesProvider>
    );
  }
}

export default CardComponent;

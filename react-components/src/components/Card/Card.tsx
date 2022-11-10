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
}

interface IState {
  expanded: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { ...rest } = props;
  return <IconButton {...rest} />;
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

    const cardInfo = {
      Gender: this.props.item.gender,
      'Date of birth': this.props.item.dateOfBirth,
      'Year of birth': this.props.item.yearOfBirth,
      Wizard: this.props.item.wizard.toString(),
      'Eye colour': this.props.item.eyeColour,
      'Hair colour': this.props.item.hairColour,
      Patronus: this.props.item.patronus,
      'Hogwarts student': this.props.item.hogwartsStudent.toString(),
      Actor: this.props.item.actor,
      Alive: this.props.item.alive.toString(),
    };
    const wandInfo = {
      Wood: this.props.item.wand.wood,
      Core: this.props.item.wand.core,
      Length: this.props.item.wand.length,
    };

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
                {Object.entries(cardInfo).map(([key, value]) => {
                  return (
                    <Box className="card__dropp-content-row" key={key}>
                      <Typography paragraph variant="h6">
                        {key}:
                      </Typography>
                      <Typography paragraph>{value}</Typography>
                    </Box>
                  );
                })}
                <Box className="wand__continer">
                  <Typography paragraph variant="h5" align="center">
                    Wand
                  </Typography>
                  {Object.entries(wandInfo).map(([key, value]) => {
                    return (
                      <Box className="card__dropp-content-row" key={key}>
                        <Typography paragraph variant="h6">
                          {key}:
                        </Typography>
                        <Typography paragraph>{value}</Typography>
                      </Box>
                    );
                  })}
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

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
  expand: boolean;
}
interface ICardInfo {
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
interface IProps {
  item: ICardInfo;
}

interface IState {
  expanded: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
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

  handleExpandClick() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const color = this.props.item.house;

    return (
      <StylesProvider injectFirst>
        <Card className="card">
          {/* <CardContent style={{ backgroundImage: `url(${Hufflepuff})` }}> */}
          <CardContent style={{ backgroundImage: `url('static/media/${color}')` }}>
            <CardMedia
              component="img"
              image={this.props.item.image}
              alt={this.props.item.name}
              className="card-img"
            />
            <CardContent className="card__title-content">
              <CardMedia
                component="img"
                image={`${this.props.item.house}Icon`}
                alt="puffendujIcon"
                className="card-icon"
              />
              <Box>
                <Typography variant="h5">{this.props.item.name}</Typography>
                <Typography variant="h6" align="center">
                  {this.props.item.house}
                </Typography>
              </Box>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={this.state.expanded}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for
                  10 minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large.
                </Typography>
                <Typography paragraph>Add rice and stir very gently to distribute.</Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
              </CardContent>
            </Collapse>
          </CardContent>
        </Card>
      </StylesProvider>
    );
  }
}

export default CardComponent;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
import Link from '@mui/material/Link';
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
import CardPage from 'components/CardPage/CardPage';
import './card.scss';
import { AppContext } from '../../context/contex';

interface ExpandMoreProps extends IconButtonProps {
  expand: string;
}
export interface IProps {
  item: ICard;
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

function CardComponent(props: IProps) {
  const { state, dispatch } = React.useContext(AppContext);
  const [expanded, setExpanded] = useState<boolean>(false);
  const handleExpandClick = () => setExpanded(!expanded);
  const handleOpen = () => dispatch({ type: 'setCardInfo', payload: props.item });

  const {
    name,
    house,
    image,
    gender,
    born,
    blood_status,
    eye_color,
    hair_color,
    patronus,
    species,
    boggart,
    wiki,
    wands,
  } = props.item;

  const cardInfo = {
    Gender: gender,
    'Date of birth': born,
    'Blood status': blood_status,
    'Eye colour': eye_color,
    'Hair colour': hair_color,
    Patronus: patronus,
    Species: species,
    Boggart: boggart,
  };
  const color: string = house as string;

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
    <>
      {image !== null ? (
        <StylesProvider injectFirst>
          <Card role="listitem" className="card" key={name}>
            <CardContent style={{ backgroundImage: `url(${mapNameToBg.get(color)})` }}>
              <NavLink to="person">
                <CardMedia
                  component="img"
                  image={image as string}
                  alt={name as string}
                  className="card-img"
                  onClick={handleOpen}
                />
              </NavLink>

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
                    {name}
                  </Typography>
                  <Typography variant="h6" align="center">
                    {house}
                  </Typography>
                </Box>
              </CardContent>

              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded.toString()}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show-more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent className="card__dropp-container">
                  {Object.entries(cardInfo).map(([key, value]) => {
                    return (
                      <>
                        {value !== null ? (
                          <Box className="card__dropp-content-row" key={key}>
                            <Typography paragraph variant="h6">
                              {key}:
                            </Typography>
                            <Typography paragraph>{value}</Typography>
                          </Box>
                        ) : (
                          ''
                        )}
                      </>
                    );
                  })}

                  {wands !== null ? (
                    <Box className="wand__continer">
                      <Typography paragraph variant="h5" align="center">
                        Wand
                      </Typography>
                      <Box>
                        {wands !== null
                          ? wands.map((wand, id) => (
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

                  {wiki !== null ? (
                    <Box className="card__dropp-content-row">
                      <Link underline="hover" href={wiki} target="_blank">
                        WIKI
                      </Link>
                    </Box>
                  ) : (
                    ''
                  )}
                </CardContent>
              </Collapse>
            </CardContent>
          </Card>
        </StylesProvider>
      ) : (
        ''
      )}
    </>
  );
}

export default CardComponent;

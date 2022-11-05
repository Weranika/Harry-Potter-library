import React, { useState } from 'react';
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
import './card.scss';

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
  const [expanded, setExpanded] = useState<boolean>(false);
  const [openCard, setOpen] = useState<boolean>(false);

  const handleExpandClick = () => setExpanded(!expanded);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const color: string = props.item.house as string;
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
    Gender: props.item.gender,
    'Date of birth': props.item.born,
    'Blood status:': props.item.blood_status,
    'Eye colour': props.item.eye_color,
    'Hair colour': props.item.hair_color,
    Patronus: props.item.patronus,
    Species: props.item.species,
    Boggart: props.item.boggart,
  };

  return (
    <>
      {props.item.image !== null ? (
        <StylesProvider injectFirst>
          <Card role="listitem" className="card">
            <CardContent style={{ backgroundImage: `url(${mapNameToBg.get(color)})` }}>
              <CardMedia
                component="img"
                image={props.item.image as string}
                alt={props.item.name as string}
                className="card-img"
                onClick={handleOpen}
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
                    {props.item.name}
                  </Typography>
                  <Typography variant="h6" align="center">
                    {props.item.house}
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

                  {props.item.wands !== null ? (
                    <Box className="wand__continer">
                      <Typography paragraph variant="h5" align="center">
                        Wand
                      </Typography>
                      <Box>
                        {props.item.wands !== null
                          ? props.item.wands.map((wand, id) => (
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

                  {props.item.wiki !== null ? (
                    <Box className="card__dropp-content-row">
                      <Link underline="hover" href={props.item.wiki} target="_blank">
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
          <Modal
            open={openCard}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Box className="modal-card__container">
              <Typography paragraph variant="h4" align="center" className="modal-card__title">
                Relation and job
              </Typography>
              {props.item.alias_names !== null ? (
                <Box>
                  <Typography paragraph variant="h5" align="center" className="modal-card__title">
                    Alias names
                  </Typography>
                  <Box className="modal-card">
                    {props.item.alias_names !== null
                      ? props.item.alias_names.map((names, id) => (
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

              {props.item.family_members !== null ? (
                <Box>
                  <Typography paragraph variant="h5" align="center" className="modal-card__title">
                    Family
                  </Typography>
                  <Box className="modal-card">
                    {props.item.family_members !== null
                      ? props.item.family_members.map((names, id) => (
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

              {props.item.jobs !== null ? (
                <Box>
                  <Typography paragraph variant="h5" align="center" className="modal-card__title">
                    Jobs
                  </Typography>
                  <Box className="modal-card">
                    {props.item.jobs !== null
                      ? props.item.jobs.map((names, id) => (
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

              {props.item.romances !== null ? (
                <Box>
                  <Typography paragraph variant="h5" align="center" className="modal-card__title">
                    Romances
                  </Typography>
                  <Box className="modal-card">
                    {props.item.romances !== null
                      ? props.item.romances.map((names, id) => (
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
          </Modal>
        </StylesProvider>
      ) : (
        ''
      )}
    </>
  );
}

export default CardComponent;

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
  const { ...other } = props;
  return <IconButton {...other} />;
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
                  {props.item.gender !== null ? (
                    <Box className="card__dropp-content-row">
                      <Typography paragraph variant="h6">
                        Gender:
                      </Typography>
                      <Typography paragraph>{props.item.gender}</Typography>
                    </Box>
                  ) : (
                    ''
                  )}

                  {props.item.born !== null ? (
                    <Box className="card__dropp-content-row">
                      <Typography paragraph variant="h6">
                        Date of birth:
                      </Typography>
                      <Typography paragraph>{props.item.born}</Typography>
                    </Box>
                  ) : (
                    ''
                  )}

                  {props.item.blood_status !== null ? (
                    <Box className="card__dropp-content-row">
                      <Typography paragraph variant="h6">
                        Blood status:
                      </Typography>
                      <Typography paragraph>{props.item.blood_status}</Typography>
                    </Box>
                  ) : (
                    ''
                  )}

                  {props.item.eye_color !== null ? (
                    <Box className="card__dropp-content-row">
                      <Typography paragraph variant="h6">
                        Eye colour:
                      </Typography>
                      <Typography paragraph>{props.item.eye_color}</Typography>
                    </Box>
                  ) : (
                    ''
                  )}

                  {props.item.hair_color !== null ? (
                    <Box className="card__dropp-content-row">
                      <Typography paragraph variant="h6">
                        Hair colour:
                      </Typography>
                      <Typography paragraph>{props.item.hair_color}</Typography>
                    </Box>
                  ) : (
                    ''
                  )}

                  {props.item.patronus !== null ? (
                    <Box className="card__dropp-content-row">
                      <Typography paragraph variant="h6">
                        Patronus:
                      </Typography>
                      <Typography paragraph>{props.item.patronus}</Typography>
                    </Box>
                  ) : (
                    ''
                  )}

                  {props.item.species !== null ? (
                    <Box className="card__dropp-content-row">
                      <Typography paragraph variant="h6">
                        Species:
                      </Typography>
                      <Typography paragraph>{props.item.species}</Typography>
                    </Box>
                  ) : (
                    ''
                  )}

                  {props.item.boggart !== null ? (
                    <Box className="card__dropp-content-row">
                      <Typography paragraph variant="h6">
                        Boggart:
                      </Typography>
                      <Typography paragraph>{props.item.boggart}</Typography>
                    </Box>
                  ) : (
                    ''
                  )}

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

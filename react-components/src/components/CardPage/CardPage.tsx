import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hook';

import { StylesProvider } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ICard } from '../../global/interfaces';
import './CardPage.scss';

function CardPage() {
  const cardDetailInfo = useAppSelector(
    (state) => state.items.cardInfo
  ) as ICard;
  const { alias_names, family_members, jobs, romances, name } = cardDetailInfo;
  const cardInfo = {
    'Alias names': alias_names,
    Family: family_members,
    Jobs: jobs,
    Romances: romances,
  };

  return (
    <StylesProvider injectFirst>
      <section className="card-page">
        <NavLink to="/">
          <div className="go-back__button">go to main</div>
        </NavLink>
        <Box className="card-page__container">
          <Typography
            paragraph
            variant="h4"
            align="center"
            className="card-page__title"
          >
            Relation and job of {name}
          </Typography>
        </Box>
        {Object.entries(cardInfo).map(([key, value]) => {
          return (
            <>
              {value !== null ? (
                <Box key={key}>
                  <Typography
                    paragraph
                    variant="h5"
                    align="center"
                    className="modal-card__subtitle"
                  >
                    {key}:
                  </Typography>
                  <Box className="modal-card">
                    {value !== null
                      ? value.map((el, id) => (
                          <Typography
                            paragraph
                            key={id}
                            className="modal-card__content"
                          >
                            {el}
                          </Typography>
                        ))
                      : ''}
                  </Box>
                  <Typography paragraph className="modal-card__content">
                    {value}
                  </Typography>
                </Box>
              ) : (
                ''
              )}
            </>
          );
        })}
      </section>
    </StylesProvider>
  );
}

export default CardPage;

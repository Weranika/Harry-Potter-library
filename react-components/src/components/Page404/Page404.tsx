import React from 'react';
import './page404.scss';

function Page404() {
  return (
    <section className="not-found__container">
      <div className="error__container">
        <h1 className="error__title">404</h1>
        <div className="error__content">
          <h3 className="oops">OOPS!</h3>
          <p className="oops">The page you requested could not be found</p>
        </div>
      </div>
    </section>
  );
}

export default Page404;

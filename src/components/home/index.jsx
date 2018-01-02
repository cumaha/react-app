import React from 'react';
import { AppBar, Panel, Layout, Navigation, Button } from 'react-toolbox';
import { Link } from 'react-router-dom';

import style from './style.scss';
import logo from './logo.png';

module.exports = () => (
  <Layout>
    <Panel>
      <AppBar title="React app from scratch">
        <Navigation type="horizontal" className={style.link}>
          <Link to="/">
            <Button
              icon="inbox"
              label="Home"
              flat
            />
          </Link>
          <Link to="/actions">
            <Button
              icon="person"
              label="Actions"
              flat
            />
          </Link>
        </Navigation>
      </AppBar>
      <div className={style.content}>
        <img src={logo} alt="logo" />
        <h1>
          <a href="https://medium.com/@evheniybystrov/react-app-from-scratch-d694300d1631">
            Read more...
          </a>
        </h1>
      </div>
    </Panel>
  </Layout>
);
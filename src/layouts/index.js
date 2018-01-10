import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';

import './reset.scss';
import './global.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Santiago Camelo"
      htmlAttributes={{ lang: 'es' }}
      meta={[
        {
          name: 'description',
          content: 'Santiago Camelo, one commit at a time'
        },
        {
          name: 'keywords',
          content: 'blog, react, react native, blog, vlog, cursos, tutoriales, gratis'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0'
        },
        {
          name: 'apple-mobile-web-app-capable',
          content: 'yes'
        },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'default'
        },
        {
          name: 'apple-mobile-web-app-title',
          content: 'Santiago Camelo'
        }
      ]}
    />

    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

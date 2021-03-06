// IMPORT PACKAGE REFERENCES

import React from 'react';


// COMPONENT

const InsightPage = () => (
    <main className="p-3 animated fadeIn">
        <h3>This is Insight</h3>

        <p>A basic template that consists of the essential elements that are required to start building a Single Page Application using React, React Router, Redux, Bootstrap 4, Sass, and Webpack</p>

        The template consists of Security:
        <ul>
            <li>a typcial project layout structure</li>
            <li>a Babel setup and configuration</li>
            <li>a Webpack setup and configuration</li>
            <li>an ESLint setup and configuration</li>
            <li>a SCSS setup and configuration</li>
            <li>a sample React component to display list codes</li>
            <li>a Redux setup to handle zip codes state</li>
            <li>a React Router setup to show basic navigation</li>
        </ul>

        Additionaly, the template provides a development and production webpack configuration.

        The template also allows one to include specific plugins as part of build.
    </main>
);

export { InsightPage };
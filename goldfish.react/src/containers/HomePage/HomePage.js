import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <p>
        <p>Hello World of React and Webpack!</p>
        <p>
          <Link to="/dynamic">Navigate to Dynamic Page</Link>
        </p>
      </p>
    );
  }
}

export default HomePage;
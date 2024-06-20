import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [user, setUser] = useState({});

  const contextObject = useMemo(() => ({
    user,
    setUser
  }), [user]);

  return (
    <MyContext.Provider value={contextObject}>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default MyProvider;

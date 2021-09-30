import React from 'react';
import { Link, Route } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/hoc">hoc</Link>
      </li>
      <li>
        <Link to="/renderProp">renderProp</Link>
      </li>
      <li>
        <Link to="/hooks/">hooks</Link>
        <Route path="/hooks/">
          <ul>
            <li>
              <Link to="custom-hook">custom hook</Link>
            </li>
            <li>
              <Link to="context">context</Link>
            </li>
            <li>
              <Link to="state-effect">state-effect</Link>
            </li>
            <li>
              <Link to="callback-memo">callback-memo</Link>
            </li>
            <li>
              <Link to="reducer">reducer</Link>
            </li>
          </ul>
        </Route>
      </li>
    </ul>
  );
};

export default Navigation;

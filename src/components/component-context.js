import React, { useContext } from 'react';
import { LangContext } from '../contexts';

const ComponentContext = () => {
  const lang = useContext(LangContext);
  return <div>Component-context. The context's lang is {lang}</div>;
};

export default ComponentContext;

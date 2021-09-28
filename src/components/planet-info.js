import React from 'react';
import usePlanetInfo from '../hooks/usePlanetInfo';

const PlanetInfo = ({ id }) => {
  const name = usePlanetInfo(id);

  return (
    <div>
      {id} - {name}
    </div>
  );
};

export default PlanetInfo;

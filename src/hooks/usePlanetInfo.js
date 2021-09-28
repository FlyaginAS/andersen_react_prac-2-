import { useState, useEffect } from 'react';

//намного удобнее, чем то же самое через HOC
const usePlanetInfo = (id) => {
  const [name, setName] = useState(null);

  //подписались->отписались, иначе в реальном приложении забудем
  //и можем получить состояние гонки- несоответсвие id and name
  useEffect(() => {
    let cancelled = false;
    fetch(`https://swapi.dev/api/planets/${id}/`)
      .then((res) => res.json())
      .then((data) => !cancelled && setName(data.name));

    return () => (cancelled = true);
  }, [id]);

  return name;
};

export default usePlanetInfo;

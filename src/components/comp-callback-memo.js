import React, { useCallback } from 'react';
import useRequest from '../hooks/useRequest';

//допустим импортировали этот метод из сервиса
const getPlanet = (id) => {
  return fetch(`https://swapi.dev/api/planets/${id}`)
    .then((res) => res.json())
    .then((data) => data);
};

const CompCallbackMemo = ({ id }) => {
  //без мемоизации начнется постоянный вызов useRequest
  // и бесконечные запросы на  сервер
  const request = useCallback(() => getPlanet(id), [id]);

  const { data, loading, error } = useRequest(request);

  if (error) {
    return <div>Error</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      CompCallbackMemo -{id} - {data.name}
    </div>
  );
};

export default CompCallbackMemo;

import { useState, useEffect, useMemo } from 'react';

const useRequest = (request) => {
  //необходимо мемоизировать initialState- иначе опять цикл обновлений
  //наш useEffect зависит от этого объекта
  const initialState = useMemo(
    () => ({
      data: null,
      loading: true,
      error: null,
    }),
    [] // этот объект не зависит ни от чего
  );

  // Кстати, так тоже работает :)
  // const initialState = useCallback(
  //   {
  //     data: null,
  //     loading: true,
  //     error: null,
  //   },
  //   []
  // );

  const [dataState, setDataState] = useState(initialState);

  useEffect(() => {
    //теперь бесконечного цикла не будет
    setDataState(initialState);

    let cancelled = false;
    request()
      .then(
        (data) =>
          !cancelled &&
          setDataState({
            data,
            loading: false,
            error: null,
          })
      )
      .catch(
        (error) =>
          !cancelled &&
          setDataState({
            data: null,
            loading: false,
            error,
          })
      );
    return () => (cancelled = true);
  }, [request, initialState]);

  return dataState;
};

export default useRequest;

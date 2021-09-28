import React, { useEffect, useState } from 'react';

const ComponentStateEffect = () => {
  const [color, setColor] = useState('black');
  const [val, setVal] = useState(0);

  //вообще сравнение с мжц не совсем корректно, но можно провести
  //аналог componentDidMount
  useEffect(() => {
    console.log('componentDidMount');
    //подписка
    const timerId = setInterval(() => setVal((val) => val + 1), 3000);
    //отписались при размонтировании-например при изменении в коде
    return () => {
      clearInterval(timerId);
      console.log('timer is cleared');
    };
  }, []);

  //аналог componentDidUpdate но срабатывает и на монтировании
  //допустим хотим срабатывание и на val и на color
  //но вообще хуки позволяют не привязываться к жизненным циклам
  // хуки-когда определенная логика зависит от отпределенных данных
  useEffect(() => {
    console.log('componentDidMount & update');
  }, [val, color]);

  //аналог componentDidUnmount в чистом не применяется-подписались/отписались
  // useEffect(() => () => console.log('чистый анмаутинг'),[]);

  const style = {
    padding: '10px',
    backgroundColor: color,
  };

  return (
    <div style={style}>
      <button onClick={() => setColor('grey')}>Dark</button>
      <button onClick={() => setColor('white')}>Light</button>
      val is {val}
    </div>
  );
};

export default ComponentStateEffect;

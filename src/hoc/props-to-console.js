import React from 'react';

const propsToConsole = (View) => (props) => {
  //добавляем необходимую логику для наших компонентов
  //можно было бы реализовать загрузку любых данных и спиннер
  //но я решил сделать это в хуке, а тут выведу пропсы в консоль

  console.log(`компонент получил следующие пропсы:`);
  console.log(Object.entries(props));

  return <View {...props} />;
};

export default propsToConsole;

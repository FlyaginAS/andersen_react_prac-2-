import React from 'react';

const List = ({ children }) => {
  //здесь может быть много логики и всего остального
  //и благодаря рендер-ф-ии или рендер-пропсу  мы можем  не повторять
  //все это в отдельных компонентах. Рендер ф-ия может рендерить часть
  //компонента или весь компонент

  //можно даже передать ф-ию получения данных. Допустим данные загрузили.
  const items = ['first', 'second', 'third'];
  const renderList = children;
  const list = renderList(items);

  return (
    <div>
      <h2>
        This is the list of the items. Ordered or unordered. As you
        wish.
      </h2>
      {list}
    </div>
  );
};

export default List;

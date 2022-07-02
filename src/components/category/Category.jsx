import { useState } from 'react';

const Category = ({ categoryIndex, setCategoryIndex }) => {
  const categorys = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categorys.map((category, index) => (
          <li
            key={`category_${index}`}
            onClick={() => setCategoryIndex(index)}
            className={categoryIndex === index ? 'active' : ''}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;

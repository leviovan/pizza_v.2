import { useState } from 'react';

const Category = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);

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

import { useSelector, useDispatch } from 'react-redux';
import { setCategoty } from '../../Redux/store/filterSlice/filterSlice';

const Category = () => {
  const categorys = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const categoryNumber = useSelector((state) => state.filter.categotyNumber);
  const dispatch = useDispatch();

  console.log(categoryNumber);
  return (
    <div className="categories">
      <ul>
        {categorys.map((category, index) => (
          <li
            key={`category_${index}`}
            onClick={() => dispatch(setCategoty(index))}
            className={categoryNumber === index ? 'active' : ''}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;

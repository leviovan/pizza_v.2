import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../Redux/store/Slice/filterSlice";

const Category = () => {
  const categorys = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const categoryNumber = useSelector((state) => state.filter.categoryNumber);
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {categorys.map((category, index) => (
          <li
            key={`category_${index}`}
            onClick={() => dispatch(setCategory(index))}
            className={categoryNumber === index ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;

import { useSelector} from "react-redux";
import { setCategory } from "../../Redux/store/Slice/filterSlice";
import { RootState, useAppDispatch } from "../../Redux/store/store";

const Category: React.FC = () => {
  const categorys = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const categoryNumber:number = useSelector((state:RootState) => state.filter.categoryNumber);
  const dispatch = useAppDispatch();

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

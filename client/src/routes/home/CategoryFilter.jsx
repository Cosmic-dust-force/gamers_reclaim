import { useEffect } from "react";
import { useState } from "react";
import useCategories from "../../hooks/useCategories";

export default function CategoryFilter({
  onSelectedCategoriesChangedHandler,
}) {
  const { categories } = useCategories();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filterVisible, setFilterVisible] = useState(false);

  function handleChange(event) {
    const categoryIsChecked = event.currentTarget.checked;
    const selectedCategory = event.target.value;


    if (categoryIsChecked) {
      setSelectedCategories([...selectedCategories, selectedCategory]);
    } else {
      setSelectedCategories(selectedCategories.filter((category) => category !== selectedCategory));
    }
  }

  useEffect(() => {
    onSelectedCategoriesChangedHandler(selectedCategories)
  }, [selectedCategories, onSelectedCategoriesChangedHandler]);

  return (
    <aside className="flex flex-col mr-8 p-2">
      <button
        className="flex align-items-center mb-4"
        onClick={() => setFilterVisible(!filterVisible)}
      >
        Filter By Category
        <span className="material-symbols-outlined">
          {filterVisible ? "expand_less" : "expand_more"}
        </span>
      </button>
      <div className={filterVisible ? "block" : "hidden"}>
        {categories.map((category) => {
          return (
            <div key={category.id}>
              <input
                type="checkbox"
                id={`category${category.id}`}
                value={category.categoryName}
                onChange={handleChange}
              />
              <label htmlFor={`category${category.id}`} className="ml-2">
                {category.categoryName}
              </label>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

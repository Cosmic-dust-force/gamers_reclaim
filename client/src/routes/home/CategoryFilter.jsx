import { useState } from "react";
import useCategories from "../../hooks/useCategories";

export default function CategoryFilter({
  selectedCategories,
  setSelectedCategories,
}) {
  const { categories } = useCategories();

  const [filterVisible, setFilterVisible] = useState(false);

  function handleChange(event) {
    if (event.currentTarget.checked) {
      const newCategory = event.target.value;
      const { ...currentCategories } = selectedCategories;
      const updatedCategories = {
        [newCategory]: newCategory,
        ...currentCategories,
      };
      setSelectedCategories(updatedCategories);
    } else {
      const categoryToRemove = event.target.value;
      const { [categoryToRemove]: removedCategory, ...updatedCategories } =
        selectedCategories;
      setSelectedCategories(updatedCategories);
    }
  }

  return (
    <aside className="flex flex-col mr-8 p-2">
      <button
        className="flex align-items-center mb-4"
        onClick={() => setFilterVisible(!filterVisible)}
      >
        Filter By Category
        <span class="material-symbols-outlined">
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

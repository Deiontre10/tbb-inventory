import React from 'react';

function CategoryMenu() {
    // const [categories, setCategories] = useState([]);
    // const [currentCategory, setCurrentCategory] = useState('');

    return (
    <div>
        <h2>Choose a Category:</h2>
        {categories.map((category) => (
            <button
                key={category._id}
                onClick={() => {
                    setCurrentCategory(category._id);
                }}
            >
                {category.name}
            </button>
        ))}
    </div>
    );
}

export default CategoryMenu;
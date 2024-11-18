import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  return (
    <div>
        <SearchBar />
      {filteredRecipes.length === 0 ? (
        <p>No recipes found. Try adjusting your search!</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '20px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            {/* Add Link to navigate to recipe details */}
            <Link to={`/recipes/${recipe.id}`}>View Details</Link>
            <button
            onClick={() =>
              favorites.includes(recipe.id)
                ? removeFavorite(recipe.id)
                : addFavorite(recipe.id)
            }
          >
            {favorites.includes(recipe.id) ? 'Unfavorite' : 'Favorite'}
          </button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;

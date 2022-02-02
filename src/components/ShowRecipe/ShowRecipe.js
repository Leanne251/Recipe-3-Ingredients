import React, { useEffect, useState } from 'react';
import SearchAgain from '../SearchAgain/SearchAgain';

function ShowRecipe({ setID, id, setGetRecipes, setInput }) {
	const [ receipeData, setRecipeData ] = useState();

	useEffect(
		() => {
			async function searchRecipe() {
				const response = await fetch(
					`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=a555aea16fc3473197b4c2afa236c9f8`
				);
				const data = await response.json();
				const requiredData = { title: data.title, img: data.image, instructions: data.instructions };
				setRecipeData(requiredData);
				console.log('data', data);
				console.log('requiredData', requiredData);
			}
			searchRecipe();
		},
		[ id ]
	);

	// let cleanText = receipeData.instructions.replace(/<\/?[^>]+(>|$)/g, '');

	return receipeData !== undefined ? (
		<div>
			<h2>Your Recipe</h2>
			<p> {receipeData.title}</p>
			<img src={receipeData.img} alt={receipeData.title} />
			<p>
				METHOD:<br /> {receipeData.instructions}
			</p>
			<SearchAgain setInput={setInput} setGetRecipes={setGetRecipes} setID={setID} />
		</div>
	) : (
		<div />
	);
}

export default ShowRecipe;

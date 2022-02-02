import { useState } from 'react';
import ShowRecipe from '../ShowRecipe/ShowRecipe';
import SearchAgain from '../SearchAgain/SearchAgain';

function ShowRecipeOptions({ getRecipes, setGetRecipes, setInput }) {
	console.log(getRecipes);

	const [ id, setID ] = useState();

	function getRecipeID(e) {
		setID(e.target.id);
	}

	if (getRecipes.length === 0) {
		return (
			<div>
				<h2>Ops! Nothing Found</h2>
				<SearchAgain setInput={setInput} setID={setID} setGetRecipes={setGetRecipes} />
			</div>
		);
	}

	console.log('id', id);

	return id === undefined ? (
		<div>
			<h2>What Do You Fancy Cooking?</h2>
			{getRecipes.map((element) => (
				<button key={element.id} id={element.id} onClick={getRecipeID}>
					{element.title}
				</button>
			))}
		</div>
	) : (
		<ShowRecipe id={id} setID={setID} setInput={setInput} setGetRecipes={setGetRecipes} />
	);
}

export default ShowRecipeOptions;

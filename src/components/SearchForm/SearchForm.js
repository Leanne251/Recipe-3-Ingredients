import { useState } from 'react';
import ShowRecipeOptions from '../ShowRecipeOptions/ShowRecipeOptions';

function SearchForm(props) {
	const [ input, setInput ] = useState({ one: '', two: '', three: '' });
	const [ getRecipes, setGetRecipes ] = useState();

	function getInput(e) {
		const value = e.target.value;
		console.log('value', value);
		setInput({ ...input, [e.target.name]: value });
	}
	console.log('input', input);

	function getRecipeButtons(e) {
		e.preventDefault();
		fetchTheRecipes();
	}

	async function fetchTheRecipes() {
		const response = await fetch(
			`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${input.one},+${input.two},+${input.three}&number=3&apiKey=a555aea16fc3473197b4c2afa236c9f8`
		);
		const data = await response.json();
		console.log('data', data);
		setGetRecipes(data);
	}

	return getRecipes === undefined ? (
		<div>
			<h2>Choose Some Ingredients</h2>
			<form>
				<label>Ingredient One:</label>
				<input type="text" name="one" value={input.one} onChange={getInput} />
				<label>Ingredient Two:</label>
				<input type="text" name="two" value={input.two} onChange={getInput} />

				<label>Ingredient Three:</label>
				<input type="text" name="three" value={input.three} onChange={getInput} />

				<button onClick={getRecipeButtons}>Search</button>
			</form>{' '}
		</div>
	) : (
		<ShowRecipeOptions getRecipes={getRecipes} setInput={setInput} setGetRecipes={setGetRecipes} />
	);
}

export default SearchForm;

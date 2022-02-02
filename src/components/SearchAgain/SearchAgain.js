import React from 'react';

function SearchAgain({ setID, setGetRecipes, setInput }) {
	function searchAgainBtn() {
		setID(undefined);
		setGetRecipes(undefined);
		setInput({});
	}
	return <button onClick={searchAgainBtn}>Search Again</button>;
}

export default SearchAgain;

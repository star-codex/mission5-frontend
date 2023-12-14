// src/components/SearchBar.jsx

import React from 'react';
import '../App.css'; // Import the global stylesheet

const SearchBar = ({ onSearch }) => {
	const handleSearch = (e) => {
		const searchTerm = e.target.value;
		onSearch(searchTerm);
	};

	return (
		<div className='search-bar'>
			<input
				type='text'
				placeholder='Search...'
				onChange={handleSearch}
				className='search-input'
			/>
			<button className='search-button'>Search</button>
		</div>
	);
};

export default SearchBar;

// src/App.jsx

import React, { useState } from 'react';
import SearchBar from './components/SearchBar'; // Update the path if necessary

const App = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = (term) => {
		// Handle the search term as needed
		setSearchTerm(term);
	};

	return (
		<div>
			<h1>My React App</h1>
			<SearchBar onSearch={handleSearch} />
			{/* Other components or pages */}
		</div>
	);
};

export default App;

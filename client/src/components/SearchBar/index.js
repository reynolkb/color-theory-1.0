import React from 'react';

const SearchBar = () => {

    // because i'm styling the button not within a form you'll need a onClick function call on the button
    //you might need to change the button type to submit, type='button prevents the page from reload
    //the only reason it might need to stay as it is if we need to display an error to the user
    //if it reloads on failure and not success the user will be confused why they weren't redirected

    function handleSearch() {
        console.log('i am the search button');
        window.location.assign('/search');
    }
    
    return(
        <div className='searchbar-wrapper'>
            <form role='search'>
                <label htmlFor='search' className='sidebar-title'>Search for Palettes</label>
                <div className='search-container'>
                    <input 
                        type='text' 
                        name='search' 
                        className='search-input'
                    />
                    <button 
                        onClick={handleSearch}
                        type='button' 
                        className='btn search-btn'><i className="fas fa-search"></i></button>
                </div>
                <small>Try searching for red, winter, or natural.</small> {/* we might want to remove the prompt */}
            </form>
        </div>
        
    )
}

export default SearchBar;

const SearchHappyHours = () => {
    return (
        <form className='search-happy-hours'>
            <div className='form-control'>
                <label>Address</label>
                <input type='text' placeholder='Enter your street address...'/>
            </div>
            <div className='form-control'>
                <label>Search Radius: </label>
                <select name="distance" id="distance">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
            <input type='submit' value='Search Happy Hours!' className='btn btn-block' />
        </form>
    )
}

export default SearchHappyHours
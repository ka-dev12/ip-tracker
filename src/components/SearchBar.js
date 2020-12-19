const SearchBar = ({ ipSubmit, error = null, inputRef, isLoading }) => {
	return (
		<form onSubmit={ipSubmit} className="mx-auto" style={{ maxWidth: 700 }}>
				<input
					className="col-9 text-center py-1"
					placeholder="IP Address"
					ref={inputRef}
					disabled={isLoading}
				/>
				<button className="col-3 btn-primary py-1" type="submit">
					<i className="fa fa-search" aria-hidden="true"></i>
					<span className="d-none d-md-inline ml-2">Search</span>
				</button>
			{error ? <p className="mt-1 text-center text-danger">Cannot find Ip. Example for format ip: 192.167.20.1</p> : null}
		</form>
	);
};

export default SearchBar;

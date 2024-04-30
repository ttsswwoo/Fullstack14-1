import './style.scss'

function Searchbar() {
    return (
        <>
            <div className="search-input">
                <div className="left">🔍</div>
                <div className="right">
                    <input type="search" placeholder="Search" />
                </div>
            </div>
        </>
    );
}

export default Searchbar;
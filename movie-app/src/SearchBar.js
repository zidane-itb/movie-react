import './SearchBar.css';
import {FaSearch, FaCartPlus} from 'react-icons/fa'

function SearchBar() {

    return (
        <nav>
            <div className="box">
                <div className="search-bar">
                    <form>
                        <input type="text" placeholder="Search"/>
                        <button className="btn-search"><FaSearch/></button>
                    </form>
                    <button className="cart"><FaCartPlus/></button>
                </div>
                
            </div>
        </nav>
    );

  }

export default SearchBar;
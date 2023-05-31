import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faSearch);
const search = () => {
  return (
    <>
    
      <div className="input-search-box">
        <input
          type="text"
          placeholder="Search.."
          className="px-2 w-full h-10 border-2 rounded-full"
        />
        <button type="submit" className="absolute bottom-[18px] right-4">
          <FontAwesomeIcon icon={faSearch} className="w-4 h-4" color="black" />
        </button>
      </div>
    
    </>
  );
};

export default search;

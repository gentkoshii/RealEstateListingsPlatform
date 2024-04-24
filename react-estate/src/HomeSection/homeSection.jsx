import "./homeSection.scss"

function homeSection() {
  return (
    <div className="homeSection">
        <p>SO EASY ...</p>
            <p className="just">just</p>
      <form>
        <input type="text" name="location" placeholder="City Location"/>
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          id="minPrice"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          id="maxPrice"
        />
        <button>
          <img src="./public\Icons\search-icon.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default homeSection;

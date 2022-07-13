import PropTypes from "prop-types";

// movies 데이터를 App에서 가져올걸, props로 받기
// 즉, movie component를 부모 콤포넌트로부터 받아온다고 하는것임
function Movie({ coverImg, title, year, summary, genres }) {
  return (
    // <div key={id}>
    <div>
      {/* <h2>
        {movie.title} ({movie.year})
      </h2>
      <img src={movie.medium_cover_image} />
      <p>{movie.summary}</p>
      <ul>
        {movie.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul> */}
      <h2>
        {title} ({year})
      </h2>
      <img src={coverImg} alt={title} />
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;

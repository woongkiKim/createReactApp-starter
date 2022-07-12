import { useState, useEffect } from "react";

function App() {
  // 로딩 완료시 화면 보이기
  const [loading, setLoading] = useState(true);
  // 화면에 뿌리기 위해
  const [movies, setMovies] = useState([]);

  // 오래된 방법 then
  /* useEffect(() => {
    // API 가져오기
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    )
      .then((response) => response.json())
      // 로딩이 끝나고 함수 2개 실행: 영화데이터 로딩, 로딩 끝나면 h
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);
  console.log(movies); */

  // async await 방법1
  /* 
    const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  */

  // ######### 방법1과 방법2와 오래된 방법인 then #########
  // async await 방법2
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {movies.map((movie, id) => (
            <div key={id}>
              <h2>
                {movie.title} ({movie.year})
              </h2>
              <img src={movie.medium_cover_image} />
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

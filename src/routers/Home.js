// Home route는 App 컴포넌트 전체를 갖고 있을 예정
import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  // 로딩 완료시 화면 보이기
  const [loading, setLoading] = useState(true);
  // 화면에 뿌리기 위해
  const [movies, setMovies] = useState([]);

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
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;

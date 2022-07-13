// useParams: url에 있는 값을 반환함
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Detail.module.css";

function Detail() {
  // ###### 화면 뿌리기 ######

  // 로딩 완료시 화면 보이기
  const [loading, setLoading] = useState(true);
  // 화면에 뿌리기 위해
  const [movie, setMovies] = useState([]);

  const { id } = useParams(); // App.js의 path="" 여기서 받을 변수명이 id일지, id_peter 일지 정함
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>로딩중입니다...</span>
        </div>
      ) : (
        <div className={styles.movie}>
          <img
            src={movie.background_image_original}
            alt={movie.background_image_original}
            className={styles.movie__bg_img}
          />
          <div className={styles.movie__header}>
            <div className={styles.movie__big__title}>
              <img
                src={movie.medium_cover_image}
                alt={movie.medium_cover_image}
                className={styles.movie__img}
              />
              <div>
                <h1 className={styles.movie__title}>{movie.title}</h1>
                <div className={styles.movie__year}>
                  <span>{movie.year}년 • </span>
                  <span>{movie.runtime}분</span>
                </div>
              </div>
            </div>
            <div className={styles.movie__rate__row}>
              <div className={styles.movie__rate}>rate: {movie.rating} </div>
              <div className={styles.movie__rate}>
                downloed: {movie.download_count}
              </div>
              <div className={styles.movie__rate}>
                like: {movie.like_count}{" "}
              </div>
            </div>
          </div>
          <div className={styles.movie__content}>
            <div>{movie.description_full}</div>
            <div className={styles.movie__genres}>
              {movie.genres.map((g) => (
                <span key={g}>{g} </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;

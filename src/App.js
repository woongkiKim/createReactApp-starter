import { useState, useEffect } from "react";

function App() {
  // 코인가격 나열
  const [loading, setLoading] = useState(true);
  // API "한번만" 실행
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      }); // 결과치를 setCoins에 넣은다음, coins 얻기가 끝났으면, loading을 false로 바꿔야함
  }, []);
  // 받은 결과값을 컴포넌트에 어떻게 보여줄까? => 결과값을 State에 넣기
  const [coins, setCoins] = useState([]); // coins는 화면에 뿌릴려면 {coins}
  return (
    <div>
      {/* Loading 중에는 안보이기 */}
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {/* {loading ? <strong>Loading...</strong> : null} */}
      {/* ########### if 문에 값 넣기 ########## */}
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coins.map((coin, index) => (
            <li key={index}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </li>
          ))}
        </ul>
      )}

      {/* coins 화면 뿌리기  */}
    </div>
  );
}

export default App;

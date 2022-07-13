import Home from "./routers/Home";
import Detail from "./routers/Detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  // App.js는 router를 render하는 놈이 됨
  return (
    <Router>
      {/* Switch: Route;(movies/123/delete)를 찾음 */}
      <Switch>
        {/* 스위치 안에 라우트 적고, 그 안에 컴포넌트 적기 */}
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

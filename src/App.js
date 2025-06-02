import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from './components/main/Header';
import Footer from './components/main/Footer';
import Home from './components/main/Home';
import store from './store/store';
import {Provider} from 'react-redux';
import BoardList from "./components/board/BoardList";
import BoardInsert from "./components/board/BoardInsert";
import BoardDetail from "./components/board/BoardDetail";
import BoardDelete from "./components/board/BoardDelete";
import BoardUpdate from "./components/board/BoardUpdate";
import YoutubeFind from "./components/youtube/YoutubeFind";
import HotelList from "./components/hotel/HotelList";
import HotelDetail from "./components/hotel/HotelDetail";

function App() {
  return (
      <Provider store={store}>
          <Router>
              <Header />
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path={"/board/list"} element={<BoardList/>} />
                  <Route path={"/board/insert"} element={<BoardInsert/>} />
                  <Route path={"/board/detail/:no"} element={<BoardDetail/>} />
                  <Route path={"/board/delete/:no"} element={<BoardDelete/>} />
                  <Route path={"/board/update/:no"} element={<BoardUpdate/>} />
                  <Route path={"/youtube/find"} element={<YoutubeFind/>} />
                  <Route path={"/hotel/list"} element={<HotelList/>} />
                  <Route path={"/hotel/detail/:content_no"} element={<HotelDetail/>} />
              </Routes>
              <Footer />
          </Router>
      </Provider>
  );
}

export default App;

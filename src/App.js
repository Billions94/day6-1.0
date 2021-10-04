import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BookList from './component/BookList';
import MyNav from './component/MyNav'
import MyFooter from './component/MyFooter';

function App() {
  return (
    <div className="App">
      <MyNav />
      <BookList />
      <MyFooter />
    </div>
  );
}

export default App;

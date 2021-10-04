import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BookList from './component/BookList';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';

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

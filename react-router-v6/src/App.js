import { Route, Routes, Link, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { BookList } from './pages/BookList';
import { Book } from './pages/Book';
import { NewBook } from './pages/NewBook';
import {NotFound} from './pages/NotFound';
import { BookLayout } from './BookLayout';

function App() {
  const location = useLocation();
  return (
    <>
    <Routes>
      <Route path="/books/new" element={<h1>Extra Content</h1>}/>
    </Routes>
      <nav>
        <ul>
          <li>
            <Link to="/" state='HI'>Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul> 
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/books' element={<BookLayout/>}>
          <Route index element={<BookList/>}/>
          <Route path=':id' element={<Book/>}/>
          <Route path='new' element={<NewBook/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;

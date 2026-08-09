import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import Error from './components/Error.jsx';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import BrowseBooks from './components/BrowseBooks.jsx';
import BookDetails from './components/BookDetails.jsx';
import AddBook from './components/AddBook.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "books",
          element: <BrowseBooks />
        },
        {
          path: "books/:category",
          element: <BrowseBooks />
        },
        {
          path: "book/:id",
          element: <BookDetails />
        },
        {
          path: "add-book",
          element: <AddBook />
        }
      ]
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)

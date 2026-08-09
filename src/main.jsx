import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider , createBrowserRouter } from 'react-router-dom';
import Error from './components/Error.jsx';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';

const router = createBrowserRouter([
    {
      path:"/",
      element:<Home />,
      children:[{
          index:true,
          element:<Home />
      }],
      //   },{
      //     path:"BrowseBook",
      //     element:<BrowseBook />
      //   },{
      //     path:"AddBook",
      //     element:<AddBook />
      //   }
      // ],
      errorElement:<Error />
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />;
  </StrictMode>,
)

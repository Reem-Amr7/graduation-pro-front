
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './components/Header/Header'; // استيراد الهيدر الجديد

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { 
          index: true, 
          element: <>
            <Header /> {}
            <Home />
          </> 
        },
        { 
          path: "login", 
          element: <>
            <Header />
            <Login />
          </> 
        },
        { 
          path: "register", 
          element: <>
            <Header />
            <Register />
          </> 
        },
        { 
          path: "home", 
          element: <>
            <Header />
            <Home />
          </> 
        },
        { path: "*", element: <Login /> },
      ],
    },
  ], {
    basename: "/graduation-pro-front",
  });

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
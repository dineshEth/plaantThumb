import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  Route ,Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Contact, Home, Product, About, User, HomeProducts, GardenProducts, OfficeProducts } from './components/index.js'
import Layout from './Layout.jsx'

// const router =  createBrowserRouter([
//   {
//     path:'/',
//     element : <Layout />,
//     children:[
//       {
//         path:'',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path:'contact',
//         element : <Contact />
//       },
//       {
//         path:'Products',
//         element: <Product />,
//         children: [
//           {
//             path:'homeproducts',
//             element: <HomeProducts />
//           },
//           {
//             path:'officeproducts',
//             element: <OfficeProducts />
//           },
//           {
//             path:'gardenproducts',
//             element: <GardenProducts />
//           },
//         ]
//       },
//       {
//         path:'user/:userid',
//         element : <User />
//       }
//     ]   
//   }
// ]);

const router =   createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path='' element={< Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='homeproducts' element={<HomeProducts />} />
      <Route path='products' element={<Product />} >
        <Route path='homeproducts' element={<HomeProducts />} />
        <Route path='officeproducts' element={<OfficeProducts/>} />
        <Route path='gardenproducts' element={<GardenProducts/>} />
      </Route>
      <Route path='user/:userid' element={<User />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

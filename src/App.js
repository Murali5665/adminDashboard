import './App.css';
import Home from './Component/home/Home';
import Navbar from './Component/navbar/Navbar';
import Sidebar from './Component/sidebar/Sidebar';
import { Routes, Route } from "react-router-dom";
import User from './Component/user/User';
import UserList from './Component/userList/UserList';
import NewUser from './Component/newuser/NewUser';
import ProductList from './Component/productList/ProductList';
import Product from './Component/product/Product';
import NewProduct from './Component/newProduct/NewProduct';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='contianer'>
        <Sidebar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/users" element={<UserList/>}/>
          <Route exact path="/user/:userId" element={<User/>}/>
          <Route exact path="/newuser" element={<NewUser/>}/>
          <Route exact path="/products" element={<ProductList/>}/>
          <Route exact path="/product/:productId" element={<Product/>}/>
          <Route exact path="/newproduct" element={<NewProduct/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

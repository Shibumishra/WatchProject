import React, {Component, useState } from "react";
import "./App.css";
import Card from "./Card";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ApiData } from "./commanData";



// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       countProduct: []
//     }
//   }
//   render() {
//     console.log(ApiData)
//     const {catalogEntryView, ...restDat} = ApiData;
//     return ( <div className="app-body">
//     <Navbar cartCount={this.state.countProduct.length} />
//     <Banner />

//     <div className="MainCont">
//       {catalogEntryView.map((item) => <Card item={item} addcard = {(product) => this.setState({countProduct: [...this.state.countProduct,product ]})} />)}
//     </div>

//     <Footer />
//   </div> );
//   }
// }

// export default App;

const App = () => {
  // console.log(ApiData)
  const { catalogEntryView, ...restDat } = ApiData;
  const [cardProdect, setProduct] = useState([]);
  const updateCard = (product) => {
    let checkProductIndex =
      cardProdect.length &&
      cardProdect.findIndex((item) => item.uniqueID === product.uniqueID);
    if (cardProdect.length && checkProductIndex !== -1) {
      cardProdect[checkProductIndex].quantity += 1;
      setProduct(cardProdect);
    } else {
      product.quantity = 1;
      setProduct([...cardProdect, product]);
    }
  };


  return (
    <div className="app-body">
      <Navbar cartCount={cardProdect.length} cardProdect={cardProdect}/>
      <Banner />

      <div className="search">
        <input type="search" placeholder="Search" />
        <button>Price</button>
        <button>Name</button>
      </div>


      {/* card Start */}
      <div className="MainCont">
        {catalogEntryView.map((item) => (
          <Card item={item} addcard={updateCard} />
        ))}
      </div>
      {/* card End */}

      <Footer />
      
    </div>
  );
};

export default App;

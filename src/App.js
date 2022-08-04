import { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import AddItem from "./AddItem";
import ItemsDisplay from "./ItemsDisplay";
import styled from "styled-components";

const Title = styled.h1`
  color: blue;

`


function App() {

 const [filters, setFilters] = useState({});
 const [data, setData] = useState({ items: [] });

const UserInput = (searchParams) => {
  setFilters(searchParams);
}

const addItemToData = (item) => {
  let itemsVar = data["items"]
  item.id = itemsVar.length;
  itemsVar.push(item)
  setData({ items: itemsVar });

}


  return (
    <div className="container">
      <Title>Test</Title>
          <div className="row mt-3">
            <ItemsDisplay items={data["items"]}/>
          </div>
          <div className="row mt-3">
            <SearchBar updateSearchParams = {UserInput}/>
          </div>
          <div className="row mt-3">
            <AddItem addItem = {addItemToData}/>
          </div>
    </div>
  );
}



export default App;




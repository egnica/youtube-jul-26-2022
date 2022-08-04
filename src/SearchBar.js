import { useState } from "react";


const SearchBar = (props) =>{

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [type, setType] = useState('');
    const [brand, setBrand] = useState('');


    const SubmitButton = (event) => {
        event.preventDefault();
        props.updateSearchParams({name: name, price: price, type: type, brand: brand})
    }



    return(
        <div className="container">
            <div className="row">
            <h2>Search for an Item</h2>
            </div>
            <form onSubmit = {SubmitButton} className="container">
                <div className="row">
                <div className="col">
                    <label htmlFor="name-field">Name: </label>
                    <input id="name-field" type="text" value={name} onChange = {(event) => setName(event.target.value)} className="form-control"/>
                </div>
                <div className="col">
                    <label htmlFor="price-field">Max Price: </label>
                    <input id="price-field" type="number" value={price} onChange = {(event) => setPrice(event.target.value)} className="form-control"/>
                </div>
                <div className="col">           
                    <label htmlFor="type-field">Type: </label>
                    <input id="type-field" type="text" value={type} onChange = {(event) => setType(event.target.value)} className="form-control"/>
                </div>
                <div className="col">     
                    <label htmlFor="brand-field">Brand: </label>
                    <input id="brand-field" type="text" value={brand} onChange = {(event) => setBrand(event.target.value)} className="form-control"/>
                </div>

                </div>
                <div className="row mt-3">
                    <div className="col-4"></div>
                    <button className="btn btn-primary col-4">Search</button>
                </div>
            </form>
            

        </div>
    )
}
export default SearchBar
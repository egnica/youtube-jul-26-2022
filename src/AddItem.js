import { useState } from "react";


const AddItem = (props) =>{

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [type, setType] = useState('');
    const [brand, setBrand] = useState('');


    const SubmitButton = (event) => {
        event.preventDefault();
        props.addItem({name: name, price: price, type: type, brand: brand})
        setName('');
        setPrice(0);
        setType('');
        setBrand('');
    }



    return(
        <div className="container">
            <div className='row'>
            <h2>Add an Item</h2>
            </div>
            <form onSubmit = {SubmitButton} className = "container">
            <div className='row'>   
                <label htmlFor="name-field">Name: </label>
                <input id="name-field" type="text" value={name} onChange = {(event) => setName(event.target.value)} className='form-control w-50'/>
                <label htmlFor="price-field">Price: </label>
                <input id="price-field" type="number" value={price} onChange = {(event) => setPrice(event.target.value)} className='form-control w-50'/>
                <label htmlFor="type-field">Type: </label>
                <input id="type-field" type="text" value={type} onChange = {(event) => setType(event.target.value)} className='form-control w-50'/>
                <label htmlFor="brand-field">Brand: </label>
                <input id="brand-field" type="text" value={brand} onChange = {(event) => setBrand(event.target.value)} className='form-control w-50'/>
            </div>
            <div className='row mt-3'>
            
                <button className='btn btn-primary col-4'>Add Item</button>
            </div>
            </form>
            

        </div>
    )
}
export default AddItem
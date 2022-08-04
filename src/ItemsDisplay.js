
const ItemsDisplay = (props) => {

    return(
        <div className='container'>
            <div className='row'>
                <h2>Items</h2>
            </div>
        <table className={'table ' }>  
           <thead>
                     <tr>
                         <th scope='col'>Id</th>
                         <th scope='col'>Name</th>
                         <th scope='col'>Price</th>
                         <th scope='col'>Type</th>
                         <th scope='col'>Brand</th>
                     </tr>
                 </thead>
         {props.items.map((item) => 
       
                 <tbody>
                    <tr>
                        <th scope='row'>{item.id}</th>
                        <td >{item.name}</td>
                        <td >{item.price}</td>
                        <td >{item.type}</td>
                        <td >{item.brand}</td>
                    </tr>
                 </tbody>
         )}

            </table>
        </div>
    )
}
export default ItemsDisplay;
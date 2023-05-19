


const MyToysRow = ({ toy,handleDelete }) => {
    const {_id, price, pictureUrl, name, sellerName, subCategory, quantity } = toy;
    return (
       
        <tr className='font-semibold'>
            <th>
                <button onClick={() => handleDelete(_id)}  className="btn btn-circle bg-cyan-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            {pictureUrl && <img src={pictureUrl} alt="Avatar Tailwind CSS Component" />}
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>{sellerName}</td>
      <td>
        <button className="btn btn-outline bg-cyan-200 ">Update</button>
      </td>
    </tr>
        
    );
};

export default MyToysRow;
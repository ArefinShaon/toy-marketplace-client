

const ViewToys = ({ toy }) => {
    const { price, pictureUrl,name,sellerName,subCategory,quantity } = toy;
    return (
        <tr>
        <td>
            <div className="avatar">
                <div className="rounded w-24 h-24">
                    {pictureUrl && <img src={pictureUrl} alt="Avatar Tailwind CSS Component" />}
                </div>
            </div>
        </td>
        <td>
            {name}
        </td>
        <td>{subCategory}</td>
        <td>${price}</td>
        <td>{quantity}</td>
        <td>{sellerName}</td>
        
    </tr>
);
};


export default ViewToys;
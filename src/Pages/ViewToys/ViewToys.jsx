import { Link } from 'react-router-dom';

const ViewToys = ({ toy }) => {
  const { price, pictureUrl, name, sellerName, subCategory, quantity } = toy;

  return (
    <tr className='font-semibold'>
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
        <Link to={`/detail/${toy._id}`} className="btn btn-outline bg-cyan-200">
          View Detail
        </Link>
      </td>
    </tr>
  );
};

export default ViewToys;

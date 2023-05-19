import { useState } from "react";

const MyToysRow = ({ toy, handleDelete, handleUpdate }) => {
  const {
    _id,
    price,
    pictureUrl,
    name,
    sellerName,
    subCategory,
    quantity,
    description,
  } = toy;

  const [open, setOpen] = useState(false);
  const [updateData, setUpdateData] = useState({
    id: '',
    price: '',
    quantity: '',
    description: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUpdateClick = () => {
    handleUpdate(updateData.id, {
      price: updateData.price,
      quantity: updateData.quantity,
      description: updateData.description,
    });
    handleClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({ ...updateData, [name]: value });
  };
 
  return (
    <tr className="font-semibold">
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle bg-cyan-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            {pictureUrl && (
              <img src={pictureUrl} alt="Avatar Tailwind CSS Component" />
            )}
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>{sellerName}</td>
      <td>
        <div>
          {/* The button to open modal */}
          <label
            htmlFor={`my-modal-${_id}`}
            onClick={() => {
              setUpdateData({
                id: _id,
                price,
                quantity,
                description,
              });
              handleOpen();
            }}
            className="btn btn-outline bg-cyan-200"
          >
            Update
          </label>

          {/* Put this part before </body> tag */}
          <input
            type="checkbox"
            id={`my-modal-${_id}`}
            className="modal-toggle"
          />
          <div className="modal" open={open} onClick={handleClose}>
            <div className="modal-box">
              <h3 className="font-bold text-lg py-4">Update Toy Information</h3>

              <div className="flex flex-wrap gap-4">
                <input
                  value={updateData.price}
                  onChange={handleInputChange}
                  type="number"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered rounded-none input-lime w-full max-w-xs"
                />

                <input
                  value={updateData.quantity}
                  onChange={handleInputChange}
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  className="input input-bordered rounded-none input-lime w-full max-w-xs"
                />
              </div>

              <textarea
                value={updateData.description}
                onChange={handleInputChange}
                name="description"
                placeholder="Description"
                className="input input-bordered rounded-none input-lime w-full max-w-xs mt-4"
              />

              <div className="modal-action">
                <label
                  htmlFor={`my-modal-${_id}`}
                  className="btn btn-outline text-red hover:bg-red hover:text-white rounded-none"
                >
                  Cancel
                </label>
                <label
                  htmlFor={`my-modal-${_id}`}
                  className="btn btn-outline bg-cyan-200"
                  onClick={handleUpdateClick}
                >
                  Update
                </label>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default MyToysRow;

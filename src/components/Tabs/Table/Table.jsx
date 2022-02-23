import { FaTimes, FaCheck } from "react-icons/fa";
import "./Table.scss";

const Table = () => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Basic</th>
            <th>Standard</th>
            <th>Premium</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monthly price after free month</td>
            <td data-label="Basic">R99.99</td>
            <td data-label="Standard">R159.99</td>
            <td data-label="Premium">R199.99</td>
          </tr>
          <tr>
            <td>HD available</td>
            <td data-label="Basic">
              <FaCheck />
            </td>
            <td data-label="Standard">
              <FaCheck />
            </td>
            <td data-label="Premium">
              <FaCheck />
            </td>
          </tr>
          <tr>
            <td>Ultra HD available</td>
            <td data-label="Basic">
              <FaTimes />
            </td>
            <td data-label="Standard">
              <FaTimes />
            </td>
            <td data-label="Premium">
              <FaCheck />
            </td>
          </tr>
          <tr>
            <td>Number of accounts you can create</td>
            <td data-label="Basic">5</td>
            <td data-label="Standard">10</td>
            <td data-label="Premium">15</td>
          </tr>
          <tr>
            <td>Watch on any device</td>
            <td data-label="Basic">
              <FaCheck />
            </td>
            <td data-label="Standard">
              <FaCheck />
            </td>
            <td data-label="Premium">
              <FaCheck />
            </td>
          </tr>
          <tr>
            <td>Unlimited movies and TV shows</td>
            <td data-label="Basic">
              <FaCheck />
            </td>
            <td data-label="Standard">
              <FaCheck />
            </td>
            <td data-label="Premium">
              <FaCheck />
            </td>
          </tr>
          <tr>
            <td>Cancel anytime</td>
            <td data-label="Basic">
              <FaCheck />
            </td>
            <td data-label="Standard">
              <FaCheck />
            </td>
            <td data-label="Premium">
              <FaCheck />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;

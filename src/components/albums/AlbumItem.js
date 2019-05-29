import React from "react";
import { Link } from "react-router-dom";

const AlbumItem = ({ userId, id, title  }) => {

  return (
    <tr>
      <td>
        {/* <Link
          className="list-group-item-action fa fa-arrow-circle-right ml-4"
          to={`/maintenance/${id}/`}
        /> */}
      </td>
        <td>{userId}</td>
        <td>{title}</td>
    </tr>
  );
};

export default AlbumItem;
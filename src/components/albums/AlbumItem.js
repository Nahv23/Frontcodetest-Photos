import React from "react";
import { Link } from "react-router-dom";

const AlbumItem = ({ userId, id, title  }) => {

  return (
    <tr>
        <Link className="list-group-item-action"
          to={`/albums/${id}/photos`}>
        <td>{userId}</td>
        <td>{title}</td>
        </Link>
    </tr>
  );
};

export default AlbumItem;
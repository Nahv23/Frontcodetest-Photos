import React from "react";
import { Link } from "react-router-dom";

const AlbumItem = ({ userId, title  }) => {

  return (

    <tr>
      <td className="text-center">
        <Link className="list-group-item-action" to={`/albums/${userId}/photos`}>{userId}</Link></td>

      <td className="text-center">
        <Link className="list-group-item-action" to={`/albums/${userId}/photos`}>{title}</Link></td>
    </tr>
  );
};

export default AlbumItem;
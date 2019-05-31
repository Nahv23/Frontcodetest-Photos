import React from "react";


const PhotoItem = ({ albumId, title, thumbnailUrl  }) => {

  return (

    <tr>
      <td className="text-center list-group-item-action">{albumId}</td>
      <td className="text-center list-group-item-action">{title}</td>
      <td className="text-center list-group-item-action">{thumbnailUrl}</td>
    </tr>
  );
};

export default PhotoItem;
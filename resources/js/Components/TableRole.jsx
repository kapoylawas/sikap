import React, { useState } from 'react';

const TableRole = ({ data, onEdit, onDelete }) => {

  const handleCheckboxChange = (e) => {
    //define data
    let data = permissionsData;

    //check item already exists, if so, remove with filter
    if (data.some((name) => name === e.target.value)) {
        data = data.filter((name) => name !== e.target.value);
    } else {
        //push new item to array
        data.push(e.target.value);
    }

    //set data to state
    setPermissionsData(data);
};
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nama</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.nama}</td>
            <td>
              <button onClick={() => onEdit(item.id)}>Edit</button>
              <button onClick={() => onDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableRole;

import React, { useState } from 'react';
import axios from 'axios';

const PostForm = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const [data, setData] = useState({
    name: '',
    date: '',
    idUser: '',
  });

  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  const dataPost = {
    name: data.name,
    date: data.date,
    idUser: data.idUser,
  };

  const handleSubmit = async (e) => {
    try {
      const resp = await axios.post(url, dataPost);
      return resp.data;
    } catch (error) {
      console.log(error.resp);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder='name'
          type='text'
          onChange={(e) => handleChange(e)}
          name='name'
          value={data.name}
        />
        <input
          placeholder='date'
          type='date'
          onChange={(e) => handleChange(e)}
          name='date'
          value={data.date}
        />
        <input
          placeholder='idUser'
          type='number'
          onChange={(e) => handleChange(e)}
          name='idUser'
          value={data.idUser}
        />
        <button type='submit'>submit</button>
      </form>
    </div>
  );
};

export default PostForm;

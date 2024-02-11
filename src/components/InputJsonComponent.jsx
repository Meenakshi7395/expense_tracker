
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addJsonData } from '../redux/actions';

const InputJsonComponent = () => {
  const [jsonDataInput, setJsonDataInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const parsedJson = JSON.parse(jsonDataInput);
      dispatch(addJsonData(parsedJson));
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
    setJsonDataInput('');
  };

  return (
    <div>
      <h2>Input JSON Data:</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={jsonDataInput}
          onChange={(e) => setJsonDataInput(e.target.value)}
          placeholder="Enter JSON data here"
          // rows={6}
          // cols={50}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  }

export default InputJsonComponent;

import { Divider, Input } from 'antd';
import { useState } from 'react';

function Search(props) {
  const [keyword, setKeyword] = useState('');

  function handleKeywordInput(event) {
    setKeyword(event.target.value);
    props.handleFilterFood(event.target.value);
    console.log(event)
  }
  return (
    <>
      <Divider>Search</Divider>

      <label htmlFor="filter">Search</label>
      <Input
        onChange={handleKeywordInput}
        type="text"
        id="filter"
        value={keyword}
      />
    </>
  );
}

export default Search;

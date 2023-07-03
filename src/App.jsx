import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';
import { useState } from 'react';

function App() {
  const [content, setContent] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setContent(result);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={content} />
    </div>
  );
}

export default App;

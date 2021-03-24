import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  
  useEffect(() => {
    const fetchItems = async () => {
      let queries = " "
      const result = await axios(`http://witcher3api.test/api/characters/${queries}`)
      queries = "name/" + query
      console.log('http://witcher3api.test/api/characters/${queries}')
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query])
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;

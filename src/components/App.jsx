import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from "./CreateArea";

function App() {
	const [notes, setNotes] = useState([]);

	function addItem(newNote) {
    	setNotes((prevItems) => {
      	return [...prevItems, newNote];
    });
  }

  	 function deleteItem(id) {
    setNotes((prevItems) => {
      return prevItems.filter((note, index) => {
        return index !== id;
      });
    });
  }

	return (
	<div>
      <Header />
      <CreateArea onAdd={addItem} />
      {notes.map((NewlyNote,index) => {
      	return <Note 
      	key={index} 
      	id={index}
      	title={NewlyNote.title}
      	content={NewlyNote.content}
      	onChecked={deleteItem}
      	 />
      	
      	})}
      
      <Footer />
    </div>
  );
}

export default App;
import React, { useState } from 'react';

const App = () => {
const [contacts, setContacts] = useState([
{ id: 1, name: 'akshay', number: '+91 123 456 7890' },
{ id: 2, name: 'adwaith', number: '+91 20 7946 0958' },
{ id: 3, name: 'abinav', number: '+91 98765 43210' },
]);

const [newName, setNewName] = useState('');
const [newNumber, setNewNumber] = useState('');
const [searchQuery, setSearchQuery] = useState('');
const [searchType, setSearchType] = useState('name');

// Add a new contact
const addContact = (event) => {
event.preventDefault();
if (!newName || !newNumber) return;

const duplicate = contacts.some(
(contact) => contact.name.toLowerCase() === newName.toLowerCase()
);
if (duplicate) {
alert('Name already exists in phonebook!');
return;
}

const newContact = {
id: contacts.length + 1,
name: newName,
number: newNumber,
};

setContacts([...contacts, newContact]);
setNewName('');
setNewNumber('');
};

// Filter contacts based on search type
const filteredContacts = contacts.filter((contact) => {
if (searchType === 'name') {
return contact.name.toLowerCase().includes(searchQuery.toLowerCase());
} else {
return contact.number.includes(searchQuery);
}
});

return (
<div>
<h2>Phonebook</h2>

{/* Add Contact Form */}
<form onSubmit={addContact}>
<input
type="text"
value={newName}
onChange={(e) => setNewName(e.target.value)}
placeholder="Enter name"
required
/>
<input
type="text"
value={newNumber}
onChange={(e) => setNewNumber(e.target.value)}
placeholder="Enter phone number"
required
/>
<button type="submit">Add</button>
</form>

{/* Search Section */}
<h3>Search Contacts</h3>
<select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
<option value="name">Search by Name</option>
<option value="number">Search by Number</option>
</select>
<input
type="text"
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
placeholder={searchType === 'name' ? 'Enter name' : 'Enter phone number'}
/>

{/* Display Contacts */}
<h3>Contacts</h3>
<ul>
{filteredContacts.length > 0 ? (
filteredContacts.map((contact) => (
<li key={contact.id}>
{contact.name} - {contact.number}
</li>
))
) : (
<p>No contacts found</p>
)}
</ul>
</div>
);
};

export default App;


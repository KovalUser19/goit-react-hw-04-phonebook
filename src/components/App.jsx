import { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import css from "./App.module.css"

let contatsArray = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(contatsArray);
  const [filter, setFilter] = useState('');

  useEffect(() => {
   const localData = localStorage.getItem('contacts')
    if (localData && JSON.parse(localData).length > 0) {
    setContacts(JSON.parse(localData))
    }
    return () => {
      localStorage.removeItem('contacts')
    }
},[])

  useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts))
  },[contacts])


   const ifContactExist = (name) =>
  {
    return contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase())
  }

  const addContact = (data) => {
    if (ifContactExist(data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    const contact = { ...data, id: nanoid() };
    setContacts((prev) => [...prev, contact])
    }

  const onDeleteContact = (contactId) => {
    setContacts((prev) => prev.filter((el)=>el.id !== contactId))
    }

  const onChangeFilter = (e) => {
    setFilter(e.target.value )
  }

  const getVisibleContact = () => {
    console.log(contacts);
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
  };

   const visibleContact = getVisibleContact();

  return (
     <div className={css.wrapper}>
       <h1>Phonebook</h1>
       <ContactForm addContact={addContact}></ContactForm>
       <h2>Contacts</h2>
       <Filter value={filter} filterWord={onChangeFilter}></Filter>
       <ContactList contacts={visibleContact} deleteContact={onDeleteContact}>
       </ContactList>
    </div>
  );
}

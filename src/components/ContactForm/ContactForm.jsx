
import { useState } from "react"
import css from "./ContactForm.module.css"

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
      }

 const reset = () => {
   setName('');
   setNumber('');
  }

  const handleSubmit = (e)=>{
   e.preventDefault()
   addContact({name, number});
   reset()
  }

 return (
        <form  onSubmit={handleSubmit}>
          <div className={css.formWrapper}>
            <label htmlFor='nameInputId'>Name</label>
            <input className={css.input}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required />
            <label htmlFor='numberInputId'>Number</label>
            <input className={css.input}
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
            />
            <button className={css.button} type="submit">Add contact</button>
          </div>
        </form>
      )
 }

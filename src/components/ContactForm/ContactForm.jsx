
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


/* export class ContactForm extends Component {
  state = {
    name: '',
    number: '',

  }
  handleChange = ({ target: {value, name} }) => {
      return this.setState({
        [name]:  value
      })
  }
  reset = () => {
      this.setState({name:'',number:''})
  }

 handleSubmit = (e)=>{
   e.preventDefault()
   this.props.addContact(this.state);
   this.reset()
  }

  render() {

      return (
        <form  onSubmit={this.handleSubmit}>
          <div className={css.formWrapper}>
            <label htmlFor={this.loginInputId}>Name</label>
            <input className={css.input}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required />
            <label>Number</label>
            <input className={css.input}
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
            />
            <button className={css.button} type="submit">Add contact</button>
          </div>
        </form>
      )
    }
  }
 */
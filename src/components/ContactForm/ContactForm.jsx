import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/contactSlice';
import 'yup-phone';
import { useForm } from 'react-hook-form';
import css from './ContactForm.module.css';

const checkContscts = (arr, obj) => {
  return arr.every(e => e.name.toLowerCase() !== obj.name.toLowerCase());
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  
  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
 
  });


  const onSubmit = data => {
    const { name } = data;

    if (checkContscts(contacts, data)) {
      dispatch(addContact(data));
      reset();
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  return (
    <form  onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <label  className={css.name}>
        Name
        <input defaultValue="" {...register('name')} className={css.formInput}/>
      </label >
      <label className={css.number}>
        Number
        <input defaultValue="" {...register('number')} className={css.formInput}/>
        
      </label >
      <button  type="submit" className={css.button}>Add contact</button >
    </form >
  );
};

export default ContactForm;
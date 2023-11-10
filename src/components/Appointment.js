import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import classes from './Appointmnet.module.css';
import {doctorApp} from '../img';

const Appointment = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_q6ws1vg',
        'template_mgoy3xr',
        {
          from_name: form.name,
          to_name: 'Alex the Dev',
          from_email: form.email,
          to_email: 'kaldikonly@gmail.com',
          message: form.message,
        },
        'w708rAApM2HcJVWv7',
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank You. I will contact you as soon as possible');
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Something Went Wrong ');
        },
      );
  };

  return (
    <section className={classes.mainSection}>
     

      <div className={classes.firstPart}>
      <h3 className={classes.title}>Відправити нам листа</h3>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8 ">
          <label className="flex flex-col">
            <span className="text-sky-400 font-medium mb-4 ml-5"> Ваше Ім`я</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Вкажіть ваше Ім`я"
              className="py-4 px-6 text-white rounded-lg outlined-none border-sky-400 font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sky-400  font-medium mb-4 ml-5"> Ваш Імейл</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Вкажіть ваш Імейл"
              className="py-4 px-6  text-white rounded-lg outlined-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sky-400  font-medium mb-4 ml-5"> Ваше Звернення</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Текст Вашого Звернення"
              className="py-4 px-6  text-white rounded-lg outlined-none border-sky-400 font-medium"
            />
          </label>
          <button
            type="submit"
            className="py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary rounded-xl">
            {loading ? 'Відправляємо ...' : 'Відправити'}
          </button>
        </form>
      </div>
      <div className={classes.secondPart}>
        <img src={doctorApp} alt="vrach" />
        <div></div>
      </div>
    </section>
  );
};

export default Appointment;

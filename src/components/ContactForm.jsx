import { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      // Handle form submission logic here
      console.log('Form submitted with data:', formData);
      setSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className='flex spacing-x mb-2'>
        <h1 className='font-semibold font-serif text-2xl dark:text-white'>Let&apos;s get in touch!</h1>
        <h1 className='font-semibold font-serif text-2xl animate-waving-hand'>👋&nbsp;</h1>
      </div>
      <div className='flex justify-center items-center my-2 px-1'>
        <img src={'images/profile_picture.jpg'} alt={'profile_picture'} className='flex justify-center items-center py-2 object-contain h-60 w-96' />
      </div>
      <div className='mt-4'>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <label className='text-slate-900 dark:text-white font-semibold'>Your Name</label>
          <input
            className='mb-2 dark:bg-slate-400 text-gray-800 dark:text-white border rounded dark:border-slate-400 focus:outline-none focus:ring focus:border-blue-300'
            name='name'
            onChange={handleChange}
          />
          <label className='text-slate-900 dark:text-white font-semibold'>Your Email</label>
          <input
            className='mb-2 dark:bg-slate-400 text-gray-800 dark:text-white border rounded dark:border-slate-400 focus:outline-none focus:ring focus:border-blue-300'
            type='email'
            name='email'
            onChange={handleChange}
          />
          <label className='text-slate-900 dark:text-white font-semibold font-semibold'>Message</label>
          <textarea
            className='h-64 mb-2 resize-none dark:bg-slate-400 text-gray-800 dark:text-white border dark:border-slate-400 rounded focus:outline-none focus:ring focus:border-blue-300'
            name='message'
            onChange={handleChange}
          />
          <div className='grid grid-cols-10 gap-4 py-2'>
            <button
              className='col-span-1 flex justify-self-start rounded hover:bg-slate-400 hover:animate-pulse'
              onClick={() => {
                window.open('https://github.com/kichichoi102', '_blank');
              }}
            >
              <img src={'icons/github.png'} alt={'github'} />
            </button>
            <button
              className='col-span-1 flex justify-self-start rounded hover:bg-slate-400 hover:animate-pulse'
              onClick={() => {
                window.open('https://www.linkedin.com/in/kchoi92/', '_blank');
              }}
            >
              <img src={'icons/linkedin.png'} alt={'linkedin'} />
            </button>

            <button
              className='col-span-1 flex justify-self-start rounded hover:bg-slate-400 hover:animate-pulse'
              onClick={() => {
                window.open('https://calendly.com/kichichoi102/30min', '_blank');
              }}
            >
              <img src={'icons/calendar.png'} alt={'calendly'} />
            </button>
            <button
              className='col-span-1 flex justify-self-start rounded hover:bg-slate-400 hover:animate-pulse'
              onClick={() => {
                window.open('mailto:kichichoi102@gmail.com');
              }}
            >
              <img src={'icons/mail.png'} alt={'mail'} />
            </button>

            {submitted ? (
              <div className='border rounded border-slate-400 text-white font-semibold bg-emerald-400 col-span-4 col-start-8 text-center'>✓ Submitted</div>
            ) : (
              <button
                className='border rounded border-slate-400 text-l font-black hover:font-black hover:border-slate-200 col-span-4 col-start-8 bg-slate-400 bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.purple.400),theme(colors.purple.100),theme(colors.pink.300),theme(colors.orange.400),theme(colors.pink.300),theme(colors.purple.100),theme(colors.purple.400))] bg-[length:200%_auto] animate-gradient'
                type='submit'
              >
                {submitting ? (
                  <div className='flex flex-row my-1'>
                    <img src={'icons/loading.png'} className='animate-spin h-6 w-6 ml-1 mr-1' />
                    <p className='text-white font-semibold'>Progressing</p>
                  </div>
                ) : (
                  'Submit'
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

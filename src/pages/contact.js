import React from 'react';
import { navigate } from 'gatsby';
//import Recaptcha from 'react-google-recaptcha';
import Layout from '../components/layout/layout';
import { Form } from '../components/layout/form-layout.css';

const RECAPTCHA_KEY = process.env.GATSBY_APP_SITE_RECAPTCHA_KEY;
if (typeof RECAPTCHA_KEY === 'undefined') {
  throw new Error(`
  Env var GATSBY_APP_SITE_RECAPTCHA_KEY is undefined! 
  You probably forget to set it in your Netlify build environment variables. 
  Make sure to get a Recaptcha key at https://www.netlify.com/docs/form-handling/#custom-recaptcha-2-with-your-own-settings
  Note this demo is specifically for Recaptcha v2
  `);
}

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default function Contact() {
  const [state, setState] = React.useState({});
  //const recaptchaRef = React.createRef();

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    //const recaptchaValue = recaptchaRef.current.getValue();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => {
        navigate(
          form.getAttribute('action') +
            `?date=${form.elements[5].value}&time=${form.elements[6].value}`
        );
      })
      .catch(error => alert(error));
  };

  return (
    <Layout>
      <Form>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <noscript>
            <p>This form won’t work with Javascript disabled</p>
          </noscript>
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your name<span style={{ color: 'red' }}>*</span>:
              <br />
              <input required type="text" name="name" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your email<span style={{ color: 'red' }}>*</span>:
              <br />
              <input
                required
                type="email"
                name="email"
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Your phone<span style={{ color: 'red' }}>*</span>:
              <br />
              <input
                required
                type="tel"
                name="usertel"
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Schedule time to talk about your project (optional):
              <br />
              <input
                type="date"
                name="TheDate"
                min={new Date().toISOString().split('T')[0]}
                onChange={handleChange}
              />
              <input type="time" name="TheTime" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Tell Us About Your Project<span style={{ color: 'red' }}>*</span>:
              <br />
              <textarea
                placeholder="Big or small project, I am interested."
                required
                name="message"
                onChange={handleChange}
              />
            </label>
          </p>
          <br />
          <p>
            <input type="submit" value="Send" />
          </p>
        </form>
      </Form>
    </Layout>
  );
}

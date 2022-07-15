import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [country, setCountry] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [message, setMessage] = useState()
  const [responce, setResponce] = useState({ status: false, msg: "" })

  const stringValidator = (value) => {
    if (typeof value != 'string') return false

    return true
  }

  const numberValidator = (value) => {
    if (value.length != 10) return false

    return true
  }

  const emailValidator = (value) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (!value.match(mailformat)) return false

    return true
  }

  const validate = () => {
    if (name) {
      if (email) {
        if (phone) {
          if (stringValidator(name)) {
            if (emailValidator(email)) {
              if (numberValidator(phone)) {
                setResponce({ status: true, msg: 'Success' })
              } else {
                setResponce({ status: false, msg: 'Invalid phone format' })
              }
            } else {
              setResponce({ status: false, msg: 'Invalid Email format' })
            }
          } else {
            setResponce({ status: false, msg: 'Invalid Name format' })
          }
        } else {
          setResponce({ status: false, msg: 'Phone number is mandatory' })
        }
      } else {
        setResponce({ status: false, msg: 'Email ID is mandatory' })
      }
    } else {
      setResponce({ status: false, msg: 'Name is mandatory' })
    }
  }

  return (
    <div className="App bg-dark">
      <div className='w-100 h-100'>
        <div className='flex-center h-100'>
          <div className='card w-40'>
            <div className='card-header'>
              <h4 className='text-center'>Registration</h4>
            </div>
            <div className='card-body'>
              {
                responce.status ? (
                  <div class="alert alert-success" role="alert">
                    {responce.msg}
                  </div>
                ) : responce.msg ? (
                  <div class="alert alert-danger" role="alert">
                    {responce.msg}
                  </div>
                ) : (
                  <div></div>
                )
              }
              <div className='row mb-3'>
                <div className='col-sm-6'>
                  <label className='col-form-label' for="name">Name</label>
                  <input type="text" id="name" className='form-control' placeholder='Name' value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className='col-sm-6'>
                  <label className='col-form-label' for="email">Email ID</label>
                  <input type="email" id="email" className='form-control' placeholder='Email ID' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
              </div>
              <div className='row mb-3'>
                <div className='col-sm-6'>
                  <label className='col-form-label' for="mobile">Mobile Number</label>
                  <input type="number" min="0" id="mobile" className='form-control' placeholder='Mobile Number' value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                </div>
                <div className='col-sm-6'>
                  <label className='col-form-label' for="country">Country</label>
                  <input type="text" id="country" className='form-control' placeholder='Country' value={country} onChange={(e) => { setCountry(e.target.value) }} />
                </div>
              </div>
              <div className='row mb-3'>
                <div className='col-sm-6'>
                  <label className='col-form-label' for="city">City</label>
                  <input type="text" id="city" className='form-control' placeholder='City' value={city} onChange={(e) => { setCity(e.target.value) }} />
                </div>
                <div className='col-sm-6'>
                  <label className='col-form-label' for="state">State</label>
                  <input type="text" id="state" className='form-control' placeholder='State' value={state} onChange={(e) => { setState(e.target.value) }} />
                </div>
              </div>
              <div className='row mb-3'>
                <div className='col-sm-12'>
                  <label className='col-form-label' for="message">Message</label>
                  <textarea className='form-control' id="message" placeholder='Message' value={message} onChange={(e) => { setMessage(e.target.value) }} />
                </div>
              </div>
              <div className='row mb-3'>
                <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                  <input type="button" className='btn btn-primary' onClick={validate} value="Submit" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

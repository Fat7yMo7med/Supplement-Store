import { useState } from 'react'
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../../context/UserContext.jsx';

export default function RegisterPage() {
  let {setLogin } = useContext(userContext);

  let navigate = useNavigate();

  async function handleRegister(dataForm) {
    console.log("Register", dataForm);

    let respose = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', dataForm);
    if (respose.data.message == 'success') {

      localStorage.setItem('userToken', respose.data.token);
      setLogin(respose.data.token);

      navigate('/login');
    }
  }
    
  let validationSchema = Yup.object({
    name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters').max(15, 'Name must be at most 15 characters'),
    email: Yup.string().required('Email is required').email('Invalid email format'),
    password: Yup.string().required('Password is required').matches(/^[A-Z][a-z0-9]{6,8}$/, 'Password must start with an uppercase letter followed by 5 to 10 lowercase letters or digits'),
    rePassword: Yup.string().required('Repassword is required').oneOf([Yup.ref('password')], 'Passwords must match'),
    phone: Yup.string().required('Phone is required').matches(/^01[0125][0-9]{8}$/, 'Invalid Egyptian phone number')
    })

  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: ''
    },
    validationSchema: validationSchema,
    onSubmit: handleRegister
  })

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#0f172a' }}>
      <style>{`
        .btn-cyan {
          background-color: #00e5ff !important;
          font-weight: bold;
          transition: 0.3s;
        }
        .btn-cyan:hover {
          box-shadow: 0 0 10px #00e5ff;
        }
        .text-cyan {
          color: #00e5ff !important;
        }
        .alert-cyan {
          background-color: #00e5ff;
          font-weight: bold;
        }
        .form-control-cyan:focus {
          border-color: #00e5ff;
          box-shadow: 0 0 8px #00e5ff;
        }
      `}</style>

      <div className="w-100" style={{ maxWidth: 720 }}>
        <div className="card shadow-lg bg-secondary text-light border-0">
          <div className="p-5">
            <h3 className="mb-3 text-cyan text-center">Create account</h3>
            <p className="text-center" style={{color:"red"}}>Fill the form to create your account.</p>
            <form onSubmit={formik.handleSubmit}>
              <div className="col-12">
                <div className="form-floating mb-3">
                  <input className={`form-control form-control-cyan ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`} value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} id="name" placeholder="name" required />
                  <label className="form-label">Full name</label>
                  {
                      formik.touched.name && formik.errors.name ? <div className="invalid-feedback">{formik.errors.name}</div> : null
                  }
                </div>
              </div>

              <div className="col-12">
                <div className="form-floating mb-3">
                  <input type="email" className={`form-control form-control-cyan ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`} value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} id="email" placeholder="Email" required/>
                  <label className="form-label">Email</label>
                  {
                    formik.touched.email && formik.errors.email ? <div className="invalid-feedback">{formik.errors.email}</div> : null
                  }
                </div>
              </div>

              <div className="col-12">
                <div className="form-floating mb-3">
                  <input type="password" className={`form-control form-control-cyan ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`} value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} id="password" placeholder="password" required />
                  <label className="form-label">Password</label>
                  {
                    formik.touched.password && formik.errors.password ? <div className="invalid-feedback">{formik.errors.password}</div> : null
                  }
                </div>
              </div>

              <div className="col-12">
                <div className="form-floating mb-3">
                  <input type="password" className={`form-control form-control-cyan ${formik.touched.rePassword && formik.errors.rePassword ? 'is-invalid' : ''}`} value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} id="rePassword" placeholder="rePassword" required />
                  <label className="form-label">Confirm password</label>
                  {
                    formik.touched.rePassword && formik.errors.rePassword ? <div className="invalid-feedback">{formik.errors.rePassword}</div> : null
                  }
                </div>
              </div>

              <div className="col-12">
                  <div className="form-floating mb-3">
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="tel" className={`form-control ${formik.touched.phone && formik.errors.phone ? 'is-invalid' : ''}` } name="phone" value={formik.values.phone} id="phone" placeholder="phone" required/>
                    <label htmlFor="phone" className="form-label">Phone</label>
                    {
                      formik.touched.phone && formik.errors.phone ? <div className="invalid-feedback">{formik.errors.phone}</div> : null
                    }
                  </div>
              </div>

              <div className="d-grid">
                <button className="btn btn-cyan btn-lg" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

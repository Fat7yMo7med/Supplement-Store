import { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { userContext } from '../../Context/UserContext'

export default function LoginPage() {

    let {isLogin, setLogin} = useContext(userContext);

    let navigate = useNavigate();

    async function handleLogin(dataForm) {
        let respose = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', dataForm);
        console.log("Full Respones", respose);

        console.log("Certaion Response", respose.data);
        if (respose.data.message == 'success') {
            localStorage.setItem('userToken', respose.data.token);
            setLogin(respose.data.token);

        navigate('/');
        }
    }
        
    let validationSchema = Yup.object({
        email: Yup.string().required('Email is required').email('Invalid email format'),
        password: Yup.string().required('Password is required').matches(/^[A-Z][a-z0-9]{6,8}$/, 'Password must start with an uppercase letter followed by 5 to 10 lowercase letters or digits'),
        })

    let formik = useFormik({
        initialValues: {
        email: '',
        password: '',
        },
        validationSchema: validationSchema,
        onSubmit: handleLogin
    })

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#0f172a' }}>
      <style>{`
        .btn-cyan {
          background-color: #00e5ff !important;
          color: #0f172a !important;
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
          color: #0f172a;
          font-weight: bold;
        }
        .form-control-cyan:focus {
          border-color: #00e5ff;
          box-shadow: 0 0 8px #00e5ff;
          background-color: #1e293b;
          color: #ffffff;
        }
      `}</style>

      <div className="w-100" style={{ maxWidth: 720 }}>
        <div className="card shadow-lg bg-secondary text-light border-0">
          <div className="p-5">
            <h3 className="mb-3 text-cyan text-center">Login</h3>
            <p className="text-warning text-center">Welcome back — please login to your account.</p>
            <form onSubmit={formik.handleSubmit}>
              
              <div className="col-12">
                <div className="mb-3">
                  <input type="email"onChange={formik.handleChange} onBlur={formik.handleBlur} className={`form-control form-control-cyan ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}` } name="email" value={formik.values.email} id="email" placeholder="name@example.com" required/>
                  <label className="form-label">Email address</label>
                  {
                    formik.touched.email && formik.errors.email ? <div className="invalid-feedback">{formik.errors.email}</div> : null
                  }
                </div>
              </div>
              
              <div className="col-12">
                <div className="mb-3">
                  <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" className={`form-control form-control-cyan ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}` } name="password" value={formik.values.password} id="password" placeholder="Password" required/>
                  <label htmlFor="password" className="form-label">Password</label>
                  {
                  formik.touched.password && formik.errors.password ? <div className="invalid-feedback">{formik.errors.password}</div> : null
                  }
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="remember" />
                  <label className="form-check-label" htmlFor="remember">Remember me</label>
                </div>
              </div>

              <div className="col-12">
                <div className="d-grid">
                  <button className="btn btn-cyan btn-lg" type="submit">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

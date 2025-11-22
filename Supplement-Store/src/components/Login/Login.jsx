import { useState } from 'react'

export default function LoginPage(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if(!email || !password){
      setError('Please enter email and password')
      return
    }
    setError('')
    // demo behavior
    alert('Logged in (demo): ' + email)
  }

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
      <div className="w-100" style={{ maxWidth: 720 }}>
        <div className="card shadow-lg">
          <div className="p-5">
                <h3 className="mb-3">Login</h3>
                <p className="text-muted">Welcome back — please login to your account.</p>
                <form onSubmit={submit}>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" />
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="remember" />
                      <label className="form-check-label" htmlFor="remember">Remember me</label>
                    </div>
                    <a href="#" onClick={e=>e.preventDefault()}>Lost your password?</a>
                  </div>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <div className="d-grid">
                    <button className="btn btn-primary btn-lg" type="submit">Login</button>
                  </div>
                </form>
                <hr />
                <div className="text-center">
                  <small className="text-muted">Or login with</small>
                  <div className="mt-2" style={{gap:8, display:'flex'}}>
                    <button className="btn btn-outline-secondary btn-social btn-fb" type="button">
                      <i className="fab fa-facebook-f me-2" aria-hidden="true"></i>Facebook
                    </button>
                    <button className="btn btn-outline-secondary btn-social btn-gg" type="button">
                      <i className="fab fa-google me-2" aria-hidden="true"></i>Google
                    </button>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

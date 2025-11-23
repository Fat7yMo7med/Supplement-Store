import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please enter email and password')
      return
    }
    setError('')
    // demo behavior
    alert('Logged in (demo): ' + email)
  }

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
            <form onSubmit={submit}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control form-control-cyan bg-dark text-light"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control form-control-cyan bg-dark text-light"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="remember" />
                  <label className="form-check-label" htmlFor="remember">Remember me</label>
                </div>
              </div>

              {error && <div className="alert alert-cyan">{error}</div>}

              <div className="d-grid">
                <button className="btn btn-cyan btn-lg" type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

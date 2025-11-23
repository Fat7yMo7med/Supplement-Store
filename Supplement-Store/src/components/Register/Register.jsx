import { useState } from 'react'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !password || !confirm) {
      setError('Please fill all fields')
      return
    }
    if (password !== confirm) {
      setError('Passwords do not match')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }
    setError('')
    alert('Registered (demo): ' + email)
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
            <h3 className="mb-3 text-cyan text-center">Create account</h3>
            <p className="text-center" style={{color:"red"}}>Fill the form to create your account.</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full name</label>
                <input
                  className="form-control form-control-cyan bg-dark text-light"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
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
              <div className="mb-3">
                <label className="form-label">Confirm password</label>
                <input
                  type="password"
                  className="form-control form-control-cyan bg-dark text-light"
                  value={confirm}
                  onChange={e => setConfirm(e.target.value)}
                  placeholder="Confirm password"
                />
              </div>

              {error && <div className="alert alert-cyan">{error}</div>}

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

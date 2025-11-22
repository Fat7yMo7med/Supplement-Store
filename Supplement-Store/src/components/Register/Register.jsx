import { useState } from 'react'

export default function RegisterPage(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name || !email || !password || !confirm){
      setError('Please fill all fields')
      return
    }
    if(password !== confirm){
      setError('Passwords do not match')
      return
    }
    if(password.length < 6){
      setError('Password must be at least 6 characters')
      return
    }
    setError('')
    alert('Registered (demo): ' + email)
  }

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
      <div className="w-100" style={{ maxWidth: 720 }}>
        <div className="card shadow-lg">
          <div className="p-5">
            <h3 className="mb-3">Create account</h3>
            <p className="text-muted">Fill the form to create your account.</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full name</label>
                <input className="form-control" value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm password</label>
                <input type="password" className="form-control" value={confirm} onChange={e=>setConfirm(e.target.value)} placeholder="Confirm password" />
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="d-grid">
                <button className="btn btn-success btn-lg" type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

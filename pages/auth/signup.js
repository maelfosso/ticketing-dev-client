import { useState } from 'react';
import axios from 'axios';
import useRequest from '../../hooks/use-request';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post('/api/users/signup', {
        email, password
      });

      console.log(response.data);
    } catch (err) {
      setErrors(err.response.data.errors);
    }

  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input value={email} onChange={e => setEmail(e.target.value)} className="form-control" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" />
      </div>
      
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
}
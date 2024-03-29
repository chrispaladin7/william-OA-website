import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import './SignUpForm.css'
import {
  MDBCard,
  MDBCardText,
  MDBCardHeader,
  MDBBtn
} from 'mdb-react-ui-kit';
export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { name, email, password } = this.state;
      const formData = { name, email, password };
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
      this.setState({
        error: 'Registered Successfully',
        name: '',      // Clear name
        email: '',     // Clear email
        password: '',  // Clear password
        confirm: '',   // Clear confirm
      });
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <>
      <div>
            <div className="form-container">
              <form autoComplete="on" onSubmit={this.handleSubmit}>
                <MDBCardText>Name</MDBCardText>
                <input  className="input-field" placeholder='Name....' type="text" name="name" value={this.state.name} onChange={this.handleChange} required class="form-control"/>
                <MDBCardText>Email</MDBCardText>
                <input  className="input-field" placeholder='Email....' type="email" name="email" value={this.state.email} onChange={this.handleChange} required class="form-control"/>
                <MDBCardText>Password</MDBCardText>
                <input  className="input-field" placeholder='Password....' type="password" name="password" value={this.state.password} onChange={this.handleChange} required class="form-control"/>
                <MDBCardText>Confirm</MDBCardText>
                <input  className="input-field" placeholder='Confirm Password....' type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required class="form-control"/>
                <br />
                <MDBBtn type="submit" disabled={disable}>SIGN UP</MDBBtn>
              </form>
              <br />
              <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        
      </div>
      </>
    );
  }
}


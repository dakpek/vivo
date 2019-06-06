import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import './passwordForget.css'



class PasswordForgetBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        error: null,
    }
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
        <div className="passwordForgetContainer">
            <form onSubmit={this.onSubmit}>
                <input
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="email"
                />
                <button disabled={isInvalid} type="submit">
                Reset My Password
                </button>

                {error && <p>{error.message}</p>}
            </form>
        </div>
    );
  }
}

const PasswordForget = withFirebase(PasswordForgetBase);
export default PasswordForget;
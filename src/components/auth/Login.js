import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import "./login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div class="container pt-3">
        <div class="row justify-content-sm-center">
          <div className="col-md-6 col-sm-10 m-auto">
            <div className="card border-primary text-center">
              <div className="card-header text-center">
                <h1>GDEVS/LOGIN</h1>
              </div>

              <div className="card-body">
                <form onSubmit={this.onSubmit}>
                  <div className="login_input">
                    <TextFieldGroup
                      placeholder="Email Address"
                      name="email"
                      type="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      error={errors.email}
                    />
                  </div>

                  <div className="login_input">
                    <TextFieldGroup
                      placeholder="Password"
                      name="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      error={errors.password}
                    />
                  </div>

                  <div className="login_input">
                    <div className="spacing" />
                    <button
                      className="btn btn-lg btn-block btn-primary"
                      type="submit"
                    >
                      LOG IN
                    </button>
                  </div>

                  <div className="login_input">
                    <div className="spacing" />
                    <label className="checkbox float-left row">
                      <input type="checkbox" value="remember-me" />
                      &nbsp; Remember me
                    </label>
                    <a href="/" className="float-right">
                      Need help?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);

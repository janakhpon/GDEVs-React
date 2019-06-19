import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import "./login.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
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
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div class="container pt-3">
        <div class="row justify-content-sm-center">
          <div className="col-md-6 col-sm-10 m-auto">
            <div className="card border-primary text-center">
              <div className="card-header text-center">
                <h1>GDEVS/SIGN UP</h1>
              </div>

              <div className="card-body">
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="login_input1">
                    <TextFieldGroup
                      placeholder="Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                      error={errors.name}
                    />
                  </div>

                  <div className="login_input1">
                    <TextFieldGroup
                      placeholder="Email"
                      name="email"
                      type="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      error={errors.email}
                    />
                  </div>

                  <div className="login_input1">
                    <TextFieldGroup
                      placeholder="Password"
                      name="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      error={errors.password}
                    />
                  </div>

                  <div className="login_input1">
                    <TextFieldGroup
                      placeholder="Confirm Password"
                      name="password2"
                      type="password"
                      value={this.state.password2}
                      onChange={this.onChange}
                      error={errors.password2}
                    />
                  </div>
                  <div className="spacingxs"></div>
                    <button
                      className="btn btn-lg btn-block btn-primary"
                      type="submit"
                    >
                      SIGN UP
                    </button>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));

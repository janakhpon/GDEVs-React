import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import "./landing.css";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="container container-land pt-3">
        <div className="row justify-content-sm-center">
          <div className="col-md-12 col-sm-12 m-auto">
            <div className="card card-land border-dark">
              <div className="card-body">
                <div className="text-center gdev-container">
                  <h1 className="gdev-land animate-head">
                    GDEVS:The Developer Community
                  </h1>
                  <div className="spacing" />
                  <div className="spacing" />
                  <hr />
                </div>
                <div className="spacing" />
                <div className="spacing" />
                <div className="row">
                  <div className="col-md-3" />
                  <div className="col-md-6">
                    <p className="lead dev-text animate-one">
                      &lowast; Articles & tutorials concern with latest
                      technologies, frameworks, programming language
                    </p>
                    <p className="lead dev-text animate-two">
                      &lowast; Open issues and get the right answer for your
                      errors,projects or problems
                    </p>
                    <p className="lead dev-text animate-three">
                      &lowast; Join developement team with senior developers
                      in your area
                    </p>
                    <p className="lead dev-text animate-four">
                      &lowast; Get better by keeping yourself up to date
                      with Dev Community
                    </p>
                    <p className="lead dev-text animate-five">
                      &lowast; Developer job positions & posts from all over
                      the world
                    </p>
                    <p className="lead dev-text animate-six">
                      &lowast; Upload your project and get contribution
                      point
                    </p>
                    <p className="lead dev-text animate-seven">
                      &lowast; Great opportunities for future career by
                      particate in activites
                    </p>
                    <p className="lead dev-text animate-nine">
                      &lowast; Auto Generated profile will describe your
                      skills more
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);

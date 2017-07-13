import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { fetchAll } from "../../actions/companies";

class CompanyList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAll());
  }

  render() {
    return (
      <div className="container">
        <h2>Companies</h2>
        <Link to="/companies/add">Add Company</Link>

        {this.props.companies.map(x =>
          <div>
            Company: {x.name}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    companies: state.companies
  };
};

export default connect(mapStateToProps)(CompanyList);

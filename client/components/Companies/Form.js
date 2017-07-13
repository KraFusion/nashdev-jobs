import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";

import { addCompany } from "../../actions/companies";

class CompanyForm extends Component {
  state = {
    name: null,
    phone: null,
    location: null,
    size: null
  };

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    if (
      this.state.name &&
      this.state.phone &&
      this.state.location &&
      this.state.size
    ) {
      this.props.dispatch(addCompany(this.state));
    }
  }

  render() {
    return (
      <div>
        <h2>Add Company</h2>
        <Link to="/companies">Back to Companies</Link>
        <form>
          <div>
            <label htmlFor="">Name: </label>
            <input type="text" name="name" onChange={this.onChange} />
          </div>
          <div>
            <label htmlFor="">Phone: </label>
            <input type="text" name="phone" onChange={this.onChange} />
          </div>
          <div>
            <label htmlFor="">Location: </label>
            <input type="text" name="location" onChange={this.onChange} />
          </div>
          <div>
            <label htmlFor="">size: </label>
            <input type="text" name="size" onChange={this.onChange} />
          </div>

          <input type="submit" value="Add" onClick={this.onSubmit} />
        </form>
      </div>
    );
  }
}

export default connect()(CompanyForm);

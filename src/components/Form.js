import React, { Component } from 'react';
import '../css/index.css';

class Form extends Component {
    createForm(e) {
        e.preventDefault();
        var form =  {
            firstName: this.fname.value,
            LastName: this.lname.value,
            email: this.email.value,
            phoneNumber: this.phoneNumber.value,
            password: this.password.value,
            cPassword: this.cPassword.value
        };
        this.props.addForm(form);
        this.newForm.reset();
    } 
  
  render() {
    return (
      <div>
        <fieldset className="field">
            <legend>Sign up</legend>
                <form ref={(input) => this.newForm = input} className="form" name="myForm" onSubmit={(e) => this.creatForm(e)}>
                    <div className="row">
                        <div className="col-left">
                            <label htmlFor="lastname">First name: </label>
                            <input ref={(input) => this.fname = input } type="text" required className="col-left" name="fName" placeholder="FirstName" />
                            
                        </div>
                        <div className="col-right">
                            <label htmlFor="lastname">last name: </label>
                            <input ref={(input) => this.lname = input } type="text" required className="col-right" id="lName" placeholder="LastName" />
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-left">
                            <label htmlFor="email">Email: </label>
                            <input ref={(input) => this.email = input } type="email" default required className="col-left" id="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" />
                            
                        </div>
                        <div className="col-right">
                            <label htmlFor="phone">Phone number: </label>
                            <input ref={(input) => this.phoneNumber = input } type="tel" className="col-right" id="phone" placeholder="phone number" pattern="[0-9]{11}" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-left">
                            <label htmlFor="password">Password: </label>
                            <input ref={(input) => this.password = input } type="password" required className="col-left" id="password" placeholder="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
                        </div>
                        <div className="col-right">
                            <label htmlFor="confirmPassword">Confirm Password: </label>
                            <input ref={(input) => this.cPassword = input } type="password" required className="col-right" id="cpassword" placeholder="confirm password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
                        </div>
                    </div>
                    <center className="row">
                        <input type="submit" defaultValue="submit" id="button" />
                    </center>
                </form>
        </fieldset>
      </div>
    );
  }
}

export default Form;
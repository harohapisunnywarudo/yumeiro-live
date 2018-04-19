import React, { Component } from 'react';

const InputUsername = (props) => {
   return(
      <input
         type="text"
         name="username"
         value={props.value}
         onChange={props.onChange}/>
   );
}

const InputEmail = (props) => {
   return(
      <span>
         <input
            type="text"
            name="email"
            value={props.value}
            onChange={props.onChange}/>
         <br/>
      </span>
   );
}

const InputPassword = (props) => {
   return(
      <span>
         <input
            type="text"
            name="password"
            value={props.value}
            onChange={props.onChange}/>  
         <br/> 
      </span>
   );
}

const LoginForm = (props) => {
   return(
      <form onSubmit={props.onSubmit}>
         Email:
         <InputEmail
            value={props.email}
            onChange={props.onChange}
         />
         Password:
         <InputPassword 
            value={props.password}
            onChange={props.onChange}
         />
         <input
            type="submit"
            value="Login"
         />
      </form>
   );

}

class YmlLogin extends Component {
   constructor(props) {
      super(props);
      this.state = {
         username: '',
         email: '',
         password: '',
      };
   }

   handleChange = (event) => {
      const target = event.target;
      const value =
         target.type === 'checkbox'? target.checked : target.value;
      const name = event.target.name;

      this.setState({
         [name]: value,
      });
   }

   handleSubmit = (event) => {
      console.log('submitted');

   }

   render() {
      return(
         <LoginForm
            onSubmit={this.handleSubmit}
            email={this.state.email}
            password={this.state.password}
            onChange={this.handleChange}
         />
      );
   }
}

export default YmlLogin;
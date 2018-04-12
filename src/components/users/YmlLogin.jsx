import React, { Component } from 'react';

class YmlLogin extends Component {
   constructor(props) {
      super(props);
      this.state = {
         username: '',
         email: '',
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
         <form onSubmit={this.handleSubmit}>
            Username:
            <br/>
            <input
               type="text"
               name="username"
               value={this.state.username}
               onChange={this.handleChange}
               placeholder='yoshino123'/>
            <br/>
            Email:
            <br/>
            <input
               type="text"
               name="email"
               value={this.state.email}
               onChange={this.handleChange}
               placeholder='example@email.com'/>
         </form>
      );
   }
}

export default YmlLogin;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import { Redirect } from 'react-router-dom';

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        };

        this.responseFacebook = this.responseFacebook.bind(this);
    }

    responseFacebook(response) {
        const {accessToken} = response;

        if(accessToken){
            localStorage.setItem('token', accessToken);
            this.setState({redirect:true});
        }else{
            localStorage.removeItem('token');
        }
    }

    render() {
        const { redirect } = this.state;

        if (redirect) return <Redirect to='/'/>;

        return (
          <div>
            <center>
              <FacebookLogin
                 appId="1826111657405997"
                 autoLoad={false}
                 fields="name,email,picture"
                 callback={this.responseFacebook} />
            </center>
          </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps)(LoginForm);

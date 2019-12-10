import React from 'react';
import userService from '../_services/user.service'

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false,
            isInvalid:false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    //form submit
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            userService.getUsers().then(data=>{ 
                let user=this.validateUser(data.results,username,password)               
                if(user){
                   localStorage.setItem('user',user);    
                   this.props.history.push('/planetList');                
                }else{
                    this.setState({isInvalid:true})
                }
            });           
        }
    }
    //validate user function
    validateUser(userlist,userName,pswd){   
    return userlist.find(user=>{return user.name===userName && user.birth_year===pswd})
    }


    render() {
        const { username, password, submitted ,isInvalid} = this.state;
        return (
            <div className="wrapper">
               <div id="formContent">
                <h2 className="clrRed">Login</h2>
                <hr/>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        
                        <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        
                        <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className={' has-error'}>{isInvalid?"Invalid User":""}</div>
                    <div className="form-group">
                        <button className="btn btn-theme-primary width100">Login</button>                        
                        
                    </div>
                </form>
                </div>
            </div>
        );
    }
}


export default LoginPage;
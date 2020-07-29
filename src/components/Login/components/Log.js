import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useDispatch} from 'react-redux'
import { FormControl, Input, Typography as Text, Button } from '@material-ui/core';
import {loginUser} from '../../../store/actions/actions'
import { TextField } from '@material-ui/core';

export default ({comparePassword})=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const [userInput, setuserInput] = useState({email: '', password: ''});


// handling user input 
const onChangeHandler = (e)=>{
    setuserInput({...userInput,
    [e.target.name]: e.target.value
    })
}
// handling a submission 
const onSubmitHandler =(e)=>{
    e.preventDefault();
   dispatch(loginUser(userInput, history))
// comparePassword(userInput)
}

 let [errors, setErrors] = useState(userInput);


    return(
        <div className="form-container">
            <form className="form" onSubmit={onSubmitHandler}>
                <div className="field-container">
                    <TextField
                        className="email"
                        type="email"
                        name="email"
                        id="name"
                        label="email"
                        onChange={onChangeHandler}
                    />
                    {errors.email.length ? <p>{errors.email}</p> : null}
                </div>

                <div className="field-container">
                    <TextField
                        className="password"
                        type="password"
                        name="password"
                        id="name"
                        label="password"
                        onChange={onChangeHandler}
                    />
                    {errors.password.length ? <p>{errors.password}</p> : null}
                </div>
                <Button type="submit" variant="contained" color="secondary">
                    Login
				</Button>
            </form>

        </div>

        // <div style={{display: 'flex',
        //  justifyContent: 'center',
        //   marginTop: '15%',
        //    marginLeft: '38%',
        //    borderTop: 'dashed 1px red',
        //    borderBottom: 'dashed 1px blue',
        //    borderRight: 'dashed 1px black',
        //    borderLeft: 'dashed 1px black',
        //    width: "24%",
        //    boxShadow: '10px 10px 8px #888888'
        //    } }>
        
        
              
        //     <FormControl >
        //     <Text>Don't have an Acount? <br/>
        //    <span style={{marginLeft: '30px'}}>
        //    <Link style={{textDecoration: 'none'}} to='/'>
        //    <Button color="primary" variant="outlined" size="medium">Register</Button></Link>
        //     </span>
        //    </Text>
          
        //     <br/>
        //         <form>
        //         <Input color='secondary' placeholder='email' type='text' name='email' id='email' value={userInput.email} onChange={onChangeHandler}/><br/>
        //         <Input placeholder='password' type='password' name='password' id='password' value={userInput.password} onChange={onChangeHandler}/>
        //         <br/>
        //         <div style={{marginLeft: '27%', marginTop: '1%'}}><Button onClick={(e)=>{onSubmitHandler(e)}} color="secondary" size="large" >Login</Button></div>
        //         </form>
        //     </FormControl>
           
        // </div>
        
    )
}
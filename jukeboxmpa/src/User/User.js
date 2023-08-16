import React from "react";
import { TextField,Button, Grid } from "@mui/material";
import './user.scss';
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const User = () => {
    return (
        <div className="user_page">
            <h1>Register/Login</h1>
            <div className="content">
                <Register/>
                <Login/>
            </div>
        </div>
    )
}


const Register = () => {

    const { handleSubmit, control, reset } = useForm({
		defaultValues: {}
	});

    const RegisterUser = (user) => {
        console.log(user)
        fetch('/api/users', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name: user.Name ,
                Password: user.Password,
                Email: user.Email ,
            })
        })
    }

    return (
        <div className="login_register">
            <form onSubmit={handleSubmit(form => RegisterUser(form))} >
				<Grid container>
					<Grid container spacing={3} >
						<Grid item xs={3}>
							<h3>Name</h3>
						</Grid>
						<Grid item xs= {3}>
							<Controller
								name={"Name"}
								control={control}
								render={({ field }) =>  <TextField  {...field} />} />
						</Grid>
					</Grid>

					<Grid container spacing={3} >
						<Grid item xs={3}>
							<h3>{"Password"}</h3>
						</Grid>
						<Grid item xs={3}>
							<Controller
								name={"Password"}
								control={control}
								render={({ field }) =>  <TextField {...field} />} />
						</Grid>
					</Grid>

					<Grid container spacing={3}>
						<Grid item xs={3}>
							<h3>Email</h3>
						</Grid>
						<Grid item xs={3}>
							<Controller
								name={"Email"}
								control={control}
								render={({ field }) =>  <TextField {...field} />} />
						</Grid>
					</Grid>
					<Button  type='submit' variant="contained" color ="primary" className="submit">Register</Button>
				</Grid>
			</form>
         </div>
    )
}


const Login = () => {
    const { handleSubmit, control, reset } = useForm({
		defaultValues: {}
	});

	const navigate = useNavigate();

    const LoginUser = (user) => {
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Name: user.Name, 
                Password: user.Password }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    console.log("SUCCESS")
					// navigate("/home");
					GetDataUser()
                } else {
                    console.log("Failed")
                }
            })
            .catch((error) => {
                console.error('Error during login:', error);
            });
    }

	const GetDataUser = () => {
		fetch("/api/get/user").then (
			response => response.json()
			
		  ).then((data) => console.log(data));
	}

    return (
        <div className="login_register">
             <form onSubmit={handleSubmit(form => LoginUser(form))} >
				<Grid container>
					<Grid container spacing={3} >
						<Grid item xs={3}>
							<h3>Name</h3>
						</Grid>
						<Grid item xs= {3}>
							<Controller
								name={"Name"}
								control={control}
								render={({ field }) =>  <TextField  {...field} />} />
						</Grid>
					</Grid>

					<Grid container spacing={3} >
						<Grid item xs={3}>
							<h3>{"Password"}</h3>
						</Grid>
						<Grid item xs={3}>
							<Controller
								name={"Password"}
								control={control}
								render={({ field }) =>  <TextField {...field} />} />
						</Grid>
					</Grid>
					<Button  type='submit' variant="contained" color ="primary" className="submit">Login</Button>
				</Grid>
			</form>
        </div>
    )
}



export default User
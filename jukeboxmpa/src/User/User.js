import React from "react";
import { TextField,Button, Grid } from "@mui/material";
import './user.scss';
import { useForm, Controller } from "react-hook-form";





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



    return (
        <div className="login_register">
            <form onSubmit={handleSubmit(form => console.log(form))} >
				<Grid container>
					<Grid container spacing={3} >
						<Grid item xs={3}>
							<h3>Username</h3>
						</Grid>
						<Grid item xs= {3}>
							<Controller
								name={"Username"}
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

    return (
        <div className="login_register">
             <form onSubmit={handleSubmit(form => console.log(form))} >
				<Grid container>
					<Grid container spacing={3} >
						<Grid item xs={3}>
							<h3>Username</h3>
						</Grid>
						<Grid item xs= {3}>
							<Controller
								name={"Username"}
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
import React, { useEffect, useState } from "react";
import images from "../../assets";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";

export const SignIn = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { register, handleSubmit, formState,reset } = form;
  const { errors,isSubmitSuccessful } = formState;
  const onSubmit = (data) => {
    console.log(data);
  };
  const [showPassword, setShowPassword] = useState(false);
  useEffect(()=>{
    if(isSubmitSuccessful) {
      reset();
    }
  },[isSubmitSuccessful,reset])
  return (
    <Grid  container flexWrap="nowrap">
      <Grid m={{xs:"2rem",md:"3rem"}}  item xs={12} md={6}>
        <Box className="logo" sx={{ margin: "0 0 50px" }}>
          <img width={100} src={images.athar} alt="images_signIn" />
        </Box>

        <Box>
          <Typography variant="subtitle2" className="subtitle">
            Welcome again!
          </Typography>
          <Typography variant="h4">Sign in</Typography>
          <Typography my={1} variant="body2" className="p2">
            Please enter your information to open your account
          </Typography>
          <Typography variant="body1" className="p1">
            Don't have an account?{" "}
            <Link to={"/auth/Register"}  className="span-component">
              Register a new account
            </Link>
          </Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)} noValidate aria-live="assertive">
          <Stack m={"3.5rem 0 0"} spacing={2.9} minWidth={300} maxWidth={600}>
            <TextField
              autoFocus={true}
              placeholder="Enter your e-mail"
              label="Email"
              type="email"
              fullWidth
              {...register("email", {
                required: { value: true, message: "Email is required" },
              })}
              error={errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              placeholder="Enter your password"
              label="Password"
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: { value: true, message: "Password is required" },
              })}
              error={errors.password}
              helperText={errors.password?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              />
              <span >
                <Link to="/auth/ForgotPass" className="span-component"> forgot your password</Link>
              </span>
              
            <Button
              type="submit"
              variant="contained"
              sx={{
                padding: "1rem",
                backgroundColor: "var(--main-color) !important",
              }}
            >
              Sign in
            </Button>
          </Stack>
        </form>
        <Box my={3} display="flex" alignItems="center" justifyContent="flex-start">
          <Typography mx={3} variant="h6" className="p2">Or continue with</Typography>
          <Stack direction={"row"} spacing={3}>
            <img className="clickable" src={images.Facebook} alt="facebook_image" />
            <img width="41.457px" height="41.457px" src={images.github} alt="github_image" />
            <img src={images.google} alt="google_image" />
          </Stack>
        </Box>
      </Grid>
      <Grid
        item
        md={6}
        className="cover"
        sx={{
          display: { xs: "none", md: "flex" },
          backgroundImage: `url(${images.reglmg})`,
          backgroundSize: "600px",
        }}
      ></Grid>
    </Grid>
  );
};

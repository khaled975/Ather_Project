import axios from '../../api/axios'
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import images from "../../assets";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export const Register = () => {
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      rePassword: "",
      terms_and_conditions:""
    },
  });
  const { register, handleSubmit, formState, reset, watch } = form;
  const { errors, isSubmitSuccessful } = formState;
  const [ischeckbox, setCheckbox] = useState(false)
  const noCheckbox=()=>{
    setCheckbox(false)
  }
  const onSubmit = async (data) => {
    const { email, fullName, password, rePassword,terms_and_conditions } = data;
    noCheckbox()
    console.log(terms_and_conditions);
    try {
      const response = await axios.post(
        "/api/register",
        JSON.stringify({
          full_name: fullName,
          email:email,
          password:password,
          password_confirmation: rePassword,
          terms_and_conditions: terms_and_conditions,
        }),
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

   // Response from the server
    } catch (error) {
      console.error("this is the error" + error); // Handle errors
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  let password = watch("password");
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      noCheckbox()
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <section className="register-sec">
        <Grid container flexWrap="nowrap">
          <Grid m={{ xs: "1rem", md: "3rem" }} item xs={12} md={6}>
            <Container>
              <Box className="logo" sx={{ marginBottom: "60px" }}>
                <img src={images.athar} alt="img" width={100} />
              </Box>
              <Box sx={{ marginBottom: "32px" }}>
                <Typography variant="subtitle2" className="subtitle">
                  Welcome
                </Typography>
                <Typography variant="h4" mb={2}>
                  Register a new account
                </Typography>
                <Typography variant="body2" className="p2">
                  Please enter your information to create your account
                </Typography>
                <Typography variant="body1" className="p1">
                  You have an account?
                  <Link to="/auth/SignIn">
                    <span className="span-component"> Sign In</span>
                  </Link>
                </Typography>
              </Box>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Stack minWidth={300} maxWidth={700}>
                  <TextField
                    label="Full name "
                    placeholder="Enter your name"
                    size="medium"
                    sx={{ marginBottom: "30px" }}
                    {...register("fullName", {
                      required: "Please enter your name",
                    })}
                    error={errors.fullName}
                    helperText={errors.fullName?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end"></InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    label="E-mail"
                    placeholder="Enter your e-mail"
                    size="medium"
                    sx={{ marginBottom: "30px" }}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^(?=.{3,20}$)(?=[a-zA-Z])((?=.*@(yahoo\.com|gmail\.com))[a-zA-Z0-9_]+)@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message:
                          "Invalid email must start with letter or email from prohibited domain.",
                      },
                    })}
                    error={errors.email}
                    helperText={errors.email?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end"></InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    label="Password"
                    placeholder="Enter your password"
                    size="medium"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    sx={{ marginBottom: "30px" }}
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                        message:
                          "password must be at least 8 characters long, containing at least one lowercase letter, and one digit.",
                      },
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
                  <TextField
                    label="Re-Password"
                    placeholder="Enter your password again here"
                    size="medium"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    sx={{ marginBottom: "30px" }}
                    {...register("rePassword", {
                      required: "Re-Password is required",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                    error={errors.rePassword}
                    helperText={errors.rePassword?.message}
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
                  <FormControlLabel
                    control={<Checkbox {...register("terms_and_conditions",{required:"this field is required"})} onChange={()=>setCheckbox(!ischeckbox)} checked={ischeckbox}/>}
                    label="I agree to the terms and conditions"
                    
                  />
                  <Typography variant="body1" className="p1">
                    By registering with us, you agree to this
                    <span className="span-component">
                      Terms and conditions and privacy policy
                    </span>
                  </Typography>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      margin: "15px 0",
                      padding: "1rem",
                      backgroundColor: "var(--main-color) !important",
                    }}
                  >
                    Create an account
                  </Button>
                </Stack>
              </form>
              <Box display="flex" alignItems="center" gap={2}>
                <Typography variant="h6">Or continue with</Typography>
                <Box display="flex" gap={2}>
                  <img
                    src={images.Facebook}
                    alt="faceBook"
                    width={30}
                    className="clickable"
                  />
                  <img
                    src={images.github}
                    alt="apple"
                    width={30}
                    className="clickable"
                  />
                  <img
                    src={images.google}
                    alt="google"
                    width={30}
                    className="clickable"
                  />
                </Box>
              </Box>
            </Container>
          </Grid>
          <Grid
            item
            sx={{
              display: { xs: "none", md: "flex" },
              backgroundImage: `url(${images.reglmg})`,
              backgroundSize: "600px",
            }}
            md={6}
            className="cover"
            minHeight={200}
          ></Grid>
        </Grid>
      </section>
    </>
  );
};

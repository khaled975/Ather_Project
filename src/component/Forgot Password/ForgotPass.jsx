import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import images from '../../assets'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
export const ForgotPass = () => {
  const form = useForm({
    defaultValues: {
      checkEmail: "",
    },
  });
  const { register, handleSubmit, formState,reset } = form;
  const { errors,isSubmitSuccessful } = formState;
  const onSubmit = (data) => {
    console.log(data);
  };
  useEffect(()=>{
    if(isSubmitSuccessful) {
      reset();
    }
  },[isSubmitSuccessful,reset])
  return (
    <>
      <section >
        <Grid  container wrap="nowrap">
          <Grid m={{ xs: "1rem", md: "3rem" }} item xs={12} md={6}>
            <Container >
              <Box className="logo" sx={{ marginBottom: "100px" }}>
                <img src={images.athar} alt="img" width={100} />
              </Box>
              <Box sx={{ marginBottom: "32px" }}>
                <Typography variant="subtitle2" className="subtitle">
                  Welcome
                </Typography>
                <Typography variant="h4" mb={2}>
                  Forgot your password
                </Typography>
                <Typography className="p1" variant="body1">
                  Please enter your information to recover your account
                </Typography>
                <Typography className="p1" variant="body1">
                  Back to
                  <Link to="/auth/signIn">
                    <span className="span-component"> Sign in</span>
                  </Link>
                </Typography>
              </Box>
              <form  onSubmit={handleSubmit(onSubmit)} noValidate >
              <Stack minWidth={300} maxWidth={600}>
                <TextField
                {...register("checkEmail",{
                  required:"Email is required"

                })}
                error={errors.checkEmail}
                helperText={errors.checkEmail?.message}
                  label="E-mail"
                  placeholder="Enter your e-mail"
                  size="medium"
                  fullWidth
                  sx={{ marginBottom: "30px" }}
                />
                <Button
                  size="large"
                  fullWidth
                  className="default-btn"
                  variant="contained"
                  type="submit"
                >
                  Send
                </Button>
              </Stack>
              </form>
            </Container>
          </Grid>

          <Grid
          item
          md={6}
          className="cover"
          sx={{
            display: { xs: "none", md: "flex" },
            backgroundImage: `url(${images.Lock})`,
            backgroundSize: "600px",
          }}
          ></Grid>
        </Grid>
      </section>
    </>
  );
};

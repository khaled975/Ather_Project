import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "../../assets/athar.png";
import "./NewPassword.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";


export const NewPassword = () => {
  const form = useForm({
    defaultValues: {
      NewPassword: "",
      reNewPassword: "",
    },
  });
  const { register, handleSubmit, formState, reset, watch } = form;
  const { errors, isSubmitSuccessful } = formState;
  const onSubmit = (data) => {
    console.log(data);
  };
  const [showPassword, setShowPassword] = useState(false);
  let password=watch("NewPassword")
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <>
      <section className="newPass-sec">
        <Grid flexWrap="nowrap" container gap={2}>
          <Grid m={{ xs: "1rem", md: "3rem" }} item xs={12} md={6}>
            <Container>
              <Box className="logo" sx={{ marginBottom: "60px" }}>
                <img src={logo} alt="img" width={100} />
              </Box>
              <Box sx={{ marginBottom: "32px" }}>
                <Typography variant="subtitle2" className="subtitle">
                  Welcome
                </Typography>
                <Typography variant="h4" mb={2}>
                  New password
                </Typography>
                <Typography variant="body2" className="p2">
                  Please enter your new password, remember it
                </Typography>
              </Box>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Stack minWidth={300} maxWidth={600}>
              <TextField
                    label="New password"
                    placeholder="Enter your new password"
                    size="medium"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    sx={{ marginBottom: "30px" }}
                    {...register("NewPassword", {
                      required: "Password is required",
                      pattern: {
                        value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                        message:
                          "password must be at least 8 characters long, containing at least one lowercase letter, one uppercase letter, and one digit.",
                      },
                    })}
                    error={errors.NewPassword}
                    helperText={errors.NewPassword?.message}
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
                    label="Confirm new password"
                    placeholder="Enter your password again here"
                    size="medium"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    sx={{ marginBottom: "30px" }}
                    {...register('reNewPassword', {
                      required: "Re-Password is required",
                      validate: (value) => value === password || 'Passwords do not match',
                    })}
                    error={errors.reNewPassword}
                    helperText={errors.reNewPassword?.message}
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
                <Button
                  size="large"
                  className="default-btn"
                  variant="contained"
                  type="submit"
                >
                  Save
                </Button>
              </Stack>
              </form>
            </Container>
          </Grid>
          <Grid
            item
            className="cover"
            sx={{ display: { xs: "none", md: "flex" } }}
            md={6}
          ></Grid>
        </Grid>
      </section>
    </>
  );
};

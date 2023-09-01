import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import UpdateIcon from "@mui/icons-material/Update";
import React, { useEffect } from "react";
import images from "../../assets";
import { Link } from "react-router-dom";
import "./GetCode.css";
import { useForm } from "react-hook-form";
export const GetCode = () => {
  
  const form = useForm();
  const { register, handleSubmit, setValue, formState, reset } =
    form;
  const {errors, isSubmitSuccessful } = formState;
  const handleInputChange = (e, index) => {
    const value = e.target.value;
    // setValue(`otp${index}`, value);
    if (value && value.length === 1) {
      focusNextInput(index);
    } else if (value === "") {
      focusPrevInput(index);
    }
  };

  const focusNextInput = (index) => {
    const nextIndex = index + 1;
    if (nextIndex < 6) {
      const nextInput = document.querySelector(`#otp${nextIndex}`);
      nextInput.focus();
    }
  };

  const focusPrevInput = (index) => {
    const prevIndex = index - 1;
    if (prevIndex >= 0) {
      const prevInput = document.querySelector(`#otp${prevIndex}`);
      prevInput.focus();
    }
  };

  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("text");
    const otpArray = pastedData.slice(0, 6).split("");
    otpArray.forEach((value, index) => {
      if (value.match(/[0-9]/)) {
        setValue(`otp${index}`, value);
      }
    });
    //prevent the default behavior
    e.preventDefault();
  };

  const onSubmit = (data) => {
    console.log(data); // Data contains all OTP values
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <>
      <section className="activate-sec">
        <Grid container wrap="nowrap">
          <Grid m={{ xs: "0px", md: "3rem" }} p={{ xs: "10px", md: "0px" }} item xs={12} md={6}>
            <Container >
              <Box className="logo" sx={{ marginBottom: "80px" }}>
                <img src={images.athar} alt="img" width={100} />
              </Box>
              <Box sx={{ marginBottom: "32px" }}>
                <Typography variant="subtitle2" className="subtitle">
                  Welcome
                </Typography>
                <Typography variant="h4" mb={2}>
                  Activation code
                </Typography>
                <Typography variant="body2" className="p2">
                  An activation code has been sent to you to recover your
                  account
                </Typography>
                <Typography variant="body1" className="p1">
                  This is not my Email !
                  <Link to="/auth/ForgotPass">
                    <span className="span-component"> Edit</span>
                  </Link>
                </Typography>
              </Box>
              <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Box>
                    <Box display="flex" justifyContent="center" gap={2}>
                      {[0, 1, 2, 3, 4, 5].map((index) => (
                        <TextField
                        placeholder="___"
                        className="otp"
                          key={index}
                          id={`otp${index}`}
                          name={`otp${index}`}
                          type="number"
                          variant="outlined"
                          size="small"
                          margin="dense"
                          sx={{ width: "50px"}}
                          onInput={(e) => handleInputChange(e, index)}
                          onPaste={handlePaste}
                          {...register(`otp${index}`, {
                            pattern: {
                              value: /^[0-9]$/,
                              message: "must be one digit",
                            },
                          })}
                          required
                          error={errors[`otp${index}`]}
                          helperText={errors[`otp${index}`]?.message}
                        />
                      ))}
                    </Box>
                    <Box textAlign="center" m={3}>
                      <span className="span-component">34s</span>
                      <Typography
                        variant="body1"
                        className="p1 clickable"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ fontSize: "fit-content" }}
                      >
                        <UpdateIcon fontSize="small" />
                        Resend
                      </Typography>
                    </Box>
                    <Box textAlign="center">
                      <Button
                        size="large"
                        fullWidth
                        className="default-btn"
                        variant="contained"
                        type="submit"
                      >
                        Send
                      </Button>
                      <Typography variant="body1" className="p1" mt={1}>
                        Didn't receive the activation code?{" "}
                        <span className="span-component clickable">Resend</span>
                      </Typography>
                    </Box>
                  </Box>
                </form>
              </Box>
            </Container>
          </Grid>
          <Grid
            item
            sx={{ display: { xs: "none", md: "flex" } }}
            md={6}
            className="cover"
          ></Grid>
        </Grid>
      </section>
    </>
  );
};

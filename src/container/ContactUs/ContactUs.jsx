import React, { useEffect, useRef, useState } from "react";
import "./ContactUs.css";
import images from "../../assets";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Mail } from "@mui/icons-material";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
export const ContactUs = () => {
  const YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID;
  const YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
  const YOUR_PUBLIC_KEY = process.env.REACT_APP_YOUR_PUBLIC_KEY;
  const form = useForm();
  const formRef = useRef();
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;
// const [isPopUp, setIsPopUp] = useState(false)
  
  const sendEmail = async (data) => {
    const {name ,email ,multiline} =data
    const templateParams={
      to_name:"amr",
      from_name:name,
      message:multiline
    }
    try{
     await emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, YOUR_PUBLIC_KEY)
    console.log("successfull");
    }
    catch(error){
      console.error("Error sending email", error);
    }
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
  return (
   <div className="app__contact app__wrapper section-padding" id="contact">
      <div className="app__wrapper_info">
        <h1 className="app__subheader"> contact us</h1>
        <form
          style={{
            minWidth: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
          ref={formRef}
          onSubmit={ handleSubmit(sendEmail)}
          noValidate
        >
          <Box
            display="flex"
            gap="2rem"
            flexDirection={{ xs: "column", md: "row" }}
            maxWidth={"100%"}
          >
            <Box sx={{ flex: 1 }}>
              <label htmlFor="name">Name</label>
              <TextField
                placeholder="Ex:Mohammed Elsherif"
                fullWidth
                id="name"
                {...register("name", {
                  required: "name is required",
                })}
                error={errors.name}
                helperText={errors.name?.message}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <label htmlFor="email">Email Address</label>
              <TextField
                placeholder="Ex:Mohammed Elsherif@gmail.com"
                fullWidth
                id="email"
                {...register("email", {
                  required: "email is required",
                })}
                error={errors.email}
                helperText={errors.email?.message}
              />
            </Box>
          </Box>
          <Box>
            <label htmlFor="outlined-multiline-static">Your message</label>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              multiline
              rows={8}
              placeholder="Ex: i would like to communicate with you"
              {...register("multiline", {
                required: "text is required",
              })}
              error={errors.multiline}
              helperText={errors.multiline?.message}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            sx={{
              maxWidth: "200px",
              margin: "15px 0",
              padding: "1rem",
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor: "var(--main-color) !important",
            }}
          >
            <Typography sx={{ flex: 2 }}>send</Typography>
            <Mail sx={{ flex: 1 }} />
          </Button>
        </form>
      </div>
      <div className="app__wrapper_img">
        <img src={images.contact} alt="contact" />
      </div>
    </div>
  );
};

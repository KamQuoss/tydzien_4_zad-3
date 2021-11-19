import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  FormHelperText,
  Checkbox
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

export default function Form() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <Box
      component="form"
      sx={{
        bgcolor: "background.paper",
        boxShadow: 1,
        borderRadius: 1,
        p: 3,
        mt: 3
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Controller
            name="Name"
            control={control}
            defaultValue=""
            rules={{
              required: "Pole nie może być puste",
              maxLength: {
                value: 80,
                message: "Sprawdż poprawność danych"
              }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                required
                fullWidth
                label="Imię i nazwisko"
                error={errors.Name ? true : false}
                helperText={errors.Name?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="Email"
            control={control}
            defaultValue=""
            rules={{
              required: "Pole nie może być puste",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Nieprawidłowy adres email"
              }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                required
                fullWidth
                label="email"
                error={errors.Email ? true : false}
                helperText={errors.Email?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="Bio"
            control={control}
            defaultValue=""
            rules={{
              required: "Pole nie może być puste",
              maxLength: {
                value: 300,
                message: "Skróć o kilka słów"
              },
              minLength: {
                value: 30,
                message: "Dopisz jeszcze kilka słów"
              }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                required
                multiline
                fullWidth
                rows={3}
                label="O mnie"
                placeholder="Napisz coś o sobie"
                error={errors.Bio ? true : false}
                helperText={errors.Bio?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="Gender"
            control={control}
            defaultValue="female"
            rules={{ required: "Wybierz odpowiedż" }}
            render={({ field }) => (
              <FormControl
                component="fieldset"
                error={errors.Gender ? true : false}
              >
                <FormLabel component="legend">Jestem *</FormLabel>
                <RadioGroup row aria-label="gender" required {...field}>
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="kobietą"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="mężczyzną"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="osobą nienormatywną"
                  />
                </RadioGroup>
                {errors.Gender && (
                  <FormHelperText>{errors.Gender?.message}</FormHelperText>
                )}
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="Acceptance"
            control={control}
            defaultValue={false}
            rules={{
              required: "Musisz zaakceptować ragulamin, żeby się zapisać"
            }}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState
            }) => (
              <FormControl error={error}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onBlur={onBlur} // notify when input is touched
                      onChange={onChange} // send value to hook form
                      checked={value}
                      inputRef={ref}
                    />
                  }
                  label="Akceptuję regulamin"
                />
                {errors.Acceptance && (
                  <FormHelperText>{errors.Acceptance?.message}</FormHelperText>
                )}
              </FormControl>
            )}
          />
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Button variant="contained" type="submit" children="Prześlij" />
        </Grid>
      </Grid>
    </Box>
  );
}

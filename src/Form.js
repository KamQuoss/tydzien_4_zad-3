import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        {...register("First name", { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <textarea {...register("Bio", { required: true, max: 3000, min: 50 })} />

      <input
        {...register("Gender", { required: true })}
        type="radio"
        value="kobieta, mężczyzna"
      />
      <input
        type="checkbox"
        placeholder="Acceptance"
        {...register("Acceptance", { required: true })}
      />

      <input type="submit" />
    </form>
  );
}

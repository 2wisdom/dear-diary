import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Wrapper } from "../styles/AuthStyle";

/* type */
interface FormInput {
  email: string;
  password: string;
}

/* Yup Vaildation */
const SignupSchema = yup.object().shape({
  email: yup
    .string()
    .email("이메일 형식이 아닙니다.")
    .required("이메일을 입력해주세요."),
  password: yup.string().required("비밀번호를 입력해 주세요."),
});

export default function SignIn() {
  /* Submit */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(SignupSchema),
  });
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <Wrapper>
      <h1>로그인</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* email */}
        <div>
          <label>
            Email
            <input type="email" {...register("email")} />
          </label>
        </div>
        <p>{errors.email?.message || "\u00A0"}</p>

        {/* password */}
        <div>
          <label>
            Password
            <input type="password" {...register("password")} />
          </label>
        </div>
        <p>{errors.password?.message || "\u00A0"}</p>

        {/* submit button */}
        <button>완료 !</button>
      </form>
    </Wrapper>
  );
}

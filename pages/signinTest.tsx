import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Wrapper } from "../styles/AuthStyle";
import { useMutation } from "@tanstack/react-query";
import { Api } from "../lib/api";
import Router from "next/router";
import { AxiosError } from "axios";
import { useSession, signIn, signOut } from "next-auth/react";

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
  const { data: session } = useSession();

  /* Submit */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(SignupSchema),
  });

  /*
  const loginUser = useMutation({
    mutationFn: (input: Omit<FormInput, "confirmPassword">) => {
      return Api.post<{ successful: boolean; message?: string }>(
        `/api/users/signin`,
        {
          email: input.email,
          password: input.password,
        }
      );
    },
  });
  */

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    console.log(data);
    signIn();
    /*
    try {
      const { data: result } = await loginUser.mutateAsync({
        email: data.email,
        password: data.password,
      });

      if (!result.successful) {
        alert(result.message);
        return;
      }

      alert("환영해요!");
      Router.push("/");
    } catch (err) {
      if (err instanceof AxiosError) {
        alert("로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
    */
  };

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

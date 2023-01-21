import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Wrapper } from "../styles/AuthStyle";
import { useMutation } from "@tanstack/react-query";
import { Api } from "../lib/api";
import { AxiosError } from "axios";
import { useRouter } from "next/router";

/* type */
interface FormInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

/* Yup Vaildation */
const SignupSchema = yup.object().shape({
  name: yup
    .string()
    .required("닉네임을 입력해주세요.")
    .min(2, "이름은 2글자 이상, 8글자 이하입니다.")
    .max(8, "이름은 2글자 이상, 8글자 이하입니다."),
  email: yup
    .string()
    .email("이메일 형식이 아닙니다.")
    .required("이메일을 입력해주세요."),
  password: yup
    .string()
    .required("비밀번호를 입력해 주세요.")
    .matches(
      /^[A-Za-z0-9]{6,12}$/,
      "숫자와 문자 포함 6~12자리로 입력해 주세요."
    ),
  confirmPassword: yup
    .string()
    .required("비밀번호를 확인해주세요.")
    .oneOf([yup.ref("password"), null], "비밀번호가 다릅니다."),
});

export default function SignUp() {
  // useRouter
  const router = useRouter();

  /* Submit */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(SignupSchema),
  });

  const createUser = useMutation({
    mutationFn: (input: Omit<FormInput, "confirmPassword">) => {
      return Api.post(`/api/users/signup`, {
        email: input.email,
        password: input.password,
        name: input.name,
      });
    },
  });

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    try {
      const { data: result } = await createUser.mutateAsync({
        email: data.email,
        name: data.name,
        password: data.password,
      });
      // TODO: handle successful submission
      alert("회원가입 완료!");
      router.push("/signin");
    } catch (err) {
      if (err instanceof AxiosError) {
        // TODO: handle error
        alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
      // else {
      //   // TODO: application error
      // }
    }
  };

  return (
    <Wrapper>
      <h1>회원가입</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* name */}
        <div>
          <label>
            Name
            <input type="text" {...register("name")} />
          </label>
        </div>
        <p>{errors.name?.message || "\u00A0"}</p>

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

        {/* confirm password */}
        <div>
          <label>
            ConfirmPassword
            <input
              type="password"
              {...register("confirmPassword", { required: true })}
            />
          </label>
        </div>
        <p>{errors.confirmPassword?.message || "\u00A0"}</p>

        {/* check box */}
        {/* <label>
          체크박스
          <input type="checkbox" id="checkbox" />
        </label> */}

        {/* submit button */}
        <button>완료 !</button>
      </form>
    </Wrapper>
  );
}

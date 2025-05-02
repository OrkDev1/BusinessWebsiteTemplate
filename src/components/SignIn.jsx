import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";
import { Mail, LockKeyhole } from "lucide-react";

const signInSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

export default function SignIn() {
  const { register, handleSubmit } = useForm({ resolver: zodResolver(signInSchema) });

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    toast.success("Logged in!");
  };

  const onError = (errors) => {
    const firstError = Object.values(errors)[0]?.message;
    if (firstError) toast.error(firstError);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onError)} className="w-full max-w-md space-y-5 p-5">
        <div className="py-4">
          <h1 className="text-center text-3xl md:text-4xl font-bold">Sign In</h1>
          <p className="text-gray-500 mt-4 text-center text-md md:text-lg">welcome back please sign in</p>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <p className="font-semibold text-base-content">Email</p>
            <div className="input input-md w-full">
              <Mail color="#aaa" />
              <input placeholder="example@gmail.com" type="email" {...register("email")} />
            </div>
          </div>
          <div>
            <p className="font-semibold text-base-content">Password</p>
            <div className="input input-md w-full">
              <LockKeyhole color="#aaa" />
              <input placeholder="password" type="password" {...register("password")} />
            </div>
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-md btn-primary w-full font-semibold py-2">
            SIGN IN
          </button>
        </div>
        <div className="divider text-gray-500 py-4">or</div>
        <button type="button" className="btn btn-md mt-4 w-full btn-outline">
          <svg aria-label="Google logo" width="26" height="26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <g>
              <path d="m0 0H512V512H0" fill="transparent"></path>
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
              <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
              <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
              <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
            </g>
          </svg>
          SignIn with Google
        </button>
      </form>
    </div>
  );
}

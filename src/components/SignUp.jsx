import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { FaRegUser, FaRegEnvelope, FaLock } from "react-icons/fa";

const signUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[a-z]/, "Must include a lowercase letter")
    .regex(/[A-Z]/, "Must include an uppercase letter")
    .regex(/\d/, "Must include a number")
    .regex(/[^a-zA-Z0-9]/, "Must include a special character"),
});

export default function SignUp() {
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  //check password
  const password = watch("password", "");
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[^a-zA-Z0-9]/.test(password);
  const hasLength = password.length >= 8;

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    toast.success("Successfully registered!");
  };

  const onError = (errors) => {
    const firstError = Object.values(errors)[0]?.message;
    if (firstError) {
      toast.error(firstError);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onError)} className="w-full max-w-md space-y-5 rounded-2xl p-5">
        <div className="py-4">
          <h1 className="text-center text-3xl md:text-4xl font-bold">Create account</h1>
          <p className="text-gray-500 mt-4 text-center text-md md:text-lg">Create a free account to access services</p>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <p className="font-semibold text-base-content">Name</p>
            <div className="input mt-1 validator input-md w-full">
              <FaRegUser color="#aaa" />
              <input required placeholder="type name" pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="16" {...register("name")} />
            </div>
          </div>

          <div>
            <p className="font-semibold text-base-content">Email</p>
            <div className="input validator mt-1 input-md w-full">
              <FaRegEnvelope color="#aaa" />
              <input required placeholder="example@gmail.com" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" type="email" {...register("email")} />
            </div>
          </div>

          <div>
            <p className="font-semibold text-base-content">Password</p>
            <div className="input validator mt-1 input-md w-full">
              <FaLock color="#aaa" />
              <input required placeholder="type password" type="password" {...register("password")} pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$" />
            </div>
            <ul className="validator-hint hidden peer-invalid:block peer-focus:block mt-1 text-gray-500 text-sm space-y-1">
              <li className={hasLength ? "text-green-500" : "text-red-500"}>Must be at least 8 characters</li>
              <li className={hasLower ? "text-green-500" : "text-red-500"}>At least one uppercase</li>
              <li className={hasUpper ? "text-green-500" : "text-red-500"}>At least one lowercase</li>
              <li className={hasNumber ? "text-green-500" : "text-red-500"}>At least one number</li>
              <li className={hasSpecial ? "text-green-500" : "text-red-500"}>At least one special character</li>
            </ul>
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-md btn-primary w-full font-semibold py-2">
            SIGN UP
          </button>
        </div>
        <div className="divider text-gray-500 py-2">or</div>
        <button type="button" className="btn btn-md mt-2 w-full btn-outline ">
          <svg aria-label="Google logo" width="26" height="26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <g>
              <path d="m0 0H512V512H0" fill="transparent"></path>
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
              <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
              <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
              <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
            </g>
          </svg>
          SignUp with Google
        </button>
      </form>
    </div>
  );
}

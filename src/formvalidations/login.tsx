import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export type LoginFormData = {
  email: string;
  password: string;
};

export const schema: ZodType<LoginFormData> = z.object({
  email: z.string().email({ message: "Please provide a valid email address" }),
  password:z.string().min(5,{message:"Please enter password"})
});

export const useValidate = () => {
  const {register,handleSubmit,formState:{errors}} = useForm<LoginFormData>({resolver:zodResolver(schema)})
  return {
    register,
    handleSubmit,
    errors
  }
}
export const formSubmit = (data: LoginFormData) => {
  //  write the post method here for sending from data to the server
  console.log("working fine", data);
};

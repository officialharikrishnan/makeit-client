import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";




// Register form schama
export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

//  Zod validation  
export const schama: ZodType<RegisterFormData> = z
  .object({
    firstName: z
      .string()
      .min(2, {
        message: "Firstname must contain at least 2 character(s)",
      })
      .max(30, { message: "First Name cannot exceed 30 characters" })
      .regex(/^[A-Za-z]+$/, {
        message: "First Name must contain only alphabetic characters",
      }),
    lastName: z
      .string()
      .min(1, { message: "Lastname must contain at least 1 character(s)" })
      .max(30, { message: "LastName cannot exceed 30 characters" })
      .regex(/^[A-Za-z]+$/, {
        message: "Last Name must contain only alphabetic characters",
      }),
    email: z.string().email({
      message: "Please provide a valid email address",
    }),
    phone: z.string().refine((value) => value.length === 10, {
      message: "Mobile number must have exactly 10 numbers",
    }),
    password: z
      .string()
      .min(5, {
        message: "password must contain at least 5 character(s)",
      })
      .max(20, {
        message: "password cannot exceed 20 characters",
      })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });



  // custom Hook 
export const useValidate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({ resolver: zodResolver(schama) });
  return {
    register,
    handleSubmit,
    errors,
  };
};

// export const formSubmit = async(Data: RegisterFormData) => {
//   console.log(Data);
  
//    {
//     try {
//       const response = await axios.post('http://makeit.com/api/auth/register', {...Data });
//            // Handle the response data

//       console.log(response.data)
    
//     } catch (error) {
//       console.error(error,'errrorororor'); // Handle the error
      
//     }
//   }
  
//     //  write the post method here for sending from data to the server
//   // if(data)console.log("working fine", data);else{
//   //   console.log("not working");
//   // }
   
// };


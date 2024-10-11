import React, { useEffect } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from 'yup';
import { useSignInMutation } from "../../store/service/endpoints/auth.endpoints";
import { AuthGuard } from "../../components/guard/Auth.guard";
import { useNavigate } from "react-router-dom";
import { LuLoader2 } from "react-icons/lu";

const SignInPage = () => {
    const [fun, data] = useSignInMutation();
    console.log(data)
    const nav = useNavigate();
    const initialValues = {
        email: "",
        password: ""
    };
    
    const validationSchema = yup.object({
        email: yup.string().required("Email is Required").email("Valid Email format"),
        password: yup.string().required("Password is Required").min(8, "Password should be longer than 8")
    })
    const handleSubmit = async (value) => {
        await fun(value);
        
        
    }
    useEffect(() => {
        if(data.data?.token){
            localStorage.setItem("token",JSON.stringify(data.data.token))
        
        }
    },[data.data?.token])
    return (
        <AuthGuard check={localStorage.getItem("token")} path={"/home/contact"} >
            <main className="flex flex-col xl:flex-row xl:items-center xl:justify-between h-svh">
                <div className="xl:basis-2/3 xl:h-full w-full bg-[#eaeff4]">
                    <div className="container py-5">
                        <img src="dark-logo.svg" alt="" />
                    </div>
                    <div className="hidden xl:flex justify-center items-center ">
                        <img src="login-security.svg" alt="" className="w-[500px]" />
                    </div>
                </div>
                <section className=" m-auto  xl:basis-1/3 xl:h-full">
                    <div className="xl:flex xl:justify-center xl:items-center w-full h-full">
                        <div className="w-full xl:px-20">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold">Welcome to Modernize</h3>
                                <p className="text-sm">Your Admin Dashboard</p>
                            </div>
                            
                            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} >
                                {({ values, handleChange, isSubmitting }) => (
                                    <>
                                        <Form className="flex flex-col gap-4">
                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                                                <Input type="email" id="email" name="email" onChange={handleChange} value={values.email} />
                                                <ErrorMessage className="text-red-500 text-xs" component={"p"} name="email" />
                                            </div>
                                            <div className=" flex flex-col gap-2">
                                                <label htmlFor="password" className="text-sm font-medium">Password</label>
                                                <Input type="password" id="password" name="password" onChange={handleChange} value={values.password} />
                                                <ErrorMessage className="text-red-500 text-xs" component={"p"} name="password" />
                                            </div>
                                            <Button className="w-full bg-[#5d87ff] hover:bg-[#4a6ccc]" type="submit" disabled={isSubmitting} >
                                                {data?.isLoading ? <LuLoader2 className='animate-spin' /> : "Sign In"}
                                            </Button>
                                        </Form>
                                    </>
                                )}
                            </Formik>
                            <p className="text-center mt-4">New to Modernize? <span className="text-sm text-blue-500 ml-2" onClick={() => nav("/sign_up")} >Create an account</span></p>
                        </div>
                    </div>
                </section>
            </main>
        </AuthGuard>
    )
}

export default SignInPage
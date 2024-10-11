import React, { useEffect } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from 'yup';
import { useSignUpMutation } from "../../store/service/endpoints/auth.endpoints";

import { useNavigate } from "react-router-dom";


const SignUpPage = () => {
    const [fun, data] = useSignUpMutation();
    console.log(data)
    const nav = useNavigate();
    const initialValues = {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    }
    const validationSchema = yup.object({
        name: yup.string().required("Name is Required").min(2, "Name shouble be longer than 2 "),
        email: yup.string().required("Email is Required").email("Valid Email format"),
        password: yup.string().required("Password is Required").min(8, "Password should be longer than 8"),
        password_confirmation: yup.string().required("Password Confirm is Required").oneOf([yup.ref("password"), null], "Password Confirm should be match with password")
    })
    const handleSubmit = async (value) => {
        await fun(value)
        if(data?.data?.success){
            nav("/") }
    }
    useEffect(() => {
        if (data.isError) {
            nav("/sign_up")
        } else if (data?.data?.success) {
            nav("/")
        }
    }, [data?.data?.success])
    return (

        <main className="flex flex-col xl:flex-row xl:items-center xl:justify-between h-svh">
            <div className="xl:basis-2/3 xl:h-full bg-[#eaeff4]">
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
                            <h3 className="text-lg md:text-2xl font-bold">Welcome to Modernize</h3>
                            <p className="text-sm">Your Admin Dashboard</p>
                        </div>
                        {data?.isError && <div className="px-2 py-1 bg-white shadow-sm">
                        <p className="text-red-500 text-xs text-center">{data?.error?.data?.message}</p>

                        </div> }
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} >
                            {({ values, handleChange, isSubmitting }) => (
                                <>
                                    <Form className="flex flex-col gap-4">

                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                                            <Input type="text" id="name" name="name" onChange={handleChange} value={values.name} />
                                            <ErrorMessage className="text-red-500 text-xs" component={"p"} name="name" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                                            <Input type="email" id="email" name="email" onChange={handleChange} value={values.email} />
                                            <ErrorMessage className="text-red-500 text-xs" component={"p"} name="email" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="password" className="text-sm font-medium">Password</label>
                                            <Input type="password" id="password" name="password" onChange={handleChange} value={values.password} />
                                            <ErrorMessage className="text-red-500 text-xs" component={"p"} name="password" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="password_confirmation" className="text-sm font-medium">Password Confirm</label>
                                            <Input type="password" id="password_confirmation" name="password_confirmation" onChange={handleChange} value={values.password_confirmation} />
                                            <ErrorMessage className="text-red-500 text-xs" component={"p"} name="password_confirmation" />
                                        </div>
                                        <Button className="w-full bg-[#5d87ff] hover:bg-[#4a6ccc]" type="submit" disabled={isSubmitting} >
                                            Sign Up
                                        </Button>
                                    </Form>
                                </>
                            )}
                        </Formik>
                        <p className="mt-5">Already have an Account? <span onClick={() => nav("/")} className="text-blue-500 ml-2">Sign in</span></p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SignUpPage
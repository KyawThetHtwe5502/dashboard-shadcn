import { ApiService } from "../ApiService";

const authEndpoints = ApiService.injectEndpoints({
    endpoints : (builder) => ({
        signIn : builder.mutation({
            query: (args) =>  ({
                url: "/login",
                method: "POST",
                body : args
            })
        }),
        signUp: builder.mutation({
            query: (arg) => ({
                url: "/register",
                method: "POST",
                body: arg
            })
        }),
        userProfile: builder.query({
            query: () =>  "/user-profile"
        })
    })
});

export const {useSignInMutation , useSignUpMutation, useUserProfileQuery} = authEndpoints;
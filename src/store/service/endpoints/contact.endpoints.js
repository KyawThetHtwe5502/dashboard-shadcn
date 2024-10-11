import { ApiService } from "../ApiService";

const contactEndpoints= ApiService.injectEndpoints({
    endpoints: (builder) => ({
        getContact : builder.query({
            query: () => "/contact"
        }),
        getSingleContact: builder.query({
            query: (id) => `/contact/${id}`
        }),
        createContact: builder.mutation({
            query : (arg) => ({
                url : "/contact",
                method: "POST",
                body: arg
            })
        }),
        editContact: builder.mutation({
            query : ({id,...formData}) => ({
                url : `/contact/${id}`,
                method : "PUT",
                body: formData
            })
        }),
        deleteContact : builder.mutation({
            query: (id) => ({
                url : `/contact/${id}`,
                method : "DELETE"
            })
        }),
        searchContact: builder.query({
            query: (keywork) => `/contact?search = ${keywork}`
        })
    })
});

export const {useGetContactQuery, useGetSingleContactQuery, useCreateContactMutation, useEditContactMutation, useDeleteContactMutation , useSearchContactQuery } = contactEndpoints;
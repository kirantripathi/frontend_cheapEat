"use client"

import { UserFormData } from "@/components/userForm/userProfileForm"
import { useAuth0 } from "@auth0/auth0-react"
import { useMutation,useQuery } from "@tanstack/react-query"
import { toast } from "sonner"

const baseURL = process.env.NEXT_PUBLIC_BASE_URL


export const useGetMyUser = () => {

    const {user} = useAuth0();
    
const getMyUserRequest = async() => {



    const response = await fetch(`${baseURL}/api/my/user?id=${user?.sub}`,{
        method:"GET",
        headers:{
            "Content-type":"application/json"
        }, 
    })

console.log(response,"See user get response")

if(!response.ok) {
    throw new Error("Failed to get user")
}

return response.json();

}
 
const {data:currentUser,isError,isLoading,error} = useQuery( {
    queryKey:['user'],
    queryFn: getMyUserRequest
});

if(error) {
toast.error(error.toString())
}

return {currentUser,isLoading,isError}

}


type CreateUserRequest = {
    auth0Id:string,
    email:string
}

export const useCreateMyUser = () => {

const {getAccessTokenSilently} = useAuth0();



const createMyUserRequest = async(user:CreateUserRequest) => {

    const accessToken = await getAccessTokenSilently();


const response = await fetch(`${baseURL}/api/my/user`,{
    method:"POST",
    headers:{
        Authorization:`Bearer ${accessToken}`,
        "Content-type":"application/json"
    },
    body:JSON.stringify(user)
})
console.log(response,"see the reponse plz")

if(!response.ok) {
    throw new Error("Failed to create user")
}

}

const {mutateAsync:createUser,isSuccess,isError,isPending} = useMutation( {
    mutationFn:createMyUserRequest
});

return {
    createUser,
    isPending,
    isSuccess,
    isError
};

}


export const useUpdateMyUser = () => {



    const {getAccessTokenSilently,user} = useAuth0();
    
    const updateMyUserRequest = async(useFormData:UserFormData) => {
    
        const accessToken = await getAccessTokenSilently();
    
       console.log(user,"See auth0 user info too")
    
    const response = await fetch(`${baseURL}/api/my/user`,{
        method:"PUT",
        headers:{
            // Authorization:`Bearer ${accessToken}`,
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            ...useFormData,
            auth0Id:user?.sub
        })
    })
    console.log(response,"see the reponse plz")
    
    if(!response.ok) {
        throw new Error("Failed to create user")
    }
    
    }
    
    const {mutateAsync:updateUser,isSuccess,isError,isPending,error,reset} = useMutation( {
        mutationFn:updateMyUserRequest
    });

    if(isSuccess) {
        toast.success("User Profile Updated")
    }

    if(isError) {
        toast.error(error.toString())
        //to reset error state
        reset();
    }
    
    return {
        updateUser,
        isPending,
        isSuccess,
        isError
    };
    
    }
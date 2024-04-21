"use client"

import React,{useEffect} from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { User } from '@auth0/auth0-react'


const formSchema = z.object({
  email: z.string().nonempty('Email Field is required').email({ message: 'Must be a valid email' }),
  name: z.string().min(3, {
    message: "Name must be at least 5 characters.",
  }),
  addressLine1: z.string().nonempty('Address field is required').min(3, { message: 'Too short Address' }),
  city: z.string().nonempty('City Field is required').min(3, { message: 'Too short City Name' }),
  country: z.string().nonempty('Country Field is required').min(3, { message: 'Too short Country Name' }),
})
 
export type UserFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (userProfileData:UserFormData) => void,
  loading:boolean,
  currentUser:User

}

const UserProfileForm = ({onSave,loading,currentUser}:Props) => {

  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name:"",
      addressLine1:"",
      city:"",
      country:""
    },
  })

  useEffect(() => {
    console.log(currentUser,"See in the form")
    form.reset(currentUser);
  }, [currentUser, form]);


  function onSubmit(values: z.infer<typeof formSchema>) {
   onSave(values)
  }

  return (
    <div className='mx-auto  w-[90%]  mt-[120px] bg-gray-100 p-[5%]'>
      
   
      <h2 className='text-3xl text-black font-bold'>User Profile </h2>
      <p className='text-2xl text-gray-500'>View and change your profile information here</p> 



  <div className='mt-5'>

  <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input className='h-[50px]' placeholder="hello@abc.com" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input className='h-[50px]' placeholder="" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row lg: justify-between gap-x-[50px]'>
        <FormField
          control={form.control}
          name="addressLine1"
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel>Address Line 1</FormLabel>
              <FormControl>
                <Input className='h-[50px] ' placeholder="" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
      <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input className='h-[50px]' placeholder="" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input className='h-[50px]' placeholder="" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        </div>


{     !loading  ?   <Button  className='bg-orange-500' type="submit">Submit</Button>
      
      :  <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>}
    
      </form>
    </Form>

  </div>

    </div>
  
  )
}

export default UserProfileForm;
"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import Submitbutton from "../Submitbutton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation"
import Customformfield from "../Customformfield"

export enum FormFieldType {
    INPUT = "input",
    TEXTAREA= "textarea",
    PHONE_INPUT = "phone-input",
    CHECKBOX = "checkbox",
    DATE_PICKER = "date-picker",
    SELECT = "select",
    SKELETON = "skeleton",
}
    
    
    const patientform =() => {
        const router = useRouter ();
        const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
        name: "",
        email: "",
        phone: "",
        },
    })


    
    // 2. Define a submit handler.
    async function onSubmit({name, email, phone}: z.infer<typeof UserFormValidation>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        setIsLoading(true);
        try {
        //    const userData ={name,email,phone }
        //    const user = await createUser(userData);

        //    if (user) router.push(`/patients/${user.$id}/register`)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
            <section className="mb-12 space-y-4">
                <h1 className="text-24-semibold">Hello, Welcome to DoctorConnect</h1>
                <p className="text-sm text-gray-700">
                    We're here to help you find the best doctor for your needs.
                </p>
            </section>

            <Customformfield 
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name= "name"
                label="Full Name"
                placeholder="Full Name"
                iconSrc= "/assets/icons/user.svg"
                iconAlt= "user"
            />
            <Customformfield
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            label="Email"
            placeholder="johndoe@gmail.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
            />

            <Customformfield
            fieldType={FormFieldType.PHONE_INPUT}
            control={form.control}
            name="phone"
            label="Phone number"
            placeholder="(555) 123-4567"
            />

            <Submitbutton isLoading={isLoading}>Get Started</Submitbutton>
        </form>
        </Form>
    )
}

export default patientform
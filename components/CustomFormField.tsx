'use client'
import React from 'react';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";  
import { Control } from 'react-hook-form';
import { FormFieldType } from './forms/PatientForm';
import Image from 'next/image';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

interface CustomProps {
    control: Control<any>,
    fieldType: FormFieldType,
    name: string,
    label?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: boolean,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field: any) => React.ReactNode,
}

const RenderField = ({field, props}:{ field: any; props: CustomProps}) => {
    const {fieldType, iconSrc, iconAlt, placeholder} = props;
    console.log("RenderField props:", props);
    console.log("RenderField field:", field);
    
    switch (fieldType) {
        case FormFieldType.INPUT:
            return(
                <div className='flex rounded-md border border-gray-950 bg-dark-400'>
                    {iconSrc && (
                        <Image
                        src={iconSrc}
                        height={25}
                        width={25}
                        alt={iconAlt || 'icon'}
                        className='ml-2'
                        />
                    )}
                    <FormControl>
                        <Input 
                            placeholder={placeholder}
                            {...field}
                            className='shad-input border-0'
                        />
                    </FormControl>
                </div>
            )
        case FormFieldType.PHONE_INPUT:
            return(
                <FormControl>
                    <PhoneInput 
                        defaultCountry='KE'
                        placeholder={placeholder}
                        international
                        withCountryCallingCode
                        value={field.value as E164Number | undefined}
                        onChange={field.onChange}
                        className='input-phone'
                    />
                </FormControl>
            )
    
        default:
            return null;
    }
}

const CustomFormField = (props: CustomProps) => {
    const { control, fieldType, name, label } = props;
    console.log("CustomFormField props:", props);
    
    return (
        <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem className="flex-1">
                {fieldType === FormFieldType.CHECKBOX && label &&(
                    <FormLabel>{label}</FormLabel>
                ) }
                <RenderField field={{...field, value: field.value || ""}} props={props}/>
                <FormMessage className='shad-error'/>
            </FormItem>
        )}
        />
    )
}

export default CustomFormField;
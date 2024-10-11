import React, { useEffect, useState } from 'react'
import { HiOutlineXMark } from "react-icons/hi2";
import { LuLoader2 } from 'react-icons/lu';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useEditContactMutation } from '../../store/service/endpoints/contact.endpoints';
const EditComponents = ({editData : {id,name,phone,email,address},edit, setEdit,refetch}) => {
    const [fun, data] = useEditContactMutation()
    const [editing,setEditing] = useState(false);
    const [contact, setContact] = useState({
        name : name,
        phone : phone,
        email : email,
        address : address
    });
    const handleEdit = () => {
         setEdit(!edit) 
    }
    const handleChange = (e) => {
        setContact((pre) => ({ ...pre, [e.target.name]: e.target.value }))
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setEditing(true);
        await fun({id,...contact});
        if(data){
            handleEdit()
            refetch()
        }
    };
    return (
        <div className='h-screen w-screen fixed bg-black/50 top-0 left-0 z-50 backdrop-blur-sm'>
            
        <Card className="max-w-[600px]  p-4 fixed  top-1/3 left-1/3  bg-white rounded-md dark:bg-gray-900 dark:text-white duration-200 " >
            <div className='flex justify-between items-center'>
                <h3>Contact</h3>
                <button onClick={handleEdit}>

                <HiOutlineXMark/>
                </button>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                <div className='flex items-center gap-4'>
                    <Input type="text" name="name" onChange={handleChange} value={contact.name} placeholder="Name" />
                    <Input type="number" name="phone" onChange={handleChange} value={contact.phone} placeholder="Phone" />
                </div>
                <Input type="email" name="email" onChange={handleChange} value={contact.email} placeholder="example@gmail.com" />
                <Input type="text" name="address" onChange={handleChange} value={contact.address} placeholder="Location" />
                <Button type="submit" className="bg-blue-500" >
                    
                 { editing ? <span className='flex items-center gap-x-2'>Editing Contact <LuLoader2 className='animate-spin' /> </span> : <span>Edit Contact</span> } 
                </Button>
            </form>
        </Card>
        </div>
    )
}

export default EditComponents
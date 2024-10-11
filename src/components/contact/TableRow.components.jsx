import React, { useState } from 'react'
import {
    TableCell,
    TableRow,
} from "@/components/ui/table";
import { LuLoader2 } from "react-icons/lu";

import { HiOutlineTrash } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import { useGetSingleContactQuery } from '../../store/service/endpoints/contact.endpoints';
const TableRowComponents = ({ row: { id, name, phone, email, address }, handleDelete , handleEdit,edit }) => {
    const {isLoading, isError, data } = useGetSingleContactQuery(id);
    const [remove, setRemove] = useState(false);
    const handleDeleteButton = () => {
        handleDelete(id)
        setRemove(true);
    }
    const handleEditButton = () => {
        if(data.contact){

            handleEdit(data?.contact);
        }
    }
    return (
        
            <TableRow className="hover:bg-white dark:hover:bg-slate-950 text-gray-500">

                <TableCell>
                    <span>
                        <h6>{name}</h6>
                    </span>
                </TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>
                    {address}
                </TableCell>
                <TableCell className="text-start">
                    {phone}
                </TableCell>
                <TableCell className="text-end flex items-center justify-end gap-2">
                    <button onClick={handleEditButton}>
                    {edit ? <LuLoader2 className='animate-spin text-blue-600' /> : <CiEdit className='text-blue-600 active:scale-110 ' />}
                        
                    </button>
                    <button className='active:scale-110' onClick={handleDeleteButton}>

                        {remove ? <LuLoader2 className='animate-spin' /> : <HiOutlineTrash className='active:scale-110' />}

                    </button>
                </TableCell>
            </TableRow>
        
    )
}

export default TableRowComponents
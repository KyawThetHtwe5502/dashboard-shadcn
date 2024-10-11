import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useEffect, useState } from "react";
import { useDeleteContactMutation, useGetContactQuery, useGetSingleContactQuery, useSearchContactQuery } from "../store/service/endpoints/contact.endpoints";
import AddContactComponents from "../components/contact/AddContact.components";
import TableRowComponents from "../components/contact/TableRow.components";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TbSearch, TbUsers } from "react-icons/tb";
import { BsDot } from "react-icons/bs";
import EditComponents from "../components/contact/Edit.components";



const contactPage = () => {
    const { isError, isLoading, data, refetch } = useGetContactQuery();
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    const [items, setItems] = useState(null);
    const [editData, setEditData] = useState({})

    const handleOpen = () => {
        setOpen(!open)
    }
    const [fun] = useDeleteContactMutation();
    const handleDelete = async (id) => {
        await fun(id);
        refetch()
    };

    const handleEdit = (newEditData) => {
        setEditData((pre) => (newEditData));
        setEdit(!edit)
    }

    const handleSearch = (e) => {
              setItems( data?.contacts?.data.filter((item) => item.name.toLowerCase().search(e.target.value) != -1 || item.email.toLowerCase().search(e.target.value) != -1))
    }
    useEffect(() => {
        if (data?.success) {
            return setItems(data?.contacts?.data)
        }
    }, [data]);

    return (
        <div className="w-full h-full p-10">
            <Card className="flex items-center justify-between py-6 px-6 border-none overflow-hidden bg-[#EBF3FE] dark:bg-slate-700 mb-5">
                <div className="flex flex-col space-y-3">
                    <h3 className="text-xl font-semibold">Contact</h3>
                    <div className="flex items-center  text-sm">
                        <a href="#" className="text-gray-400">Home</a>
                        <BsDot className="text-xl" />
                        <span className="text-gray-500" >Contact</span>
                    </div>
                </div>
                <img src="/ChatBc.png" className="-mb-20 mr-12" alt="" />
            </Card>
            <Card className="flex flex-col md:flex-row items-center justify-between py-6 px-4 mb-5 shadow-md gap-3 ">
                <div className="w-[300px] flex justify-center relative">
                    <Input className="w-full" type="text" onKeyUp={handleSearch} placeholder="Search Contacts.." />
                    <TbSearch className=" absolute top-1/3 right-3" />
                </div>
                <Button className="bg-blue-500 hover:bg-blue-700 inline-flex items-center gap-1" onClick={handleOpen}> <TbUsers className="text-lg " /> Add Contact</Button>
                {open && <AddContactComponents open={open} handleOpen={handleOpen} refetch={refetch} />}
            </Card>
            {edit && <EditComponents editData={editData} setEdit={setEdit} edit={edit} refetch={refetch} />}
            <Card className="h-full drop-shadow-lg">
                <CardContent>

                    <Table className="w-full h-full  mx-auto" >

                        <TableHeader>
                            <TableRow className=" pointer-events-none ">
                                <TableHead className="font-bold text-gray-900 dark:text-gray-500" >Name</TableHead>
                                <TableHead className="font-bold text-gray-900 dark:text-gray-500">Email</TableHead>
                                <TableHead className="text-start font-bold text-gray-900 dark:text-gray-500">Address</TableHead>
                                <TableHead className="font-bold text-gray-900 dark:text-gray-500">Phone</TableHead>
                                <TableHead className="font-bold text-gray-900 dark:text-gray-500 text-end">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data && items?.map((row) => <TableRowComponents edit={edit} handleEdit={handleEdit} key={row.id} row={row} handleDelete={handleDelete} />)}
                        </TableBody>

                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}

export default contactPage;
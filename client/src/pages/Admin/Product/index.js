import React from "react"
import { useMemo } from "react";
import { useQuery,useMutation,useQueryClient} from "react-query"
import { fetchProductList,deleteProduct} from "../../../api";
import { Text,Flex,Button } from "@chakra-ui/react";
import { Table,Popconfirm } from "antd";
import { Link} from "react-router-dom";
export default function Product (){
    
    const queryClient = useQueryClient();

    const {isLoading,isError,data,error} = useQuery("admin:products",fetchProductList);
    
    const deleteMutation = useMutation(deleteProduct,{
        onSuccess : () => queryClient.invalidateQueries("admin:products")
    });

    const columns = useMemo(()=>{
        return[
            {
                title:"Title",
                dataIndex: "title",
                key:"title",
            },
             {
                title:"Price",
                dataIndex: "price",
                key:"price"
             },
             {
                title:"Created At",
                dataIndex: "createdAt",
                key:"createdAt"
                
             },
             {
                title:"Actions",
                key:"action",
                render: (text,record) =>(
                    <>
                        <Link to= {`/admin/product/${record._id}`}>Edit</Link>
                        <Popconfirm
                            title="Are you sure"
                            onConfirm={()=>{
                                deleteMutation.mutate(record._id,{
                                    onSuccess:()=>{
                                        console.log("success")
                                        
                                    }
                                })
                            }}
                            onCancel={()=> console.log("iptal edildi")}
                            okText="Yes"
                            cancelText="No"
                            placement="left"
                        >
                            <button style={{marginLeft:10}}>Delete</button>
                        </Popconfirm>
    
                    </>
                )
             }
        ]
    },[])
    if(isLoading){
        return <div>Loading....</div>
    }

    if(isError){
        return <div>Error {error.message}</div>
    }

    
    return (
        <div>
           <Flex justifyContent="space-between" alignItems="center">
           <Text fontSize="2xl" p="5">
                Products
            </Text>
            
                <Link to="/admin/product/new">
                    <Button>New</Button>
                </Link>
                
            
           </Flex>
     <Table dataSource={data} columns= {columns} rowKey="_id"></Table>
        </div>
    )
}

import {useQuery} from 'react-query'
import { fetchOrders } from '../../../api'
import {Table,Thead,Tbody,Tr,Th,Td,TableCaption,Text} from '@chakra-ui/react'
import { useEffect, useState } from 'react';


export default function Orders (){

    const [datas,setDatas] = useState([])
    const {data,isLoading , isError,error} = useQuery("admin:order" , fetchOrders);
  
    useEffect (()=>{
        if(data){
            setDatas(data)
            console.log(datas)
        }
    },[data])
   
    
    
    if(isLoading){
        return <div>Loadding</div>
    }
    if(isError){
        return <div>Error : {error.message}</div>
   
    }
    
    // console.log(fetchData)

    
    

    return (
        <div>
            <Text fontSize="2xl" p={5}></Text>

            <Table variant="simple">
                <TableCaption>assadsadasdasdsa</TableCaption>
                <Thead>
                    <Tr>
                        <Th>User</Th>
                        <Th>Address</Th>
                        <Th isNumeric>Items</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {datas.map((item)=>(
                        <Tr key={item._id}>
                        <Td>{item.user.email}</Td>
                        <Td>{item.adress}</Td>
                        <Td isNumeric>{item.items.length}</Td>
                        </Tr>
 ) )}
                </Tbody>
            </Table>
        </div>
    )
}

import { useBasket } from "../../contexts/BasketContext";
import {
    Alert, Box, Button, Image, Text, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    useDisclosure,
    Textarea
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { postOrder } from "../../api";

function Basket() {
    const [address,setAddress] = useState('');
    const { items, removeBasket,emptyBasket } = useBasket();
    const total = items.reduce((acc, obj) => acc + obj.price, 0)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const handleSubmitForm = async()=>{
        const itemIds = items.map((item) => item._id)
        
        const input ={
            address,
            items: JSON.stringify(itemIds),
        }
        await postOrder(input);
        emptyBasket();
        onClose();
    }

    return (
        <Box p="5">
            {
                items.length < 1 && (
                    <Alert status="warning"> You don't have items</Alert>
                )
            }

            {
                items.length > 0 && (
                    <>
                        <ul style={{ listStyleType: "decimal" }}>
                            {
                                items.map((item) => (
                                    <li key={item._id} style={{ marginBottom: 15 }}>
                                        <Link to={`/product/${item._id}`}>
                                            {item.title}-{item.price} TL
                                            <Image htmlWidth={200} src={item.photos[0]} loading="lazy" />
                                        </Link>
                                        <Button colorScheme="pink" mt="2" size="sm" onClick={() => removeBasket(item._id)}>
                                            Remove from basket
                                        </Button>
                                    </li>
                                ))
                            }
                        </ul>
                        <Box mt="10">
                            <Text>
                                Total : {total} TL
                            </Text>
                        </Box>

                        <Button mt={"2"} colorScheme={"green"} size="sm" onClick={onOpen}>Order</Button>


                        <Modal
                            initialFocusRef={initialRef}
                            finalFocusRef={finalRef}
                            isOpen={isOpen}
                            onClose={onClose}
                        >
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Order Page</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>
                                    <FormControl>
                                        <FormLabel>Address</FormLabel>
                                        <Textarea ref={initialRef} placeholder='Address' value={address} onChange={(e)=>setAddress(e.target.value)} />
                                    </FormControl>
                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={handleSubmitForm}>
                                        Save
                                    </Button>
                                    <Button onClick={onClose}>Cancel</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </>
                )
            }

        </Box>

    )
}

export default Basket;
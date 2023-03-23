import {Box, Image,Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { useBasket } from '../../contexts/BasketContext'

export default function Card ({item}) {

    const {addToBasket,items} = useBasket();
    const findBasketItem = items.find((basketItem) => basketItem._id === item._id)

    return(
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
            <Link to={`/product/${item._id}`}>

            <Image src={item.photos[0]} alt='product' loading='lazy'/>

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    {moment(item.createdAt).format('DD/MM/YYYY')}
                </Box>

                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="light">
                    {item.title}
                </Box>

                <Box>
                    {item.price} TL
                </Box>
            </Box>

            </Link>

            <Button onClick={()=> addToBasket(item,findBasketItem)} colorScheme={findBasketItem ? 'pink' : 'green'}>
                {
                    findBasketItem ? 'Remove from basket' : 'Add to basket'
                }
            </Button>

            
        </Box>
    )
}
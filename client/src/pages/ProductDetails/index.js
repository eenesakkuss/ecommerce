import {useParams} from 'react-router-dom'
import {useQuery} from 'react-query'
import { fetchProduct } from '../../api';
import {Box, Text,Button} from '@chakra-ui/react'
import moment from 'moment'
import ImageGallery from 'react-image-gallery'
import {useBasket} from '../../contexts/BasketContext'

export default function ProductDetails () {

    const {product_id} = useParams();
    const {addToBasket, items} = useBasket();
    const {isLoading,isError,data}=useQuery(["product",product_id], ()=>
        fetchProduct(product_id),
    );

    if (isLoading){
        return <div>Loading....</div>
    }
    if(isError){
        return <div>Error</div>
    }
    const findBasketItem = items.find((item)=> item._id === product_id)
    const images = data.photos.map((url)=> ({original:url}))
    return(
        <div>
            <Button colorScheme={findBasketItem ? 'pink' : 'green' } onClick={()=> addToBasket(data,findBasketItem)}>
                {
                    findBasketItem ? "Remove from basket" : "Add to basket"
                }
            </Button>
            <Text as="h2" fontSize="2xl">{data.title}</Text>
            <Text>{moment(data.createdAt).format("DD/MM/YYYY")}</Text>
            <Text>{data.description}</Text>
            <Box margin="10">
                <ImageGallery showThumbnails="false" items={images}></ImageGallery>
            </Box>
        </div>
    )
}
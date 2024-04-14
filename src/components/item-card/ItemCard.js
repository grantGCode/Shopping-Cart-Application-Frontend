import {useContext} from "react"
import { ShoppingCartContext } from '../../CartContext'
import { getProductData } from '../../productStore'
import { 
    Form, 
    Card,
    Info, 
    Title, 
    Quantity, 
    RemoveButton 
} from "./ItemCard.styled";

function ItemCard({item}) {
    const cartContext = useContext(ShoppingCartContext);

    const prodRef = getProductData(item.id)


    return(
        <Form>
            <Card>
                <Info>
                    <Title>{prodRef.title}</Title>
                    <Quantity>{`x${item.quantity}`}</Quantity>
                </Info>
                <RemoveButton
                    onClick={() => {cartContext.removeOneItem(item)}}
                >
                    - Remove From Cart
                </RemoveButton>
            </Card>
        </Form>
    )
}

export default ItemCard
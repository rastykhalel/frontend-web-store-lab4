import {
    Button,
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle,
} from 'reactstrap';

import { Product } from '../api/models/Product';

export interface ProductCardProps {
    product: Product;
    addToCart: (product: Product) => void;
}

export const ProductCard = ({
    product,
    addToCart,
    ...props
}: ProductCardProps) => {
    return(
        <Card outline>
            <img src={product.image_url} />
            <CardBody>
                <CardTitle tag="h5">{product.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">${product.price}</CardSubtitle>
            </CardBody>
            <CardText>{product.description}</CardText>
            <Button onClick={() => { addToCart(product) }}>Add to cart</Button>
        </Card>
    );
};

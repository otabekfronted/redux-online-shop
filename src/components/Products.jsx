// components/Products.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productsSlice";
import { Button, Card, Col, Row } from "antd";
import { addToCart } from "../features/cartSlice";

const Products = () => {
    const dispatch = useDispatch();
    const { products, status, error } = useSelector((state) => state.products);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchProducts());
        }
    }, [dispatch, status]);

    if (status === "loading") return <p>Loading...</p>;
    if (status === "failed") return <p>Error: {error}</p>;

    return (
        <Row gutter={16}>
            {products.data &&
                products.data.map((product) => (
                    <Col span={8} key={product.id}>
                        <Card
                            title={product.name}
                            extra={
                                <Button
                                    onClick={() => dispatch(addToCart(product))}
                                >
                                    Add to Cart
                                </Button>
                            }
                            cover={
                                <img
                                    alt={product.name}
                                    src={product.imageURL}
                                />
                            }
                        >
                            <p>{product.price}$</p>
                        </Card>
                    </Col>
                ))}
        </Row>
    );
};

export default Products;

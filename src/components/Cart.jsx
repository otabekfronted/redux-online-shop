// components/Cart.js
import { useDispatch, useSelector } from "react-redux";
import { Button, List, Typography } from "antd";
import { removeFromCart } from "../features/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);

    return (
        <div>
            <Typography.Title level={2}>Shopping Cart</Typography.Title>
            <List
                itemLayout="horizontal"
                dataSource={cart}
                renderItem={(item) => (
                    <List.Item
                        actions={[
                            <Button
                                onClick={() => dispatch(removeFromCart(item))}
                            >
                                Remove
                            </Button>,
                        ]}
                    >
                        <List.Item.Meta
                            title={item.name}
                            description={`${item.price}$`}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};

export default Cart;

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Container, Col, Row, Dropdown, DropdownButton, Button } from "react-bootstrap";

const ProductDetail = () => {
    let { id } = useParams();
    const [product, setProduct] = useState(null);
    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/minukHwang/hnm-hompage/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);
    };
    useEffect(() => {
        getProductDetail();
    }, []);
    return (
        <div>
            <Container>
                <Row>
                    <Col className="product-img">
                        <img src={product?.img} alt="" />
                    </Col>
                    <Col className="detail-area">
                        <div>{product?.title}</div>
                        <div>₩{product?.price}</div>
                        <div>{product?.choice ? "Concious Choice" : ""}</div>
                        <div>{product?.new ? "신상품" : ""}</div>
                        <DropdownButton
                            id="dropdown-basic-button"
                            title="Size"
                            className="drop-down"
                        >
                            {product?.size.map((size, index) => (
                                <Dropdown.Item href="#/action-1" key={index}>
                                    {size}
                                </Dropdown.Item>
                            ))}
                        </DropdownButton>
                        <Button variant="dark">Add to Cart</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductDetail;

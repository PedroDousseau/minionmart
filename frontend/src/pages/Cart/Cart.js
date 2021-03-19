import React, { useState } from 'react';
import CartProductList from '../../components/CartProductList/CartProductList';
import './Cart.css'
import { useShopContext } from '../../contexts/shop';
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import BasicButton from '../../components/BasicButton/BasicButton';
import { useAuthContext } from '../../contexts/auth';
import { useHistory } from 'react-router';
import { createOrder } from '../../api/ordersService';
import { Modal, Button } from 'react-bootstrap';


export default function Cart() {

    const { isAuthenticated } = useAuthContext();
    const history = useHistory();

    if(!isAuthenticated) history.replace('/login');

    const { userCart, setUserCart, setUserOrders } = useShopContext();

    const [modalShow, setModalShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const totalItems = userCart.reduce((acc, cur) => {
        return (acc + cur.amount)
    }, 0)

    async function shop() {
        setIsLoading(true);
        await createOrder(userCart, setUserCart, setUserOrders);
        setModalShow(true);
        setIsLoading(false);
    }

    const renderCartDetails = (
        <div className="Cart_orderColumn">
        <div className="Cart_orderColumnContent">
            <OrderDetails
                order={userCart}
            />

            <BasicButton
            color = "#FFF"
            bgColor = "#0A75BC"
            onClick = {() => {shop()}}
            isLoading = {isLoading}
            >
                Finalizar compra
            </BasicButton>
        </div>
    </div>
    );

        const renderModal = (
            <Modal
            show={modalShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title className="Cart_modalTitle" id="contained-modal-title-vcenter">
                Parabéns! Seu pedido foi reservado com sucesso.
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className="Cart_modalSubtitle">Um email foi enviado para você com as informações do pedido.</p>
            </Modal.Body>
            <Modal.Footer>
            <Button style={{backgroundColor: "#0A75BC"}} variant="primary" onClick={() => setModalShow(false)}>
        Fechar
      </Button>
            </Modal.Footer>
          </Modal>
        );

    return (
        <div className="Cart_container">
            <div className="Cart_title">Carrinho</div>
            <p className="Cart_amountLabel">{totalItems} {totalItems === 1 ? 'item' : 'itens'} </p>
            
            {renderModal}

            <div className="Cart_row">
                <CartProductList />
                {totalItems > 0 ? renderCartDetails : <></>}
            </div>            
        </div>
    )
}
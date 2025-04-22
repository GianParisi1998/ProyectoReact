import React from 'react';

function CartWidget() {
  return (
    <div className="position-relative d-inline-flex">
      <i className="fas fa-shopping-cart text-light fs-4"></i>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        3
        <span className="visually-hidden">items en carrito</span>
      </span>
    </div>
  );
}

export default CartWidget;

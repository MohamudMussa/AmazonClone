import React from 'react'
import '../style/Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../data/StateProvider";
import { getBasketTotal } from "../data/Reducer";
import { useHistory } from "react-router-dom";





const Subtotal = () => {

    const [{ basket }, dispatch] = useStateValue();

    const history = useHistory();


    return (
        <div className="subtotal">

            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>

                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
          </small>
                    </>
                )}


                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />


            <button> Proceed to checkout </button>

        </div >
    )
}

export default Subtotal

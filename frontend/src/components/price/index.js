import './style.scss';

import {useSelector} from "react-redux";

function Price() {
const {price} = useSelector(state => state);

  return (
    <div className="price_container">
      <h1>$ {price?.reduce((acc, value)=>acc+value).toFixed(2)}</h1>
    </div>
  );
}

export default Price;

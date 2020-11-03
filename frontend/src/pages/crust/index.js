import {useHistory} from 'react-router-dom'

import Option from '../../components/option';
import Price from '../../components/price';

import PizzaThin from '../../assets/pizza-thin.svg';
import PizzaThick from '../../assets/pizza-thick.svg';

import {setCrust,setPage,setValue} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import './style.scss';

function Crust() {
  const dispatch = useDispatch();
  const {crust} = useSelector(state => state);
  const history = useHistory();
  const optionsCrust = [
    {type:"thin",value:2},
    {type:"thick",value:4}
  ]
  const select = (type,typeValue) => {
    
    dispatch(setValue(typeValue,1))
    dispatch(setCrust(type))
    dispatch(setPage("toppings"))
    history.push('/toppings');
  }
  return (
    <div className="main_container">
      <header className="main_header">
        <h2 className="main_title">pick the crust</h2>
        <p>Choose what kind of crust your prefer.</p>
      </header>
      <div className="option_content">
      
       <Option onClick={()=> select(optionsCrust[0].type, optionsCrust[0].value)} selected={crust===optionsCrust[0].type?true:false} name={optionsCrust[0].type} icon={PizzaThin} size={80} value={optionsCrust[0].value}/>
       <Option onClick={()=> select(optionsCrust[1].type, optionsCrust[1].value)} selected={crust===optionsCrust[1].type?true:false} name={optionsCrust[1].type} icon={PizzaThick} size={80} value={optionsCrust[1].value}/>
      
      </div>
      <Price/>
    </div>
  );
}

export default Crust;

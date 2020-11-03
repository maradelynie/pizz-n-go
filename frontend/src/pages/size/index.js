import {useHistory} from 'react-router-dom'

import Option from '../../components/option';
import Price from '../../components/price';

import Pizza from '../../assets/pizza.svg';

import {setSize,setPage,setValue,setMax} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import './style.scss';

function Size() {
  const dispatch = useDispatch();
  const {size,price} = useSelector(state => state);
  const history = useHistory();
  const optionsSize = [
    {type:"small",value:8},
    {type:"medium",value:10},
    {type:"large",value:12}
  ]

  const select = (type,typeValue) => {
    const toppingsSizeMax = {
      small: 5,
      medium: 7,
      large: 9
    }
    dispatch(setMax(toppingsSizeMax[type]))

    dispatch(setValue(typeValue,0))
    dispatch(setSize(type))
    dispatch(setPage("crust"))
    history.push('/crust');
  }
  return (
    <div className="main_container">
      <header className="main_header">
        <h2 className="main_title">pick the size</h2>
        <p>Choose the size of your pizza.</p>
      </header>
      <div className="option_content">
      {optionsSize.map(option => {
        return <Option onClick={()=> select(option.type, option.value)} selected={size===option.type?true:false} name={option.type} icon={Pizza} size={option.value*10} value={option.value}/>
      })}
      </div>
      <Price price={price}/>
    </div>
  );
}

export default Size;

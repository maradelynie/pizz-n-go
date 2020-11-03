import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom'

import OptionList from '../../components/optionList';
import Price from '../../components/price';

import {setToppings,setPage,setValue} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import './style.scss';

  
function Toppings() {
  const dispatch = useDispatch();
  const {toppings, toppingsMax} = useSelector(state => state);
  const history = useHistory();

  const toppingsList = [
    {name:"Pepperoni", img:"https://scontent.ffor15-1.fna.fbcdn.net/v/t1.0-9/48249875_1171455869696884_8116133578229678080_n.jpg?_nc_cat=107&ccb=2&_nc_sid=2c4854&_nc_ohc=qNnHNAXauwYAX8S-_Od&_nc_ht=scontent.ffor15-1.fna&oh=2d89bf659e2e1cb41e49fe360661dc95&oe=5FC759E8"},
    {name:"Mushrooms", img:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/health-benefits-of-mushrooms-guide-700-350-349bded.jpg?webp=true&quality=90&resize=386%2C350"},
    {name:"Onions", img:"https://www.thechronicleherald.ca/media/photologue/photos/cache/Screen_Shot_2020-08-04_at_4.30.33_PM_large.png"},
    {name:"Sausage", img:"https://mrecipes.com/wp-content/uploads/2018/09/featured-smoked-sausages.jpg"},
    {name:"Bacon", img:"https://exame.com/wp-content/uploads/2020/06/bacon-in-natura.jpg?quality=70&strip=info&resize=680,453"},
    {name:"Extra cheese", img:"https://bilder.t-online.de/b/81/12/13/34/id_81121334/610/tid_da/cheddar-wird-laut-expertin-immer-beliebter-.jpg"},
    {name:"Black olives", img:"https://static1.squarespace.com/static/5a71e1646957dafbfdbdcc5a/5a9daf3de2c4837136486e21/5ad60b98758d4681c2ff7cce/1523977175854/Screen+Shot+2018-04-12+at+5.29.29+PM.png?format=1500w"},
    {name:"Green peppers", img:"https://img.apmcdn.org/356be4b076ed65d1504b6bffc641ba439b8230cb/uncropped/01cee3-splendid-table-green-bell-peppers-lede.jpg"},
    {name:"Pineapple", img:"https://i0.wp.com/www.eatthis.com/wp-content/uploads//media/images/ext/375877883/pineapple-sliced.jpg?resize=640%2C360&ssl=1"},
    {name:"Spinach", img:"http://www.acs.org/content/acs/en/pressroom/newsreleases/2015/august/spinach/_jcr_content/newsReleaseContent/columnsbootstrap/column1/image.img.jpg/1439985888861.jpg"}
  ]

  useEffect(() => {
    dispatch(setToppings(toppings.slice(0,toppingsMax)))
  }, [])

  const select = async (type) => {
    await addRemoveToppings(type)


  }
  const isSelected = (topping) => {
    return toppings.includes(topping)
  }

  const addRemoveToppings = (topping) => {
    if(!isSelected(topping)){
      if(toppings.length<toppingsMax){
        dispatch(setToppings([...toppings,topping]))
        chargeExtra([...toppings,topping])
      }else{
        const warning = document.querySelector("#max_warning");
        warning.classList.add("main_textAnimation")
        setTimeout(() => {
          warning.classList.remove("main_textAnimation")
        }, 1000); 

      }
    }else{
      dispatch(setToppings(toppings.filter(item=>item!==topping)))
      chargeExtra(toppings.filter(item=>item!==topping))
    }
  }

  const chargeExtra = (list) => {
    if(list.length>3)dispatch(setValue((list.length-3)*.5,2))
    else dispatch(setValue(0,2))
  }

  const confirm = () => {
    dispatch(setPage("confirm"))
    history.push('/confirm');
  }

  return (
    <div className="main_container">
      <header className="main_header">
        <h2 className="main_title">Pick the toppigns</h2>
        <p id="max_warning">You can choose till 3 free toppings and {toppingsMax} max.</p>
      </header>
      <div className="optionList_content">
      {toppingsList.map(topping =>
         <OptionList data={topping} onClick={()=>select(topping.name)} selected={() => isSelected(topping.name)}/>
      )}
      </div>
      <button onClick={confirm} className="optionList_confirm">
        cofirm toppings
      </button>
      <Price/>
    </div>
  );
}

export default Toppings;

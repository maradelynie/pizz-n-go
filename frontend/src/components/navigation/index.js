import React,{useEffect} from 'react';

import './style.scss';
import {useHistory} from 'react-router-dom'

import {setPage} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

export default function Navigation() {
  const history = useHistory();
  const dispatch = useDispatch();
  const {page} = useSelector(state => state);

  useEffect(() => {
    const CurrentPage = window.location.pathname;
    dispatch(setPage(CurrentPage.slice(1)))
      
  }, [])
  const navigate = (route) => {
    dispatch(setPage(route))
    history.push("/"+route);
  }

  return (
    <nav className="navigation_container">
      <div onClick={() => navigate("size")} className={page===""||page==="size"?"menu_item-active":"menu_item"} >size</div>
      <div onClick={() => navigate("crust")} className={page==="crust"?"menu_item-active":"menu_item"} >crust</div>
      <div onClick={() => navigate("toppings")} className={page==="toppings"?"menu_item-active":"menu_item"} >toppings</div>
      <div onClick={() => navigate("confirm")} className={page==="confirm"?"menu_item-active":"menu_item"} >confirm</div>
    </nav>
  );
}



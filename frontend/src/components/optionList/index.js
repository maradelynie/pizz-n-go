import './style.scss';

function Option({data, selected,onClick}) {
  return (
    
    <div onClick={onClick} className={selected()?"optionList_container-active":"optionList_container"}>
      <img src={data.img} alt={data.name}></img>{data.name}
    </div>
  );
}

export default Option;

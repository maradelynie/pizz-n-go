import './style.scss';

function Option({icon, name, value, size,onClick, selected}) {
  return (
    <div onClick={onClick} className={selected?"option_container-active":"option_container"}>
      <object className="option_img" aria-label={"icon "+name} width={size+"em"} data={icon} type="image/svg+xml"/> 
      <p className="option_title" >{name} ${value}</p>
    </div>
  );
}

export default Option;

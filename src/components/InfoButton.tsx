interface Props {
    children: string;
    color?: string;
    onClick: () => void; }


const InfoButton = ({children, onClick, color}: Props) => {
  return (
    <button 
      type="button" 
      className={"btn btn-" + color}
      onClick={onClick}>
        {children}
    </button>
  )
}

export default InfoButton
import { useEffect, useState } from 'react';
import "./drop.css"

function CustomDropdown({ options, updateCategory }) {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState();

  const handleState = (option) => {
    setCategory(option?.id)
    setIsOpen(!isOpen)
    updateCategory(category);
  }
  const handleStateX = () => {
    updateCategory(category);
  }
  useEffect(()=> {
    handleStateX();
  }, [category])

  return (
    <div className="dropdown">
      <div className="dropbtn" onClick={() => setIsOpen(!isOpen)}>
        <span>Category</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="9" viewBox="0 0 13 9" fill="none"><path d="M1 1L6.5 7L11.5 1" stroke="white" stroke-width="2" />
        </svg>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          {options?.map((option, index) => (
            <div key={index} onClick={(option) => {handleState(option)}}>{option?.name}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomDropdown;

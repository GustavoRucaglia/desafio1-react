import { InputContainer} from './style.js';

const Imput = ({value}) => {
    return (
      <InputContainer>
        <input type="text" disabled value={value} />
      </InputContainer>
    );
  }
  
  export default Imput;
  
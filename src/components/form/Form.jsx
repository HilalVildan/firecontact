import {
  H3,
  FormContainer,
  Input,
  StyledButton,
  WrapperGrid,
  Logo,
  StyledSelect,
  FormDiv,
} from "./FormStyles";



const Form = ({info, setInfo, handleSubmit, isAdd}) => {

  const options = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];
  
  const handleChange = (e) => {
    // const name=e.target.name;
    // const value=e.target.value;
    // Yukarıdaki işlemlerin kısayolu:
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
 
    e.preventDefault();

    
  };
 

  const handleSelectChange = (v) =>{
    setInfo({ ...info, "gender": v.value });

  }

  return (
    <FormDiv>
      <Logo>
        <i>{"<Hilal/>"}</i>
        <span> Design</span>
      </Logo>

      <H3>Email Us</H3>
      <FormContainer onSubmit={handleSubmit}>
        <WrapperGrid>
          <i className="fa-solid fa-user"></i>
         
          <Input
            type="text"
            name="username"
            placeholder="name"
            value={info.username}
            onChange={handleChange}
          />
        </WrapperGrid>
        <WrapperGrid>
          <i className="fa-solid fa-phone"></i>
          <Input
            type="text"
            name="phoneNumber"
            placeholder="phone number"
            value={info.phoneNumber}
            onChange={handleChange}
          />
        </WrapperGrid>
        <WrapperGrid>
          <StyledSelect
            classNamePrefix="Select"
            options={options}
            // value={{ value: "gender", label: "Gender" }}
            onChange={handleSelectChange}
          />
        </WrapperGrid>
        <WrapperGrid>
          <StyledButton type="submit">{isAdd}</StyledButton>
        </WrapperGrid>
      </FormContainer>
    </FormDiv>
  );
};

export default Form;

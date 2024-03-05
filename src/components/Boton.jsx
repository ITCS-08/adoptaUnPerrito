import Button from 'react-bootstrap/Button';


const Boton = ({colorButton, textButton}) => {

    //  const {colorButton, textButton} = props;

    return(
        <>
            <Button {colorButton}> {textButton} </Button> 
              
        </>
    );
};
export default Boton;
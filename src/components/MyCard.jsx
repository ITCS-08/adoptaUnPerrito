import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Tags from './Tags.jsx'
import Badge from 'react-bootstrap/Badge';



const MyCard = (props) => {

    return (

        <>
            <Card className="mb-3 p-3" style={{ width: "21rem" }}>
                {props.text}
                <Badge bg={props.color}>
                    <Card.Img variant="top" src={props.image} />
                </Badge>
                <Card.Body>
                    <Card.Title className="mb-4">Categoria: {props.title}</Card.Title>
                </Card.Body>
                <Button color={props.colorButton}> {props.textButton} </Button>
            </Card>
        </>

    );
};
export default MyCard;
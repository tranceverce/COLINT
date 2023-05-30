import Card from 'react-bootstrap/Card';


function Cards() {
    return (
        <div style={{
            display:'flex',
            flexDirection:"row",
            marginTop : "50px"
        }}>
        <Card border="primary" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>CHARACTER</Card.Title>
          <Card.Text>
            COUNT
          </Card.Text>
        </Card.Body>
      </Card>

      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>WORD</Card.Title>
          <Card.Text>
            COUNT
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    );
  }
  
  export default Cards;
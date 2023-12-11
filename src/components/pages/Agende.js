import { Col, Container, Row, FormGroup, Label, Input, Button } from "reactstrap";
function Agende() {
  return(
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col className="d-flex justify-content-center m-3 p-0">
            <FormGroup className="flex-grow-1">
              <Label
                for="exampleSelect"
                sm={2}
              >
                Select
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                >
                  <option>
                    1
                  </option>
                  <option>
                    2
                  </option>
                  <option>
                    3
                  </option>
                  <option>
                    4
                  </option>
                  <option>
                    5
                  </option>
                </Input>
              </Col>
            </FormGroup>
            
            <FormGroup className="flex-grow-1">
              <Label
                for="exampleSelect"
                sm={2}
              >
                Select
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                >
                  <option>
                    1
                  </option>
                  <option>
                    2
                  </option>
                  <option>
                    3
                  </option>
                  <option>
                    4
                  </option>
                  <option>
                    5
                  </option>
                </Input>
              </Col>
            </FormGroup>
            <Button color="primary" className=""> Pesquisar </Button>
        </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Agende
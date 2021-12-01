import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function HomePage() {
    return (
        <div>
            <Container fluid='xxl'>
                <Row>
                    <Col>
                        <h1>My Finances</h1>
                        <h5>Make sure to add a category before adding line items!</h5>
                        <Link to="/BalanceSheet">View Finances By Category</Link><br />
                        <Link to="/AllLineItems">View All Line Items</Link><br />
                        <Link to="/ExpenseVisual">Visualization of My Expenses</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomePage

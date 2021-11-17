import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';


const { Header, Footer, Sider, Content } = Layout;

function HomePage() {
    return (
        <div>
            <Layout>
                <Header>
                    <h1>My Finances</h1>
                    <h5>Make sure to add a category before adding line items!</h5>
                </Header>
                <Content>
                    <Link to="/BalanceSheet">View Finances By Catergory</Link><br />
                    <Link to="/AllLineItems">View All Line Items</Link><br />
                    <Link to="/ExpenseVisual">Visualization of My Expenses</Link>
                </Content>
            </Layout>
        </div>
    )
}

export default HomePage

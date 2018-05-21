import React, { Component } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Bitcoin.css';
import Button from 'antd/lib/button';
import { Select, Col, Row } from 'antd';
const Option = Select.Option;

export class Bitcoin extends Component {
    state = {
        data: [{
            name: 'USD',
            value: 0,
        }],
        selected: this.props.match.params.currency ? this.props.match.params.currency : 'USD',
        currency: 0,
        type: 'real',
        url: 'https://api.coindesk.com/v1/bpi/currentprice.json'
    }

    handleChange = value => {
        this.reset(value)
        this.handleUrl(value)
        this.loadData()
    }

    componentDidMount() {
        this.intervalId = setInterval(
            () => this.loadData()
            , 4500);
        this.loadData(); // also load one immediatel
    }

    reset = value => {
        this.setState(
            {
                selected: value,
                data: [{}],
                currency: 0
            });
    }

    async loadData() {
        const response = await fetch(this.state.url);
        const data = await response.json();
        if (this.state.type === 'real') {
            this.setState(
                {
                    data: [...this.state.data, {
                        name: data.bpi.USD.code,
                        value: data.bpi.USD.rate_float,
                    }, {
                        name: data.bpi.GBP.code,
                        value: data.bpi.GBP.rate_float
                    }, {
                        name: data.bpi.EUR.code,
                        value: data.bpi.EUR.rate_float
                    }]

                })
            this.lastedCurrency()

        } else {
            this.reset(this.state.selected)
            let list = []
            let currency = 0;
            const abc = Object.entries(data.bpi).map(([key, value]) => {
                list.push({
                    name: key,
                    value: value
                })
                this.currency = value
            })
            this.setState({
                data: list,
                currency: this.currency
            })

        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
        clearInterval(this.intervalCurrency);
    }

    lastedCurrency = () => {
        let newArray = this.state.data.filter(currency => (currency.name === this.state.selected))
        this.setState({
            currency: newArray[newArray.length - 1].value
        })
    }

    handleUrl = (selected) => e => {
        let type = e.target.value
        this.reset(this.state.selected)
        this.setState({
            url: type === "real" ? "https://api.coindesk.com/v1/bpi/currentprice.json" : "https://api.coindesk.com/v1/bpi/historical/close.json?currency=" + selected,
            type: type
        })
    }

    render() {

        return (
            <div >
                <Col md={5} ></Col>
                <div>{this.state.currency > 0 ?
                    <div>
                        <Row>
                            <Col md={8}>
                                <h2 className="mt-2">Bitcoin Price Checker</h2>
                                <Button.Group className="my-2">
                                    <Button type="primary" value="real" onClick={this.handleUrl(this.state.selected)}>
                                        RealTime
                                    </Button>
                                    <Button type="primary" value="history" onClick={this.handleUrl(this.state.selected)}>
                                        Historical
                                    </Button>
                                </Button.Group>
                                <Row>
                                    <Select
                                        showSearch
                                        style={{ width: 200 }}
                                        placeholder="Select Currency "
                                        optionFilterProp="children"
                                        defaultValue={this.state.selected}
                                        onChange={this.handleChange}
                                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                    >
                                        <Option value="USD">USD</Option>
                                        <Option value="GBP">GBP</Option>
                                        <Option value="EUR">EUR</Option>
                                    </Select>
                                    <p className="float-right"> {this.state.selected} PRICE :
                                        {
                                            this.state.currency

                                        }
                                    </p>

                                </Row>
                                <LineChart width={730} height={250}
                                    data={this.state.type === 'real'
                                        ? this.state.data.filter(currency => (currency.name === this.state.selected))
                                        : this.state.data
                                    }
                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />

                                    <Tooltip
                                        cursor={<Button type="primary" shape="circle" loading />}
                                    />
                                    <Legend />
                                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                                </LineChart>
                            </Col>

                        </Row>

                    </div>
                    :
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '50%', paddingTop: 230 }} className="" >
                        <Button className="float-center" type="primary" shape="circle" loading />
                    </div>
                }</div>
                <Col md={5}></Col>

            </div >
        )
    }
}
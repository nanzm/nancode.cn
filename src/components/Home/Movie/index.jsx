import React, {Component} from 'react';
import "./index.less"
import api from "@/api/movie";
import {Layout, Tag, Rate} from 'zent';

const {Row, Col} = Layout;


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            total: 0,
        };
    }

    componentDidMount() {
        api.list().then((res) => {
            res.data.code === 0 && this.setState({
                list: res.data.data.rows,
                total: res.data.data.count
            });
        });
    }
    handleClick(){

    }

    render() {
        return (
            <div className="">
                <Row>
                    {
                        this.state.list.length > 0 && this.state.list.map((item) => {
                            return <Col className="movieItem" span={4} key={item.doubanId} onClick={this.handleClick}>
                                <div className="box mask">
                                    <div className="img"><img src={item.posterKey} alt=""/></div>
                                    <div className="info">
                                        <h3>{item.title}</h3>
                                        <Tag className="year" color="#778899" outline rounded={false}>2018</Tag>
                                        <Tag className="movieTypes" color="#778899" rounded={false}>剧情</Tag>
                                        <Tag className="movieTypes" color="#778899" rounded={false}>犯罪</Tag>
                                        <div className="movieRate">
                                            <Rate disabled allowHalf value={2} onChange={() => {
                                            }}/>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        })
                    }
                </Row>
            </div>
        );
    }
}

export default App;

import React, {Component} from 'react';
import "./index.less"
import api from "@/api/movie";
import {Layout, Tag, Rate} from 'zent';
import {Modal} from 'antd';
import Chimee from 'chimee';

const {Row, Col} = Layout;

class App extends Component {
    state = {
        visible: false,
        modalData: {},
        list: [],
        total: 0
    }

    showModal = (item) => {
        this.setState({
            visible: true,
            modalData: item
        });
    }
    hideModal = () => {
        this.setState({
            visible: false,
        });
    }

    componentDidMount() {
        api.list().then((res) => {
            res.data.code === 0 && this.setState({
                list: res.data.data.rows,
                total: res.data.data.count
            });
        });
        // const chimee = new Chimee('#dplaye');
        // chimee.on('play', () => console.log('play!!'));
        // chimee.load('http://cdn.toxicjohann.com/lostStar.mp4');
        // chimee.play(); // play!!
    }

    render() {
        return (
            <div className="">
                <Row>
                    {
                        this.state.list.length > 0 && this.state.list.map((item) => {
                            return <Col className="movieItem" span={4} key={item.doubanId} onClick={() => {
                                this.showModal(item)
                            }}>
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

                <Modal
                    title={this.state.modalData.title}
                    visible={this.state.visible}
                    onOk={this.hideModal}
                    onCancel={this.hideModal}
                    footer={null}>
                    <div id="dplaye"></div>
                    <p>{this.state.modalData.summary}</p>
                </Modal>
            </div>
        );
    }
}

export default App;

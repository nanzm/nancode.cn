import React, {Component} from 'react';
import "./index.less"

import {Layout} from 'zent';

const {Row, Col} = Layout;


// doubanId: "27068596",
// rate: 9,
// title: "Live",
// summary: "此剧以警察局里发生的事件为中心，讲述努力维护日常重要价值及正义的警察之喜怒哀乐的故事。",
// video: null,
// poster: "https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2515942970.jpg",
// cover: null,
// videoKey: null,
// posterKey: "http://cloud.nancode.cn/UOKNPLUHc2WZsXr2NDWYC.jpg",
// coverKey: null,
// rawTitle: "살다",
// movieTypes: "剧情,犯罪",
// year: "2018",
// created_at: "2018-03-14T08:59:07.000Z",
// updated_at: "2018-03-14T08:59:07.000Z"


class App extends Component {
    render() {
        return (
            <div className="">
                <Row>
                    <Col className="movieItem" span={4}>
                        <div className="box">
                            <div className="img"><img src="http://cloud.nancode.cn/UOKNPLUHc2WZsXr2NDWYC.jpg" alt=""/></div>
                            <div className="info">
                                <h3>Live 살다</h3>
                            </div>
                        </div>
                    </Col>


                </Row>
            </div>
        );
    }
}

export default App;

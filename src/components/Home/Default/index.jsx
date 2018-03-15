import React, {Component} from 'react';
import { Button } from 'antd';



class App extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h1>默认</h1>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
            </div>
        );
    }
}

export default App;

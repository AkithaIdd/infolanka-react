import {Carousel, Col, Row} from 'antd';
import {Component} from "react";
import React from 'react';
// import c1 from '../../../../src/assests/c1.jpg';
// import c2 from '../../../../src/assests/c2.jpg';

class SlideShow extends Component {
    render() {
        return <div style={{width:"'100%"}}>
            <Row>
                <Carousel autoplay>
                    <div>
                        <img src="https://i2.wp.com/africarm.org/site/wp-content/uploads/2014/08/Breaking_News11.jpg"/>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <img src="https://www.newsfirst.lk/wp-content/uploads/2018/03/Breaking-news-4-3-1.jpg" />
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>
            </Row>
        </div>
    }
}
export default SlideShow;
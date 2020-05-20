import React from 'react';
import { Button,Affix,Alert,Icon,Row,Col,Breadcrumb,Arrange} from '@terminus/nusi';

const layout1 = {
  marginLeft: 0,
  marginRight: 0,
  middle: 20,
  marginBottom: 0,
  marginTop: 0,
  align: 'vertical',
}



function App() {
  return (
    <div>
      <Affix offsetTop={200}>
        <Button type="primary">Affix</Button>
      </Affix>
      <Alert message="hahha" showIncon="true"></Alert>
      <Icon type="star" />
      <Row>
        <Col span={18} push={6}>col-18 col-push-6</Col>
        <Col span={6} pull={18}>col-6 col-pull-18</Col>
        <Col span={12}>
          <Button type="primary">我占据了12/24</Button>
        </Col>
        <Col span={8}>
          <Button type="warning">我占据了8/24</Button>
        </Col>
      </Row>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="#">Application Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="#">Application List</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>
    {/* 行内组合 */}
    <React.Fragment>
      <div style={{ border: '1px solid #eee', margin: '50px', padding: '20px'}}>
        <Arrange
          key='1'
          style={{width: '70px'}}
          {...layout1}
          className='arrange'>
          <Button key='search' type='primary'>搜索</Button>
          <Button key='cancel' type='info'>取消</Button>
        </Arrange>
      </div>
    </React.Fragment>
    </div>
    
  );
}

export default App;

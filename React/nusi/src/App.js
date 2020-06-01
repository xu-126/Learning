import React,{useState} from 'react';
import { Drawer,Button,Affix,Alert,Icon,Row,Col,Breadcrumb,Arrange,Toast, Title,Table,Tag,Container,Avatar,Badge, Divider} from '@terminus/nusi';

const layout1 = {
  marginLeft: 0,
  marginRight: 0,
  middle: 20,
  marginBottom: 0,
  marginTop: 0,
  align: 'vertical',
}
Toast.config({
    top: 200
  });
const success = () => {
  Toast.success("操作成功!")
}
const close = () => {
  Toast.destroy()
}
const normal = () => {
  Toast.success('成功提示', [4.5], () => {},
   [<a onClick={close}><Button type="warning">确定</Button></a>]);
   
}

// 以下为Table中的数据
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',// 列在数据项中对应的key
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'pink' : 'purple';
          if (tag === 'loser') {
            color = 'red';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  }
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];


function App() {
  const [visible,setVisible] = useState(false)
  return (
    <div>
      <Title title="抽屉-Drawer"></Title>
      <Button type="primary" onClick={()=>{setVisible(true)}}>
          Open
        </Button>
      <Drawer
          title="Basic Drawer"
          closable={true}
          onClose={()=>{setVisible(false)}}
          visible={visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
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
    </React.Fragment><br/>
    <Title tips="标题介绍" title='弹出提示Toast' showDivider={false}/>
    <Button onClick={success}>点击操作</Button>
    <Button onClick={normal}>可操作反馈</Button><br/>
    <Title title='Container-Table-Tag'/>
    <Container >
      <Table columns={columns} dataSource={data}></Table>
    </Container>
    <Title title="Avatar-Badge"></Title>
    <Badge count={1}>
      <Avatar shape="square" icon="user"></Avatar>
    </Badge>
    <span style={{marginLeft:24}}>
      <Badge dot >
        <Avatar shape="cicle" chars="佳"></Avatar>
      </Badge>
    </span>
    <Divider type="vertical"></Divider>
   
    </div>
   
    
  );
}

export default App;

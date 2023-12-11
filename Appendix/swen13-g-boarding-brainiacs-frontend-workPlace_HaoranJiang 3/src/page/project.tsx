import {useState} from 'react';
import {Button, Input, Table, Tag, Pagination} from 'antd';
import {
  PlusOutlined,
  SearchOutlined,
  ArrowDownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import type {ColumnsType} from 'antd/es/table';
import type {PaginationProps} from 'antd';
import {useNavigate} from 'react-router-dom';
import Vector from '../static/img/vector.png';
import Lines from '../static/img/lines.png';
interface DataType {
  'Project ID': string;
  'Project Name': string;
  'Airport Name': string;
  Status: string;
}
function Index() {
  const navigate = useNavigate()
  const itemRender: PaginationProps['itemRender'] = (
    page,
    type,
    originalElement
  ) => {
    if (type === 'prev') {
      return (
        <Button style={{marginRight: 'calc(100vw / 2 - 400px)'}} icon={<ArrowLeftOutlined />}>
          Previous
        </Button>
      );
    }
    if (type === 'next') {
      return (
        <Button style={{marginLeft: 'calc(100vw / 2 - 380px)'}} icon={<ArrowRightOutlined />}>
          Next
        </Button>
      );
    }
    return originalElement;
  };
  const columns: ColumnsType<DataType> = [
    {
      title: () => (
        <span>
          {'Project ID '}
          <ArrowDownOutlined style={{marginLeft: 8}} />
        </span>
      ),
      dataIndex: 'Project ID',
      key: 'Project ID',
    },
    {
      title: () => (
        <span>
          {'Project Name '}
          <ArrowDownOutlined style={{marginLeft: 8}} />
        </span>
      ),
      dataIndex: 'Project Name',
      key: 'Project Name',
    },
    {
      title: () => (
        <span>
          {'Airport Name'}
          <ArrowDownOutlined style={{marginLeft: 8}} />
        </span>
      ),
      dataIndex: 'Airport Name',
      key: 'Airport Name',
    },
    {
      title: 'Status',
      dataIndex: 'Status',
      key: 'Status',
      render: (text, record, index) => (
        <>
          {text === 'Active' ? (
            <Tag color="green">{text}</Tag>
          ) : (
            <Tag color="orange">{text}</Tag>
          )}
        </>
      ),
    },
  ];
  // const [data] = useState([
  //   {
  //     'Project ID': 'AC-7842',
  //     'Project Name': 'Oceanview Airport Gateway',
  //     'Airport Name': 'Melbourne Airport',
  //     Status: 'Active',
  //   },
  //   {
  //     'Project ID': 'AC-7842',
  //     'Project Name': 'Oceanview Airport Gateway',
  //     'Airport Name': 'Melbourne Airport',
  //     Status: 'Disabled',
  //   },
  //   {
  //     'Project ID': 'AC-7842',
  //     'Project Name': 'Oceanview Airport Gateway',
  //     'Airport Name': 'Melbourne Airport',
  //     Status: 'Active',
  //   },
  //   {
  //     'Project ID': 'AC-7842',
  //     'Project Name': 'Oceanview Airport Gateway',
  //     'Airport Name': 'Melbourne Airport',
  //     Status: 'Disabled',
  //   },
  //   {
  //     'Project ID': 'AC-7842',
  //     'Project Name': 'Oceanview Airport Gateway',
  //     'Airport Name': 'Melbourne Airport',
  //     Status: 'Active',
  //   },
  //   {
  //     'Project ID': 'AC-7842',
  //     'Project Name': 'Oceanview Airport Gateway',
  //     'Airport Name': 'Melbourne Airport',
  //     Status: 'Disabled',
  //   },
  //   {
  //     'Project ID': 'AC-7842',
  //     'Project Name': 'Oceanview Airport Gateway',
  //     'Airport Name': 'Melbourne Airport',
  //     Status: 'Active',
  //   },
  //   {
  //     'Project ID': 'AC-7842',
  //     'Project Name': 'Oceanview Airport Gateway',
  //     'Airport Name': 'Melbourne Airport',
  //     Status: 'Disabled',
  //   },
  // ]);
  const [data] = useState([])
  const [current, setCurrent] = useState(2);
  const onPageChange:PaginationProps['onChange'] = (pageNumber)=>{
    setCurrent(pageNumber)
  }
  return (
    <div style={{padding: '20px'}}>
      <div style={{padding: '20px 0px 0px 17px', display: 'flex'}}>
        <img
          src={Vector}
          style={{width: '28px', height: '28px', marginRight: '18px'}}
        />
        <div style={{fontSize: '20px', lineHeight: '28px'}}>Project</div>
      </div>
      <div
        style={{
          padding: '20px 16px 19px 24px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{display: 'flex'}}>
            <div style={{fontSize: '16px'}}>Project</div>
            <div
              style={{
                color: '#B54708',
                backgroundColor: '#FFFAEB',
                marginLeft: '10px',
                borderRadius: '20px',
              }}
            >
              7 Projects
            </div>
          </div>
          <div style={{color: '#667085'}}>
            Keep track of the different Projects.
          </div>
        </div>
        <Button
          icon={<PlusOutlined />}
          type="primary"
          style={{color: 'black'}}
          onClick={() => {
            navigate('/app/creatProject')
          }}
        >
          Create Project
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingBottom: '10px',
          justifyContent: 'space-between',
        }}
      >
        <Input
          size="large"
          style={{width: '400px'}}
          placeholder="Search"
          prefix={<SearchOutlined />}
        />
        <Button
          icon={<img style={{marginRight: '10px'}} src={Lines} />}
          size="large"
        >
          Filters
        </Button>
      </div>
      <div style={{width: '100%'}}>
        <Table
          columns={columns}
          dataSource={data}
          scroll={{y: 800}}
          bordered={false}
          pagination={false}
        />
        <div
          style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}
        >
          <Pagination current={current} total={50} itemRender={itemRender} onChange={onPageChange}/>
        </div>
      </div>
    </div>
  );
}

export default Index;

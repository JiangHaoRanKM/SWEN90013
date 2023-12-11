import {Button, Divider, Input, Pagination, Tag} from 'antd';
import {
  ArrowRightOutlined, 
  PlusOutlined, 
  SearchOutlined,
  ArrowLeftOutlined,
} from '@ant-design/icons';
import Layers from '../static/img/layers.png';
import Airport from '../static/img/airport.png';
import Lines from '../static/img/lines.png';
import Badge from '../static/img/badge.png';
import Empty from '../static/img/empty.png';
import type {PaginationProps} from 'antd';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
const {TextArea} = Input

function Index(props: any) {
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
        <Button style={{marginLeft: 'calc(100vw / 2 - 280px)'}} icon={<ArrowRightOutlined />}>
          Next
        </Button>
      );
    }
    return originalElement;
  };
  const [current, setCurrent] = useState(1);
  const onPageChange:PaginationProps['onChange'] = (pageNumber)=>{
    setCurrent(pageNumber)
  }
  return (
    <div style={{padding: '20px', backgroundColor: '#fff'}}>
      <div style={{display: 'flex'}}>
        <img src={Layers} style={{width: '24px', height: '24px', marginRight: '10px'}} />
        <div style={{lineHeight: '24px', fontSize: '23px', marginRight: '10px'}}>Project Management</div>
        <ArrowRightOutlined style={{lineHeight: '30px', fontSize: '20px', marginRight: '10px'}}/>
        <div style={{lineHeight: '24px', fontSize: '23px', marginRight: '10px'}}>View Project</div>
      </div>
      <div>
        <div style={{fontSize: '30px', marginLeft: '8px', marginTop: '20px'}}>
          Security Screening Area Expansion
        </div>
        <div style={{marginLeft: '8px',display:'flex'}}>
          <img src={Airport} style={{width: '30px', height: '30px', }}/>
          <div style={{marginLeft: '5px', lineHeight: '30px'}}>Melbourne Airport</div>
          <Tag style={{marginLeft: '5px', marginTop: '4px', height: '20px'}} color='green'>Active</Tag>
        </div>
        <div style={{height: '30px', marginLeft: '8px', lineHeight: '30px', color: '#FACC15'}}>MEL Config #4</div>
        <div style={{fontSize: '15px', marginLeft: '8px', marginTop: '10px', color: '#667085', width: '700px'}}>
        The security screening area expansion project would involve the expansion of the 
        existing security screening area at Melbourne Airport to accommodate more passengers 
        and improve the speed and efficiency of security screening operations.
        </div>
      </div>
      <div style={{width: '100%', height: '377px', border: '1px solid #ccc', padding: '20px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>
            <div style={{display: 'flex'}}>
              <div style={{color: '#101828',fontSize: '15px'}}>
                Gating Simulations
              </div>
              <img src={Badge}  style={{marginLeft: '10px'}}/>
            </div>
            <div style={{color: '#667085', marginTop: '2px'}}>Manage Gating Simulations</div>
          </div>
          <div><Button icon={<PlusOutlined />} style={{color: '#000'}} type='primary'>Create Simulation</Button></div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
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
        <div style={{height: '220px', display: 'flex', justifyContent:'center', padding: '20px'}}>
          <img src={Empty} style={{height: '132px', width: '512px'}} />
        </div>
        <Pagination current={current} total={10} itemRender={itemRender} onChange={onPageChange}/>
      </div>
      <div style={{width: '100%', height: '377px', border: '1px solid #ccc', padding: '20px', marginTop: '10px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>
            <div style={{display: 'flex'}}>
              <div style={{color: '#101828',fontSize: '15px'}}>
                Airport Gating Configurations 
              </div>
              <img src={Badge}  style={{marginLeft: '10px'}}/>
            </div>
            <div style={{color: '#667085', marginTop: '2px'}}>Manage Gating Configurations</div>
          </div>
          <div><Button icon={<PlusOutlined />} style={{color: '#000'}} type='primary'>Create Configurations</Button></div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
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
        <div style={{height: '220px', display: 'flex', justifyContent:'center', padding: '20px'}}>
          <img src={Empty} style={{height: '132px', width: '512px'}} />
        </div>
        <Pagination current={current} total={10} itemRender={itemRender} onChange={onPageChange}/>
      </div>
      <div style={{width: '100%', height: '377px', border: '1px solid #ccc', padding: '20px', marginTop: '10px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>
            <div style={{display: 'flex'}}>
              <div style={{color: '#101828',fontSize: '15px'}}>
                Aircraft Flight Schedules
              </div>
              <img src={Badge}  style={{marginLeft: '10px'}}/>
            </div>
            <div style={{color: '#667085', marginTop: '2px'}}>Manage Aircraft</div>
          </div>
          <div><Button
            icon={<PlusOutlined />}
            style={{color: '#000'}}
            type='primary'
            onClick={()=>{
              navigate('/app/createSchedule')
            }}
          >Create Flight Schedule</Button></div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
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
        <div style={{height: '220px', display: 'flex', justifyContent:'center', padding: '20px'}}>
          <img src={Empty} style={{height: '132px', width: '512px'}} />
        </div>
        <Pagination current={current} total={10} itemRender={itemRender} onChange={onPageChange}/>
      </div>
    </div>
  );
}

export default Index;

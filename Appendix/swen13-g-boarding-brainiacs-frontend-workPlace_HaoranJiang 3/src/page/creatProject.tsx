import {Button, Divider, Input, Select} from 'antd';
import {ArrowRightOutlined} from '@ant-design/icons';
import Layers from '../static/img/layers.png';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
const {TextArea} = Input;

function Index() {
  const navigate = useNavigate();
  const [name, setName] = useState('Security Screening Area Expansion');
  const [airport] = useState('Melbourne Airport');
  const [comments, setComments] = useState(
    'The security screening area expansion project would involve the expansion of the existing security screening area at Melbourne Airport to accommodate more passengers and improve the speed and efficiency of security screening operations.'
  );
  return (
    <div style={{padding: '20px'}}>
      <div style={{display: 'flex'}}>
        <img src={Layers} style={{width: '24px', height: '24px', marginRight: '10px'}} />
        <div style={{lineHeight: '24px', fontSize: '23px', marginRight: '10px'}}>Project Management</div>
        <ArrowRightOutlined style={{lineHeight: '30px', fontSize: '20px', marginRight: '10px'}}/>
        <div style={{lineHeight: '24px', fontSize: '23px', marginRight: '10px'}}>Create Project</div>
      </div>
      <div>
        <div style={{fontSize: '20px', marginLeft: '8px', marginTop: '20px'}}>
          Create Project
        </div>
        <div style={{fontSize: '15px', marginLeft: '8px', marginTop: '10px', color: '#667085'}}>
          Create a new project to run gating simulations for an airport
        </div>
      </div>
      <Divider />
      <div style={{display: 'flex'}}>
        <span style={{fontSize: '15px', width: '300px', lineHeight: '40px'}}>Name</span>
        <Input
          size="large"
          value={name}
          placeholder=''
          style={{width: '500px'}}
          onChange={(e)=>{
            setName(e.target.value)
          }}
        />
      </div>
      <Divider />
      <Divider />
      <div style={{display: 'flex'}}>
        <span style={{fontSize: '15px', width: '300px', lineHeight: '40px'}}>Airport</span>
        <Select size="large" value={airport} style={{width: '500px'}} ></Select>
      </div>
      <Divider />
      <div style={{display: 'flex', marginTop: '20px', marginBottom: '20px'}}>
        <span style={{fontSize: '15px', width: '300px', lineHeight: '40px'}}>Comments</span>
        <TextArea 
          style={{width: '70%'}} 
          rows={6} 
          value={comments}
          onChange={(e)=>{
            setComments(e.target.value)
          }}
        />
      </div>
      <Divider />
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Button
          onClick={()=>{
            navigate('/app/project');
          }}
        >Cancel</Button>
        <Button
          type="primary"
          style={{marginLeft: '10px', color: '#000'}}
          onClick={()=>{
            navigate('/app/viewProject');
          }}
        >Save</Button>
      </div>
    </div>
  );
}

export default Index;

import {Button, Tag} from 'antd';
import {
  ArrowRightOutlined, 
  DownOutlined,
} from '@ant-design/icons';
import Layers from '../static/img/layers.png';
import Airport from '../static/img/airport.png';
import AirportLogo from '../static/img/airport_logo.png';
import DownloadButton from '../static/img/download_button.png';

function Index() {
 
  return (
    <div style={{padding: '20px', backgroundColor: '#fff'}}>
      <div style={{display: 'flex'}}>
        <img src={Layers} style={{width: '24px', height: '24px', marginRight: '10px'}} />
        <div style={{lineHeight: '24px', fontSize: '23px', marginRight: '10px'}}>Project Management</div>
        <ArrowRightOutlined style={{lineHeight: '30px', fontSize: '20px', marginRight: '10px'}}/>
        <div style={{lineHeight: '24px', fontSize: '23px', marginRight: '10px'}}>View Project</div>
        <ArrowRightOutlined style={{lineHeight: '30px', fontSize: '20px', marginRight: '10px'}}/>
        <div style={{lineHeight: '24px', fontSize: '23px', marginRight: '10px'}}>View Simulation</div>
      </div>
      <div>
        <div style={{fontSize: '30px', marginLeft: '8px', marginTop: '20px'}}>
          Oceanview Airport Gateway
        </div>
        <div style={{marginLeft: '8px',display:'flex'}}>
          <img src={Airport} style={{width: '30px', height: '30px', }}/>
          <div style={{marginLeft: '5px', lineHeight: '30px'}}>Melbourne Airport</div>
          <Tag style={{marginLeft: '5px', marginTop: '4px', height: '20px'}} color='green'>Active</Tag>
        </div>
        <div style={{fontSize: '15px', marginLeft: '8px', marginTop: '10px', marginBottom: '10px', color: '#667085', width: '700px'}}>
          The security screening area expansion project would involve the expansion of the existing security screening area 
          at Melbourne Airport to accommodate more passengers and improve the speed and efficiency 
          of security screening operations.
        </div>
      </div>
      <div style={{width: '100%', height: '500px', border: '1px solid #ccc', padding: '20px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>
            <div style={{color: '#101828',fontSize: '15px'}}>
              SM-8912 - Ocean Simulation 01
            </div>
            <div style={{color: '#667085', marginTop: '2px'}}>
              Gating Simulation for
              <span style={{color: '#FACC15'}}>ceanview Airport Gateway</span>
            </div>
          </div>
          <div><img src={AirportLogo} /></div>
        </div>
        <div style={{marginTop: '8px', display: 'flex', justifyContent: 'space-between', padding: '20px'}}>
          <div>
            <div style={{color: '#101828',fontSize: '15px'}}>
              Gantt Chart
            </div>
            <div style={{color: '#667085', marginTop: '2px'}}>
              Generated Gantt Chart
            </div>
          </div>
          <div style={{display: 'flex'}}>
              <Button style={{marginRight: '10px'}} type="primary" icon={<img src={DownloadButton} />}></Button>
              <Button>Version<DownOutlined /></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;

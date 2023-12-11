import React from 'react';
import {Layout, Space, Input} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import LogoUrl from '../static/img/logo.png';
import Layers from '../static/img/3-layers.png';
import Book from '../static/img/book.png';
import Support from '../static/img/support.png';
import Settings from '../static/img/settings.png';
import Exit from '../static/img/exit.png';
import Avatar from '../static/img/avatar.png';
import {Outlet, useNavigate} from 'react-router-dom';
const {Header, Sider, Content} = Layout;

function Index() {
  const navigate = useNavigate()
  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 20,
    paddingInline: 20,
    lineHeight: '64px',
    backgroundColor: '#101828',
  };
  const siderStyle: React.CSSProperties = {
    height: '100%',
    position: 'fixed',
    bottom: 0,
    color: '#fff',
    backgroundColor: '#101828',
    paddingLeft: '25px',
  };
  return (
    <div>
      <Space direction="vertical" style={{width: '100%'}} size={[0, 48]}>
        <Layout>
          <Sider style={siderStyle} width="280">
            <div style={{marginTop: '32px'}}>
              <img src={LogoUrl} style={{width: '126px', height: '36px'}} />
            </div>
            <div style={{marginTop: '24px'}}>
              <Input
                placeholder="Search"
                prefix={<SearchOutlined />}
                style={{width: '231px', height: '44px'}}
              />
            </div>
            <div
              style={{
                marginTop: '24px',
                display: 'flex',
                paddingTop: '8px',
                paddingBottom: '8px',
                cursor: 'pointer',
              }}
              onClick={()=>{
                navigate('/app/project')
              }}
            >
              <img src={Layers} style={{width: '24px', height: '24px'}} />
              <text style={{marginLeft: '12px', lineHeight: '24px'}}>
                Projects
              </text>
            </div>
            <div
              style={{
                marginTop: '24px',
                display: 'flex',
                paddingTop: '8px',
                paddingBottom: '8px',
                cursor: 'pointer',
              }}
              onClick={()=>{
                navigate('/app/ruleset')
              }}
            >
              <img src={Layers} style={{width: '24px', height: '24px'}} />
              <text style={{marginLeft: '12px', lineHeight: '24px'}}>
                ruleset
              </text>
            </div>
            <div
              style={{
                marginTop: '24px',
                display: 'flex',
                paddingTop: '8px',
                paddingBottom: '8px',
                cursor: 'pointer',
              }}
              onClick={()=>{
                navigate('/app/oceanviewAirport')
              }}
            >
              <img src={Book} style={{width: '24px', height: '24px'}} />
              <text
                style={{
                  marginLeft: '12px',
                  lineHeight: '24px',
                  paddingRight: '50px',
                }}
              >
                Oceanview Airport Gateway
              </text>
            </div>
            <div
              style={{
                display: 'flex',
                paddingTop: '8px',
                paddingBottom: '8px',
              }}
            >
              <img src={Book} style={{width: '24px', height: '24px'}} />
              <text
                style={{
                  marginLeft: '12px',
                  lineHeight: '24px',
                  paddingRight: '50px',
                }}
              >
                Skyline International Terminal
              </text>
            </div>
            <div
              style={{
                display: 'flex',
                paddingTop: '8px',
                paddingBottom: '8px',
              }}
            >
              <img src={Book} style={{width: '24px', height: '24px'}} />
              <text
                style={{
                  marginLeft: '12px',
                  lineHeight: '24px',
                  paddingRight: '50px',
                }}
              >
                Citywide Airport Station
              </text>
            </div>
            <div
              style={{
                position: 'fixed',
                left: '0',
                bottom: '0',
                height: '205px',
                width: '280px',
                paddingLeft: '16px',
                paddingRight: '16px',
              }}
            >
              <div style={{padding: '12px 8px'}}>
                <img src={Support} style={{width: '24px', height: '24px'}} />
                <text
                  style={{
                    marginLeft: '12px',
                    lineHeight: '24px',
                    fontSize: '18px',
                  }}
                >
                  Support
                </text>
              </div>
              <div style={{padding: '12px 8px'}}>
                <img src={Settings} style={{width: '24px', height: '24px'}} />
                <text
                  style={{
                    marginLeft: '12px',
                    lineHeight: '24px',
                    fontSize: '18px',
                  }}
                >
                  Settings
                </text>
              </div>
              <div style={{marginTop: '24px', marginBottom: '24px'}}>
                <div
                  style={{
                    backgroundColor: '#475467',
                    height: '2px',
                    width: '100%',
                  }}
                ></div>
              </div>
              <div
                style={{
                  marginLeft: '8px',
                  marginRight: '8px',
                  display: 'flex',
                }}
              >
                <img src={Avatar} style={{marginRight: '5px'}} />
                <div style={{height: '40px', width: '155px'}}>
                  <div>Valentina Sarmiento</div>
                  <div>vsarmiento@airbiz.com</div>
                </div>
                <img src={Exit} style={{marginRight: '5px'}} />
              </div>
            </div>
          </Sider>
          <Layout>
            <Header style={headerStyle}></Header>
            <Content style={{marginLeft: 280, backgroundColor: '#fff'}}>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Space>
    </div>
  );
}

export default Index;

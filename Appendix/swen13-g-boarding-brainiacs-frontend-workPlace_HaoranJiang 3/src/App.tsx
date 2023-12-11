import './styles/App.css';
import MainRoutes from './Routes';
import 'antd/dist/reset.css';
import {ConfigProvider} from 'antd';

const App = () => {
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#FACC15',
          },
        }}
      >
        <MainRoutes />
      </ConfigProvider>
    </div>
  );
};

export default App;

import {Routes, Route} from 'react-router-dom';
import Index from './page/index';
import Project from './page/project';
import CreatProject from './page/creatProject';
import Ruleset from './page/ruleset';
import ViewProject from './page/viewProject';
import CreateSchedule from './page/createSchedule';
import OceanviewAirport from './page/oceanviewAirport';

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="app" element={<Index />}>
          <Route path="project" element={<Project />} />
          <Route path="ruleset" element={<Ruleset />} />
          <Route path="creatProject" element={<CreatProject />} />
          <Route path="viewProject" element={<ViewProject />} />
          <Route path="createSchedule" element={<CreateSchedule />} />
          <Route path="oceanviewAirport" element={<OceanviewAirport />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;

import { FilterPetsFeature } from '../features/pet/filter';

import Layout from '../layout';

export const Home = () => {
  return (
    <Layout>
      <div className="main-content">
        <FilterPetsFeature />
        <div>Contéudo</div>
      </div>
    </Layout> 
  );
}


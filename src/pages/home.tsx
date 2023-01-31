import { Footer } from "../components/ui/footer";
import { FilterPetsFeature } from "../features/pet/filter";
import { ListPetsFeature } from "../features/pet/list";

import Layout from "../layout";

export const Home = () => {
  return (
    <>
      <Layout>
        <div className="main-content">
          <FilterPetsFeature />
          <ListPetsFeature />
        </div>
      </Layout>
    </>
  );
};

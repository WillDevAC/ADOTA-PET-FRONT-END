import { Input } from '../../../theme/ui/inputs';
import { CardFilter, CardFilterHeader, CardFilterBody, GroupInput } from './styles';

export const FilterCard = () => {
  return (
    <CardFilter>
      <CardFilterHeader>Espécie</CardFilterHeader>
      <CardFilterBody>
        <GroupInput>
          <Input type="checkbox" size="checkbox" value="" />
        </GroupInput>
      </CardFilterBody>
    </CardFilter>
  );
};

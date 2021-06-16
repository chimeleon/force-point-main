import React from 'react';
import styled from 'styled-components';
import SelectComponent from 'react-select';
import useTime from './hooks/useTime';
import useAgentTime from './hooks/useAgentTime';
import useUser from './hooks/useUser';
import useAgent from './hooks/useAgent';
import usePerson from './hooks/usePerson';
import usePolicy from './hooks/usePolicy';
import useApplication from './hooks/useApplication';
import useCategory from './hooks/useCategory';
import useMatches from './hooks/useMatches';
import useGroup from './hooks/useGroup';
import { useRecoilState } from 'recoil';
import { Menu } from '../../store';
import useResource from './hooks/useResource';

// Styles
const Container = styled.div`
  display: flex;
  .select {
    min-width: 140px;
  }
`;

const options = [
  { value: 'user', label: 'User' },
  { value: 'time', label: 'Time' },
  { value: 'agentTime', label: 'Agent Time' },
  { value: 'agent', label: 'Agent' },
  { value: 'person', label: 'Person' },
  { value: 'policy', label: 'Policy' },
  { value: 'application', label: 'Application' },
  { value: 'category', label: 'Category' },
  { value: 'matches', label: 'Matches' },
  { value: 'group', label: 'Group' },
];

interface Props {}

const Select: React.FC<Props> = () => {
  const { onToggleTime } = useTime();
  const { onToggleAgentTime } = useAgentTime();
  const { onToggleUser } = useUser();
  const { onToggleAgent } = useAgent();
  const { onTogglePerson } = usePerson();
  const { onTogglePolicy } = usePolicy();
  const { onToggleApplication } = useApplication();
  const { onToggleCategory } = useCategory();
  const { onToggleMatches } = useMatches();
  const { onToggleResource } = useResource();
  const { onToggleGroup } = useGroup();
  const [menu, setMenu] = useRecoilState<string[]>(Menu);

  const onChange = (e: any, { action }: { action: string }) => {
    let name = '';
    setMenu(
      Array.isArray(e)
        ? e.map((x) => {
            name = x.value;
            return x.value;
          })
        : []
    );

    if (action === 'clear') {
      onClear();
    }

    switch (name) {
      case 'time':
        return onToggleTime();
      case 'agentTime':
        return onToggleAgentTime();
      case 'user':
        return onToggleUser();
      case 'agent':
        return onToggleAgent();
      case 'person':
        return onTogglePerson();
      case 'policy':
        return onTogglePolicy();
      case 'application':
        return onToggleApplication();
      case 'category':
        return onToggleCategory();
      case 'matches':
        return onToggleMatches();
      case 'resource':
        return onToggleResource();
      case 'group':
        return onToggleGroup();
      default:
        return;
    }
  };

  const onClear = () => {
    onToggleTime(true);
    onToggleAgentTime(true);
    onToggleUser(true);
    onToggleAgent(true);
    onTogglePerson(true);
    onTogglePolicy(true);
    onToggleApplication(true);
    onToggleCategory(true);
    onToggleMatches(true);
    onToggleResource(true);
    onToggleGroup(true);
  };

  return (
    <Container>
      <SelectComponent
        className="select"
        value={options.filter((ob) => menu.includes(ob.value))}
        options={options}
        onChange={onChange}
        isMulti
        hideSelectedOptions={true}
        placeholder="Search"
      />
    </Container>
  );
};

export default Select;
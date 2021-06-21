import React from 'react';
import styled from 'styled-components';
import SelectComponent from 'react-select';
import makeAnimated from 'react-select/animated';
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
import { useMemo } from 'react';

// Styles
const Container = styled.div`
  display: flex;
  .select {
    min-width: 140px;
  }
  .css-1rhbuit-multiValue {
    display: none!important;
  }
`;

const animatedComponents = makeAnimated();

interface Props {}

const Select: React.FC<Props> = () => {
  const options = useMemo(
    () => [
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
    ],
    []
  ); 
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

    switch (action) {
      case 'clear':
        return onClear();
      case 'select-option':
        return onInputChange(name);
      case 'remove-value':
        return onRemoveValue(name);
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

  const onInputChange = (name: string) => {
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
  }

  const onRemoveValue = (name: string) => {
    console.log(name)
    switch (name) {
      case 'time':
        return onToggleTime(true);
      case 'agentTime':
        return onToggleAgentTime(true);
      case 'user':
        return onToggleUser(true);
      case 'agent':
        return onToggleAgent(true);
      case 'person':
        return onTogglePerson(true);
      case 'policy':
        return onTogglePolicy(true);
      case 'application':
        return onToggleApplication(true);
      case 'category':
        return onToggleCategory(true);
      case 'matches':
        return onToggleMatches(true);
      case 'resource':
        return onToggleResource(true);
      case 'group':
        return onToggleGroup(true);
      default:
        return;
    }
  }

  return (
    <Container>
      <SelectComponent
        className="select"
        components={animatedComponents}
        value={options.filter((ob) => menu.includes(ob.value))}
        options={options}
        onChange={onChange}
        isMulti
        placeholder="Search"
        closeMenuOnSelect={true}
      />
    </Container>
  );
};

export default Select;
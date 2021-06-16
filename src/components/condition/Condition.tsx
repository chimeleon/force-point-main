import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Input from '../Input';
import Select from './Select';
import Button from '../Button';
import { Menu } from '../../store';
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
import Time from '../Time';
import AgentTime from '../AgentTime';

// Styles
const Container = styled.div`
  display: flex;
  margin-bottom: 1.2rem;
`;

interface Props {
  onSubmit: () => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Condition: React.FC<Props> = ({ onSubmit, onKeyPress }) => {
  const menu = useRecoilValue(Menu);
  const { time } = useTime();
  const { agentTime } = useAgentTime();
  const { user, onChangeUser } = useUser();
  const { agent, onChangeAgent } = useAgent();
  const { person, onChangePerson } = usePerson();
  const { policy, onChangePolicy } = usePolicy();
  const { application, onChangeApplication } = useApplication();
  const { category, onChangeCategory } = useCategory();
  const { matches, onChangeMatches } = useMatches();
  const { group, onChangeGroup } = useGroup();

  return (
    <Container>
      <Select />
      {time.visible && <Time />}
      {agentTime.visible && <AgentTime />}
      {user.visible && (
        <Input
          name="user"
          value={user.value}
          onChange={onChangeUser}
          onKeyPress={onKeyPress}
        />
      )}
      {agent.visible && (
        <Input
          name="agent"
          value={agent.value}
          onChange={onChangeAgent}
          onKeyPress={onKeyPress}
        />
      )}
      {person.visible && (
        <Input
          name="person"
          value={person.value}
          onChange={onChangePerson}
          onKeyPress={onKeyPress}
        />
      )}
      {policy.visible && (
        <Input
          name="policy"
          value={policy.value}
          onChange={onChangePolicy}
          onKeyPress={onKeyPress}
        />
      )}
      {application.visible && (
        <Input
          name="application"
          value={application.value}
          onChange={onChangeApplication}
          onKeyPress={onKeyPress}
        />
      )}
      {category.visible && (
        <Input
          name="category"
          value={category.value}
          onChange={onChangeCategory}
          onKeyPress={onKeyPress}
        />
      )}
      {matches.visible && (
        <Input
          name="matches"
          value={matches.value}
          onChange={onChangeMatches}
          onKeyPress={onKeyPress}
        />
      )}
      {group.visible && (
        <Input
          name="group"
          value={group.value}
          onChange={onChangeGroup}
          onKeyPress={onKeyPress}
        />
      )}

      {menu.length > 0 && <Button onClick={onSubmit}>조 회</Button>}
    </Container>
  );
};

export default Condition;
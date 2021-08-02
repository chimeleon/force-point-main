import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import Input from '../Input';
import Select from './Select';
import Button from '../Button';
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
import TimeCompo from '../Time';
import AgentTimeCompo from '../AgentTime';
import useResource from './hooks/useResource';
import { Agent, AgentTime, Application, Category, EndAgentTime, EndTime, EvidenceType, Group, Matches, Menu, Page, Person, Policy, Resource, StartAgentTime, StartTime, Time, User } from '../../store';

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
  const [menu, setMenu] = useRecoilState(Menu);
  const [, setPage] = useRecoilState(Page);
  const { agentTime } = useAgentTime();
  const { user, onChangeUser } = useUser();
  const { agent, onChangeAgent } = useAgent();
  const { person, onChangePerson } = usePerson();
  const { policy, onChangePolicy } = usePolicy();
  const { application, onChangeApplication } = useApplication();
  const { category, onChangeCategory } = useCategory();
  const { matches, onChangeMatches } = useMatches();
  const { group, onChangeGroup } = useGroup();
  const { time } = useTime();

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

  const [, setEvidenceType] = useRecoilState(EvidenceType);
  const [, setStartTime] = useRecoilState(StartTime);
  const [, setEndTime] = useRecoilState(EndTime);
  const [, setStartAgentTime] = useRecoilState(StartAgentTime);
  const [, setEndAgentTime] = useRecoilState(EndAgentTime);
  const [, setTime] = useRecoilState(Time);
  const [, setAgentTime] = useRecoilState(AgentTime);
  const [, setUser] = useRecoilState(User);
  const [, setAgent] = useRecoilState(Agent);
  const [, setPerson] = useRecoilState(Person);
  const [, setPolicy] = useRecoilState(Policy);
  const [, setApplication] = useRecoilState(Application);
  const [, setCategory] = useRecoilState(Category);
  const [, setMatches] = useRecoilState(Matches);
  const [, setResource] = useRecoilState(Resource);
  const [, setGroup] = useRecoilState(Group);

  const onClear = async () => {
    setMenu([]);
    setPage((prev) => ({
      ...prev,
      currentPage: 0,
    }));
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

    setEvidenceType((prev) => ({ ...prev, value: '' }));
    setStartTime((prev) => ({ ...prev, value: '' }));
    setEndTime((prev) => ({ ...prev, value: '' }));
    setStartAgentTime((prev) => ({ ...prev, value: '' }));
    setEndAgentTime((prev) => ({ ...prev, value: '' }));
    setTime((prev) => ({ ...prev, value: '' }));
    setAgentTime((prev) => ({ ...prev, value: '' }));
    setUser((prev) => ({ ...prev, value: '' }));
    setAgent((prev) => ({ ...prev, value: '' }));
    setPerson((prev) => ({ ...prev, value: '' }));
    setPolicy((prev) => ({ ...prev, value: '' }));
    setApplication((prev) => ({ ...prev, value: '' }));
    setCategory((prev) => ({ ...prev, value: '' }));
    setMatches((prev) => ({ ...prev, value: '' }));
    setResource((prev) => ({ ...prev, value: '' }));
    setGroup((prev) => ({ ...prev, value: '' }));

    await onSubmit();
  };

  return (
    <Container>
      <Select />
      {time.visible && <TimeCompo />}
      {agentTime.visible && <AgentTimeCompo />}
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

      <Button cyan onClick={onSubmit}>
        조 회
      </Button>

      {menu.length > 0 && (
        <>
          <Button onClick={onClear}>초기화</Button>
        </>
      )}
    </Container>
  );
};

export default Condition;

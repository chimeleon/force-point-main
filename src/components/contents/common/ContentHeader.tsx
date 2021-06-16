import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  Agent,
  AgentTime,
  Application,
  Category,
  Matches,
  Person,
  Policy,
  Time,
  User,
  Group,
  Resource,
} from '../../../store';
import TableHeader from './TableHeader';

// Styles
const THead = styled.thead`
  th {
    user-select: none;
  }
`;

interface Props {}

const ContentHeader: React.FC<Props> = () => {
  const [time, setTime] = useRecoilState(Time);
  const [agentTime, setAgentTime] = useRecoilState(AgentTime);
  const [user, setUser] = useRecoilState(User);
  const [agent, setAgent] = useRecoilState(Agent);
  const [person, setPerson] = useRecoilState(Person);
  const [policy, setPolicy] = useRecoilState(Policy);
  const [application, setApplication] = useRecoilState(Application);
  const [category, setCategory] = useRecoilState(Category);
  const [matches, setMatches] = useRecoilState(Matches);
  const [resource, setResource] = useRecoilState(Resource);
  const [group, setGroup] = useRecoilState(Group);

  const onToggleTime = () => {
    setAgentTime((prev) => ({ ...prev, sort: 'none' }));
    setUser((prev) => ({ ...prev, sort: 'none' }));
    setAgent((prev) => ({ ...prev, sort: 'none' }));
    setPerson((prev) => ({ ...prev, sort: 'none' }));
    setPolicy((prev) => ({ ...prev, sort: 'none' }));
    setApplication((prev) => ({ ...prev, sort: 'none' }));
    setCategory((prev) => ({ ...prev, sort: 'none' }));
    setMatches((prev) => ({ ...prev, sort: 'none' }));
    setResource((prev) => ({ ...prev, sort: 'none' }));
    setGroup((prev) => ({ ...prev, sort: 'none' }));

    setTime((prev) => ({
      ...prev,
      sort:
        prev.sort === 'none' ? 'asc' : prev.sort === 'desc' ? 'none' : 'desc',
    }));
  };

  const onToggleAgentTime = () => {
    setTime((prev) => ({ ...prev, sort: 'none' }));
    setUser((prev) => ({ ...prev, sort: 'none' }));
    setAgent((prev) => ({ ...prev, sort: 'none' }));
    setPerson((prev) => ({ ...prev, sort: 'none' }));
    setPolicy((prev) => ({ ...prev, sort: 'none' }));
    setApplication((prev) => ({ ...prev, sort: 'none' }));
    setCategory((prev) => ({ ...prev, sort: 'none' }));
    setMatches((prev) => ({ ...prev, sort: 'none' }));
    setResource((prev) => ({ ...prev, sort: 'none' }));
    setGroup((prev) => ({ ...prev, sort: 'none' }));

    setAgentTime((prev) => ({
      ...prev,
      sort:
        prev.sort === 'none' ? 'asc' : prev.sort === 'desc' ? 'none' : 'desc',
    }));
  };

  const onToggleUser = () => {
    setTime((prev) => ({ ...prev, sort: 'none' }));
    setAgentTime((prev) => ({ ...prev, sort: 'none' }));
    setAgent((prev) => ({ ...prev, sort: 'none' }));
    setPerson((prev) => ({ ...prev, sort: 'none' }));
    setPolicy((prev) => ({ ...prev, sort: 'none' }));
    setApplication((prev) => ({ ...prev, sort: 'none' }));
    setCategory((prev) => ({ ...prev, sort: 'none' }));
    setMatches((prev) => ({ ...prev, sort: 'none' }));
    setResource((prev) => ({ ...prev, sort: 'none' }));
    setGroup((prev) => ({ ...prev, sort: 'none' }));

    setUser((prev) => ({
      ...prev,
      sort:
        prev.sort === 'none' ? 'asc' : prev.sort === 'desc' ? 'none' : 'desc',
    }));
  };

  const onToggleAgent = () => {
    setTime((prev) => ({ ...prev, sort: 'none' }));
    setAgentTime((prev) => ({ ...prev, sort: 'none' }));
    setUser((prev) => ({ ...prev, sort: 'none' }));
    setPerson((prev) => ({ ...prev, sort: 'none' }));
    setPolicy((prev) => ({ ...prev, sort: 'none' }));
    setApplication((prev) => ({ ...prev, sort: 'none' }));
    setCategory((prev) => ({ ...prev, sort: 'none' }));
    setMatches((prev) => ({ ...prev, sort: 'none' }));
    setResource((prev) => ({ ...prev, sort: 'none' }));
    setGroup((prev) => ({ ...prev, sort: 'none' }));

    setAgent((prev) => ({
      ...prev,
      sort:
        prev.sort === 'none' ? 'asc' : prev.sort === 'desc' ? 'none' : 'desc',
    }));
  };

  const onTogglePerson = () => {
    setTime((prev) => ({ ...prev, sort: 'none' }));
    setAgentTime((prev) => ({ ...prev, sort: 'none' }));
    setUser((prev) => ({ ...prev, sort: 'none' }));
    setAgent((prev) => ({ ...prev, sort: 'none' }));
    setPolicy((prev) => ({ ...prev, sort: 'none' }));
    setApplication((prev) => ({ ...prev, sort: 'none' }));
    setCategory((prev) => ({ ...prev, sort: 'none' }));
    setMatches((prev) => ({ ...prev, sort: 'none' }));
    setResource((prev) => ({ ...prev, sort: 'none' }));
    setGroup((prev) => ({ ...prev, sort: 'none' }));

    setPerson((prev) => ({
      ...prev,
      sort:
        prev.sort === 'none' ? 'asc' : prev.sort === 'desc' ? 'none' : 'desc',
    }));
  };

  const onTogglePolicy = () => {
    setTime((prev) => ({ ...prev, sort: 'none' }));
    setAgentTime((prev) => ({ ...prev, sort: 'none' }));
    setUser((prev) => ({ ...prev, sort: 'none' }));
    setAgent((prev) => ({ ...prev, sort: 'none' }));
    setPerson((prev) => ({ ...prev, sort: 'none' }));
    setApplication((prev) => ({ ...prev, sort: 'none' }));
    setCategory((prev) => ({ ...prev, sort: 'none' }));
    setMatches((prev) => ({ ...prev, sort: 'none' }));
    setResource((prev) => ({ ...prev, sort: 'none' }));
    setGroup((prev) => ({ ...prev, sort: 'none' }));

    setPolicy((prev) => ({
      ...prev,
      sort:
        prev.sort === 'none' ? 'asc' : prev.sort === 'desc' ? 'none' : 'desc',
    }));
  };

  const onToggleApplication = () => {
    setTime((prev) => ({ ...prev, sort: 'none' }));
    setAgentTime((prev) => ({ ...prev, sort: 'none' }));
    setUser((prev) => ({ ...prev, sort: 'none' }));
    setAgent((prev) => ({ ...prev, sort: 'none' }));
    setPerson((prev) => ({ ...prev, sort: 'none' }));
    setPolicy((prev) => ({ ...prev, sort: 'none' }));
    setCategory((prev) => ({ ...prev, sort: 'none' }));
    setMatches((prev) => ({ ...prev, sort: 'none' }));
    setResource((prev) => ({ ...prev, sort: 'none' }));
    setGroup((prev) => ({ ...prev, sort: 'none' }));

    setApplication((prev) => ({
      ...prev,
      sort:
        prev.sort === 'none' ? 'asc' : prev.sort === 'desc' ? 'none' : 'desc',
    }));
  };

  const onToggleCategory = () => {
    setTime((prev) => ({ ...prev, sort: 'none' }));
    setAgentTime((prev) => ({ ...prev, sort: 'none' }));
    setUser((prev) => ({ ...prev, sort: 'none' }));
    setAgent((prev) => ({ ...prev, sort: 'none' }));
    setPerson((prev) => ({ ...prev, sort: 'none' }));
    setPolicy((prev) => ({ ...prev, sort: 'none' }));
    setApplication((prev) => ({ ...prev, sort: 'none' }));
    setMatches((prev) => ({ ...prev, sort: 'none' }));
    setResource((prev) => ({ ...prev, sort: 'none' }));
    setGroup((prev) => ({ ...prev, sort: 'none' }));

    setCategory((prev) => ({
      ...prev,
      sort:
        prev.sort === 'none' ? 'asc' : prev.sort === 'desc' ? 'none' : 'desc',
    }));
  };

  const onToggleMatches = () => {
    setTime((prev) => ({ ...prev, sort: 'none' }));
    setAgentTime((prev) => ({ ...prev, sort: 'none' }));
    setUser((prev) => ({ ...prev, sort: 'none' }));
    setAgent((prev) => ({ ...prev, sort: 'none' }));
    setPerson((prev) => ({ ...prev, sort: 'none' }));
    setPolicy((prev) => ({ ...prev, sort: 'none' }));
    setApplication((prev) => ({ ...prev, sort: 'none' }));
    setCategory((prev) => ({ ...prev, sort: 'none' }));
    setResource((prev) => ({ ...prev, sort: 'none' }));
    setGroup((prev) => ({ ...prev, sort: 'none' }));

    setMatches((prev) => ({
      ...prev,
      sort:
        prev.sort === 'none' ? 'asc' : prev.sort === 'desc' ? 'none' : 'desc',
    }));
  };

  const onToggleResource = () => {
    setTime((prev) => ({ ...prev, sort: 'none' }));
    setAgentTime((prev) => ({ ...prev, sort: 'none' }));
    setUser((prev) => ({ ...prev, sort: 'none' }));
    setAgent((prev) => ({ ...prev, sort: 'none' }));
    setPerson((prev) => ({ ...prev, sort: 'none' }));
    setPolicy((prev) => ({ ...prev, sort: 'none' }));
    setApplication((prev) => ({ ...prev, sort: 'none' }));
    setCategory((prev) => ({ ...prev, sort: 'none' }));
    setMatches((prev) => ({ ...prev, sort: 'none' }));
    setGroup((prev) => ({ ...prev, sort: 'none' }));

    setResource((prev) => ({
      ...prev,
      sort:
        prev.sort === 'none' ? 'asc' : prev.sort === 'desc' ? 'none' : 'desc',
    }));
  };

  const onToggleGroup = () => {
    setTime((prev) => ({ ...prev, sort: 'none' }));
    setAgentTime((prev) => ({ ...prev, sort: 'none' }));
    setUser((prev) => ({ ...prev, sort: 'none' }));
    setAgent((prev) => ({ ...prev, sort: 'none' }));
    setPerson((prev) => ({ ...prev, sort: 'none' }));
    setPolicy((prev) => ({ ...prev, sort: 'none' }));
    setApplication((prev) => ({ ...prev, sort: 'none' }));
    setCategory((prev) => ({ ...prev, sort: 'none' }));
    setMatches((prev) => ({ ...prev, sort: 'none' }));
    setResource((prev) => ({ ...prev, sort: 'none' }));

    setGroup((prev) => ({
      ...prev,
      sort:
        prev.sort === 'none' ? 'asc' : prev.sort === 'desc' ? 'none' : 'desc',
    }));
  };

  return (
    <THead>
      <tr>
        <th>Channel</th>
        <TableHeader name="Time" model={time} onToggle={onToggleTime} />
        <TableHeader
          name="Agent Time"
          model={agentTime}
          onToggle={onToggleAgentTime}
        />
        <TableHeader name="User" model={user} onToggle={onToggleUser} />
        <th>Activity</th>
        <TableHeader name="Agent" model={agent} onToggle={onToggleAgent} />
        <TableHeader name="Person" model={person} onToggle={onTogglePerson} />
        <TableHeader name="Policy" model={policy} onToggle={onTogglePolicy} />
        <TableHeader
          name="Application"
          model={application}
          onToggle={onToggleApplication}
        />
        <TableHeader
          name="Category"
          model={category}
          onToggle={onToggleCategory}
        />
        <TableHeader
          name="Matches"
          model={matches}
          onToggle={onToggleMatches}
        />
        <th>Matches(한글)</th>
        <TableHeader
          name="Resource"
          model={resource}
          onToggle={onToggleResource}
        />
        <TableHeader name="Group" model={group} onToggle={onToggleGroup} />
      </tr>
    </THead>
  );
};

export default ContentHeader;
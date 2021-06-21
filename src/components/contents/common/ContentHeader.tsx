import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  Agent,
  AgentTime,
  Application,
  Matches,
  Person,
  Time,
  User,
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
  const [application, setApplication] = useRecoilState(Application);
  const [matches, setMatches] = useRecoilState(Matches);
  const [resource, setResource] = useRecoilState(Resource);

  const onToggleTime = () => {
    setAgentTime((prev) => ({ ...prev, sort: 'none' }));
    setUser((prev) => ({ ...prev, sort: 'none' }));
    setAgent((prev) => ({ ...prev, sort: 'none' }));
    setPerson((prev) => ({ ...prev, sort: 'none' }));
    setApplication((prev) => ({ ...prev, sort: 'none' }));
    setMatches((prev) => ({ ...prev, sort: 'none' }));
    setResource((prev) => ({ ...prev, sort: 'none' }));

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
    setApplication((prev) => ({ ...prev, sort: 'none' }));
    setMatches((prev) => ({ ...prev, sort: 'none' }));
    setResource((prev) => ({ ...prev, sort: 'none' }));

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
    setApplication((prev) => ({ ...prev, sort: 'none' }));
    setMatches((prev) => ({ ...prev, sort: 'none' }));
    setResource((prev) => ({ ...prev, sort: 'none' }));

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
    setApplication((prev) => ({ ...prev, sort: 'none' }));
    setMatches((prev) => ({ ...prev, sort: 'none' }));
    setResource((prev) => ({ ...prev, sort: 'none' }));

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
    setApplication((prev) => ({ ...prev, sort: 'none' }));
    setMatches((prev) => ({ ...prev, sort: 'none' }));
    setResource((prev) => ({ ...prev, sort: 'none' }));

    setPerson((prev) => ({
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
    setMatches((prev) => ({ ...prev, sort: 'none' }));
    setResource((prev) => ({ ...prev, sort: 'none' }));

    setApplication((prev) => ({
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
    setApplication((prev) => ({ ...prev, sort: 'none' }));
    setResource((prev) => ({ ...prev, sort: 'none' }));

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
    setApplication((prev) => ({ ...prev, sort: 'none' }));
    setMatches((prev) => ({ ...prev, sort: 'none' }));

    setResource((prev) => ({
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
        <th>Policy</th>
        <TableHeader
          name="Application"
          model={application}
          onToggle={onToggleApplication}
        />
        <th>Category</th>
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
        <th>Group</th>
      </tr>
    </THead>
  );
};

export default ContentHeader;
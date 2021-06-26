import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import oc from 'open-color';
import ContentHeader from './common/ContentHeader';
import ContentFooter from './common/ContentFooter';
import useContents from './hooks/useContents';
import {
  Agent,
  AgentTime,
  Application,
  Category,
  Counter,
  Group,
  Matches,
  Page,
  Person,
  Policy,
  Resource,
  Time,
  User,
} from '../../store';
import useMain from '../../hooks/useMain';
import Skeleton from './common/Skeleton';

// Styles
const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 150vw;
  
  table {
    border-spacing: 0 0;
    overflow: scroll;
  }
  th,
  td {
    border: 1px solid ${oc.gray[7]};
    padding: 0.5rem 0.7rem;
  }
  th {
    background: ${oc.gray[6]};
    color: white;
  }
`;

interface Props {}

const Contents: React.FC<Props> = () => {
  const { contents } = useContents();
  const { onSubmit } = useMain();
  const page = useRecoilValue(Page);
  const time = useRecoilValue(Time);
  const agentTime = useRecoilValue(AgentTime);
  const user = useRecoilValue(User);
  const agent = useRecoilValue(Agent);
  const person = useRecoilValue(Person);
  const policy = useRecoilValue(Policy);
  const application = useRecoilValue(Application);
  const category = useRecoilValue(Category);
  const matches = useRecoilValue(Matches);
  const resource = useRecoilValue(Resource);
  const group = useRecoilValue(Group);
  const count = useRecoilValue(Counter);

  useEffect(() => {
    onSubmit();
  }, [
    page.currentPage,
    count.value,
    time.sort,
    agentTime.sort,
    user.sort,
    agent.sort,
    person.sort,
    policy.sort,
    application.sort,
    category.sort,
    matches.sort,
    resource.sort,
    group.sort,
  ]);

  return (
    <>
      <Container>
        <table>
          <ContentHeader />
          <tbody>
            {contents && contents[0] ? (
              <>
                {contents[0].evidenceId !== '' ? (
                  <>
                    {contents.map((content) => (
                      <tr key={content.evidenceId}>
                        <td style={{ wordBreak: 'break-all' }}>Keyboard</td>
                        <td style={{ wordBreak: 'break-all' }}>
                          {content.evidenceStartTime}
                        </td>
                        <td style={{ wordBreak: 'break-all' }}>
                          {new Date(content.agentTime).toISOString()}
                        </td>
                        <td style={{ wordBreak: 'break-all' }}>
                          {content.userDim.label}
                        </td>
                        <td style={{ wordBreak: 'break-all' }}>
                          {content.eventType.label}
                        </td>
                        <td style={{ wordBreak: 'break-all' }}>
                          {content.agentDim.label}
                        </td>
                        <td style={{ wordBreak: 'break-all' }}>
                          {content.userDim.targetUser.samAccountName}
                        </td>
                        <td style={{ wordBreak: 'break-all' }}>
                          {content.policy}
                        </td>
                        <td style={{ wordBreak: 'break-all' }}>
                          {content.applicationName}
                        </td>
                        <td style={{ wordBreak: 'break-all' }}>
                          {content.category}
                        </td>
                        <td style={{ wordBreak: 'break-all' }}>
                          {content.matchText}
                        </td>
                        <td style={{ wordBreak: 'break-all' }}>
                          {content.matchTextHan}
                        </td>
                        <td style={{ wordBreak: 'break-all' }}>
                          {content.resources}
                        </td>
                        <td style={{ wordBreak: 'break-all' }}>
                          {content.group}
                        </td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                  </>
                )}
              </>
            ) : (
              <tr>
                <td
                  style={{ width: '100vw', textAlign: 'center' }}
                  colSpan={14}
                >
                  데이터가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Container>

      <ContentFooter />
    </>
  );
};

export default Contents;

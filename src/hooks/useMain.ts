import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';
import moment from 'moment';
import { toast } from 'react-toastify';
import {
  Agent,
  Application,
  Category,
  Counter,
  EndAgentTime,
  EndTime,
  Matches,
  Person,
  Policy,
  Resource,
  StartAgentTime,
  StartTime,
  User,
  Group,
  Time,
  AgentTime,
  Page,
  ListTable,
  AuthUser,
  Total,
  EvidenceType,
  RangeFrom,
  RangeTo,
  Loading,
} from '../store';

// http://3.34.5.214:8080
const apiServer = '';

function useMain() {
  const time = useRecoilValue(Time);
  const agentTime = useRecoilValue(AgentTime);
  const counter = useRecoilValue(Counter);
  const startTime = useRecoilValue(StartTime);
  const endTime = useRecoilValue(EndTime);
  const startAgentTime = useRecoilValue(StartAgentTime);
  const endAgentTime = useRecoilValue(EndAgentTime);
  const user = useRecoilValue(User);
  const agent = useRecoilValue(Agent);
  const person = useRecoilValue(Person);
  const policy = useRecoilValue(Policy);
  const application = useRecoilValue(Application);
  const category = useRecoilValue(Category);
  const matches = useRecoilValue(Matches);
  const resource = useRecoilValue(Resource);
  const group = useRecoilValue(Group);
  const evidenceType = useRecoilValue(EvidenceType);

  const [page, setPage] = useRecoilState(Page);
  const [, setListTable] = useRecoilState(ListTable);
  const [total, setTotal] = useRecoilState(Total);
  const rangeFrom = useRecoilValue(RangeFrom);
  const rangeTo = useRecoilValue(RangeTo);
  const authUser = useRecoilValue(AuthUser);
  const [, setLoading] = useRecoilState(Loading);

  const onPrevPage = () => {
    setPage((prev) => ({ ...prev, currentPage: prev.currentPage - 1 }));
  };

  const onNextPage = () => {
    setPage((prev) => ({ ...prev, currentPage: prev.currentPage + 1 }));
  };

  const onSubmit = async () => {
    setLoading(true);

    try {
      const sortArray = [
        { name: 'EVIDENCESTARTTIME', sort: time.sort },
        { name: 'agentTime', sort: agentTime.sort },
        { name: 'userDim.label', sort: user.sort },
        { name: 'agentDim.label', sort: agent.sort },
        { name: 'userDim.targetUser.label', sort: person.sort },
        { name: 'policy', sort: policy.sort },
        { name: 'applicationName', sort: application.sort },
        { name: 'category', sort: category.sort },
        { name: 'matchtext', sort: matches.sort },
        { name: 'resources', sort: resource.sort },
        { name: 'group', sort: group.sort },
      ];

      const sortData = sortArray.filter((data) => {
        return data.sort !== 'none';
      });

      await axios
        .get(
          `${apiServer}/evidences/9/list?page=${
            page.currentPage
          }&rangeFrom=${moment(rangeFrom.date).format(
            'YYYY-MM-DD'
          )}&rangeTo=${moment(rangeTo.date).format('YYYY-MM-DD')}&size=${
            counter.value
          }${user.value !== '' ? `&user=${user.value}` : ''}${
            agent.value !== '' ? `&agent=${encodeURI(agent.value)}` : ''
          }${person.value !== '' ? `&person=${person.value}` : ''}${
            policy.value !== '' ? `&policy=${policy.value}` : ''
          }${
            application.value !== '' ? `&application=${application.value}` : ''
          }${category.value !== '' ? `&category=${category.value}` : ''}${
            matches.value !== '' ? `&matches=${matches.value}` : ''
          }${resource.value !== '' ? `&resources=${resource.value}` : ''}${
            group.value !== '' ? `&group=${group.value}` : ''
          }${
            sortData[0] ? `&sort=${sortData[0].name},${sortData[0].sort}` : ''
          }${
            time.visible
              ? `&startTime=${moment(startTime.date).format('YYYY-MM-DD')}`
              : ''
          }${
            time.visible
              ? `&endTime=${moment(endTime.date).format('YYYY-MM-DD')}`
              : ''
          }${
            agentTime.visible
              ? `&startAgentTime=${moment(startAgentTime.date).format(
                  'YYYY-MM-DD'
                )}`
              : ''
          }${
            agentTime.visible
              ? `&endAgentTime=${moment(endAgentTime.date).format(
                  'YYYY-MM-DD'
                )}`
              : ''
          }${
            evidenceType.value !== 'ALL'
              ? `&evidenceType=${evidenceType.value}`
              : ''
          }
            `,
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json;charset=UTF-8',
              JSESSIONID: authUser,
            },
          }
        )
        .then((res) => {
          const { content, totalPages, totalElements } = res.data;
          const { scrollTo } = window;

          setListTable(content);
          setPage((prev) => ({
            ...prev,
            lastPage: totalPages,
          }));
          setTotal(totalElements);
          scrollTo(0, 0);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);

          document.location.href = '/customLogin';
        });
    } catch (err: any) {
      toast(err);
      setLoading(false);
    }

    setLoading(false);
  };

  const onExcel = async () => {
    try {
      const sortArray = [
        { name: 'EVIDENCESTARTTIME', sort: time.sort },
        { name: 'agentTime', sort: agentTime.sort },
        { name: 'userDim.label', sort: user.sort },
        { name: 'agentDim.label', sort: agent.sort },
        { name: 'userDim.targetUser.label', sort: person.sort },
        { name: 'policy', sort: policy.sort },
        { name: 'applicationName', sort: application.sort },
        { name: 'category', sort: category.sort },
        { name: 'matchtext', sort: matches.sort },
        { name: 'resources', sort: resource.sort },
        { name: 'group', sort: group.sort },
      ];

      const sortData = sortArray.filter((data) => {
        return data.sort !== 'none';
      });

      await axios
        .get(
          `${apiServer}/evidences/9/excel?page=${
            page.currentPage
          }&rangeFrom=${moment(rangeFrom.date).format(
            'YYYY-MM-DD'
          )}&rangeTo=${moment(rangeTo.date).format('YYYY-MM-DD')}&size=${
            counter.value
          }${user.value !== '' ? `&user=${user.value}` : ''}${
            agent.value !== '' ? `&agent=${encodeURI(agent.value)}` : ''
          }${person.value !== '' ? `&person=${person.value}` : ''}${
            policy.value !== '' ? `&policy=${policy.value}` : ''
          }${
            application.value !== '' ? `&application=${application.value}` : ''
          }${category.value !== '' ? `&category=${category.value}` : ''}${
            matches.value !== '' ? `&matches=${matches.value}` : ''
          }${resource.value !== '' ? `&resources=${resource.value}` : ''}${
            group.value !== '' ? `&group=${group.value}` : ''
          }${
            sortData[0] ? `&sort=${sortData[0].name},${sortData[0].sort}` : ''
          }${
            time.visible
              ? `&startTime=${moment(startTime.date).format('YYYY-MM-DD')}`
              : ''
          }${
            time.visible
              ? `&endTime=${moment(endTime.date).format('YYYY-MM-DD')}`
              : ''
          }${
            agentTime.visible
              ? `&startAgentTime=${moment(startAgentTime.date).format(
                  'YYYY-MM-DD'
                )}`
              : ''
          }${
            agentTime.visible
              ? `&endAgentTime=${moment(endAgentTime.date).format(
                  'YYYY-MM-DD'
                )}`
              : ''
          }${
            evidenceType.value !== 'ALL'
              ? `&evidenceType=${evidenceType.value}`
              : ''
          }
            `,
          {
            headers: {
              Accept:
                'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
              JSESSIONID: authUser,
            },
            responseType: 'blob',
          }
        )
        .then((res) => {
          const url = window.URL.createObjectURL(
            new Blob([res.data], {
              type: res.headers['content-type'],
            })
          );
          const link = document.createElement('a');

          link.href = url;
          link.setAttribute('download', 'excel.csv');
          document.body.appendChild(link);
          link.click();
          link.remove();
        })
        .catch((err) => console.log(err));
    } catch (err: any) {
      toast.error(err);
    }
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return {
    onSubmit,
    onPrevPage,
    onNextPage,
    onKeyPress,
    total,
    onExcel,
  };
}

export default useMain;

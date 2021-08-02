import { atom } from 'recoil';

export const AuthUser = atom<string | null>({
  key: 'AuthUser',
  default: '',
});

export const Menu = atom<string[]>({
  key: 'Menu',
  default: [],
});

export const Page = atom<PageType>({
  key: 'Page',
  default: {
    currentPage: 0,
    lastPage: 0,
  },
});

export const Counter = atom<{ value: number; label: string }>({
  key: 'Counter',
  default: {
    value: 20,
    label: '20',
  },
});

export const EvidenceType = atom<{ value: string; label: string }>({
  key: 'EvidenceType',
  default: {
    value: 'ALL',
    label: 'ALL',
  },
});

export const StartTime = atom<TimeModel>({
  key: 'StartTime',
  default: {
    date: new Date(),
  },
});

export const EndTime = atom<TimeModel>({
  key: 'EndTime',
  default: {
    date: new Date(),
  },
});

export const StartAgentTime = atom<TimeModel>({
  key: 'StartAgentTime',
  default: {
    date: new Date(),
  },
});

export const EndAgentTime = atom<TimeModel>({
  key: 'EndAgentTime',
  default: {
    date: new Date(),
  },
});

export const Time = atom<BaseModel>({
  key: 'Time',
  default: {
    visible: false,
    value: '',
    sort: 'none',
  },
});

export const AgentTime = atom<BaseModel>({
  key: 'AgentTime',
  default: {
    visible: false,
    value: '',
    sort: 'none',
  },
});

export const User = atom<BaseModel>({
  key: 'User',
  default: {
    visible: false,
    value: '',
    sort: 'none',
  },
});

export const Agent = atom<BaseModel>({
  key: 'Agent',
  default: {
    visible: false,
    value: '',
    sort: 'none',
  },
});

export const Person = atom<BaseModel>({
  key: 'Person',
  default: {
    visible: false,
    value: '',
    sort: 'none',
  },
});

export const Policy = atom<BaseModel>({
  key: 'Policy',
  default: {
    visible: false,
    value: '',
    sort: 'none',
  },
});

export const Application = atom<BaseModel>({
  key: 'Application',
  default: {
    visible: false,
    value: '',
    sort: 'none',
  },
});

export const Category = atom<BaseModel>({
  key: 'Category',
  default: {
    visible: false,
    value: '',
    sort: 'none',
  },
});

export const Matches = atom<BaseModel>({
  key: 'Matches',
  default: {
    visible: false,
    value: '',
    sort: 'none',
  },
});

export const Resource = atom<BaseModel>({
  key: 'Resource',
  default: {
    visible: false,
    value: '',
    sort: 'none',
  },
});

export const Group = atom<BaseModel>({
  key: 'Group',
  default: {
    visible: false,
    value: '',
    sort: 'none',
  },
});

export const ListTable = atom({
  key: 'ListTable',
  default: [
    {
      evidenceId: '', // evidenceId
      channel: '', // channel
      evidenceStartTime: new Date(), // time
      agentTime: new Date(), // agentTime
      userDim: {
        label: '', // user
        targetUser: {
          samAccountName: '', // person
        },
      },
      eventType: {
        evidenceType: '', // evidenceType
        label: '', // activity
      },
      agentDim: {
        label: '', // agent
      },
      policy: '', // policy
      applicationName: '', // application
      category: '', // category
      matchText: '', // matches
      matchTextHan: '', // matchTextHan
      resources: '', // resource
      group: '', // group
    },
  ],
});

export const Total = atom<number>({
  key: 'Total',
  default: 0,
});

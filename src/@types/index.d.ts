interface BaseModel {
  visible: boolean;
  value: string;
  sort: 'asc' | 'desc' | 'none';
}

interface TimeModel {
  date: Date;
}

interface StateProps {
  id: string;
  password: string;
}

interface ActionProps {
  name: string;
  value: string;
}

interface AuthResponse {
  jsessionId: string;
}

interface PageType {
  currentPage: number;
  lastPage: number;
}

interface TableType {
  evidenceId: string;
  channel: string;
  time: string;
  agentTime: string;
  activity: string;
  user: string;
  agent: string;
  person: string;
  policy: string;
  application: string;
  category: string;
  matches: string;
  matchTextHan: string;
  resource: string;
  group: string;
}

/*
  evidenceId: string;   (evidenceId)
  channel: string;      (channel)
  time: Date;           (evidencesStartTime)
  agentTime: Date;      (agentTime)
  user: string;         (userDim.label)
  activity: string;     (eventType.label)
  agent: string;        (agentDim.label)
  person: string;       (userDim.targetUser.samAccountName)
  policy: string;       (policy)
  application: string;  (applicationName)
  category: string;     (category)
  matches: string;      (matchText)
  resource: string;     (resources)
  group: string;        (group)
*/
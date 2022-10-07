import { v4 as uuid } from 'uuid';

export const initColumns = [
  {
    id: uuid(),
    name: 'TODO',
  },
  {
    id: uuid(),
    name: 'In Progress',
  },
  {
    id: uuid(),
    name: 'Testing',
  },
  {
    id: uuid(),
    name: 'Done',
  },
];

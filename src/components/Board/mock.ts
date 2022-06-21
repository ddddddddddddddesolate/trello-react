import { v4 as uuid } from 'uuid';

export const initColumns = [
  {
    id: uuid(),
    name: 'TODO',
    cards: [],
  },
  {
    id: uuid(),
    name: 'In Progress',
    cards: [],
  },
  {
    id: uuid(),
    name: 'Testing',
    cards: [],
  },
  {
    id: uuid(),
    name: 'Done',
    cards: [],
  },
];

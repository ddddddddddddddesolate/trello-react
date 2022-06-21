import { CardType } from 'types/cardType';

import styles from './Card.module.scss';

interface Props extends CardType {}

// TODO: implement card component
const Card = ({ name }: Props) => {
  return <div className={styles.container}>{name}</div>;
};

export default Card;

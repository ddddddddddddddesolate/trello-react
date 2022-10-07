import styles from './Button.module.scss';

interface Props {
  value: string;
  type: 'submit' | 'button';
  onClick?: () => void;
}

const Button = ({ value, type, onClick }: Props) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.button}
        value={value}
        type={type}
        onClick={onClick}
      />
    </div>
  );
};

export default Button;

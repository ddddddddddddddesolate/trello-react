import { SyntheticEvent } from 'react';

import styles from './TextArea.module.scss';

interface Props {
  id: string;
  label?: string;
  value?: string;
  onClear?: () => void;

  onChange(event: SyntheticEvent<HTMLTextAreaElement>): void;
}

const TextArea = ({ id, label, value, onChange, onClear }: Props) => {
  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}

      {onClear && value && (
        <div className={styles.clear} onClick={onClear}>
          Clear
        </div>
      )}

      <textarea
        className={styles.textarea}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;

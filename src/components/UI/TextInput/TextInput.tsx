import { SyntheticEvent } from 'react';

import styles from './TextInput.module.scss';

interface Props {
  id: string;
  label?: string;
  placeholder?: string;
  value: string;
  readOnly?: boolean;

  onChange?: (event: SyntheticEvent<HTMLInputElement>) => void;
}

const TextInput = ({
  id,
  label,
  placeholder,
  value,
  readOnly,
  onChange,
}: Props) => (
  <div className={styles.container}>
    {label && (
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    )}

    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={readOnly ? styles.readOnlyInput : styles.input}
      value={value}
      readOnly={readOnly}
      onChange={onChange}
    />
  </div>
);

export default TextInput;

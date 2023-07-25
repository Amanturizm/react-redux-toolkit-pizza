import React from 'react';

interface Props {
  label: string;
  name: string;
  value: string | number;
  changeValue: React.ChangeEventHandler;
  type?: string;
  className?: string;
}

const NewContactFormItem: React.FC<Props> = ({ label, name, value, changeValue, type, className }) => {
  return (
    <div className={`d-flex justify-content-between align-items-center ${className}`}>
      <label htmlFor={`new-contact-form-input-${name}`} className="text-white">{label}</label>
      <input
        type={type || 'text'}
        name={name}
        id={`new-contact-form-input-${name}`}
        className="form-control w-75"
        value={value}
        onChange={changeValue}
      />
    </div>
  );
};

export default NewContactFormItem;
import { useState } from 'react';
import { fnDefault } from 'helpers';

export default function Input({
  value,
  placeholder,
  icon,
  onBlur = fnDefault,
  onChange = fnDefault,
  onInput = fnDefault
}) {
  const [currentValue, setCurrentValue] = useState(value);
  const [changedValue, setChangedValue] = useState(null);

  function _onInput(e) {
    const newValue = e.target.value;
    setCurrentValue(newValue);
    onInput(newValue);
  }

  function _onBlur(e) {
    const newValue = e.target.value.trim();
    onBlur(newValue);
    _onChange(newValue);
  }

  function _onKeyPress(e) {
    if (e.key === 'Enter') {
      _onChange(e.target.value.trim());
    }
  }

  function _onChange(value) {
    if (changedValue !== value) {
      setChangedValue(value);
      onChange(value);
    }
  }

  return (
    <div className="mt-1 relative rounded-md shadow-sm">
      {icon && (
        <div className="absolute top-2 left-2 w-6 h-6">
          <img src={icon} alt="" />
        </div>
      )}
      <input
        type="text"
        className={
          'w-full h-10 rounded-lg border-grey-border py-3 pr-3 text-12px ' +
          (icon ? 'pl-10' : 'pl-3')
        }
        value={currentValue}
        placeholder={placeholder}
        onBlur={_onBlur}
        onInput={_onInput}
        onKeyPress={_onKeyPress}
      />
    </div>
  );
}

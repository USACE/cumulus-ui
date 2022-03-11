import { classNames } from '../../utils';

/**
 * Just handling clicks right now, can add handlers as they are needed by the UI
 * WTF tailwind, this is not how the classnames function works...
 */
export default function ButtonGroupButton({
  active,
  children,
  disabled,
  onClick,
  title,
}) {
  const cls = classNames(
    '-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium',
    active ? 'bg-indigo-700 text-slate-50  border-indigo-800' : 'text-gray-700',
    disabled ? 'bg-gray-100 text-gray-300' : '',
    'first-of-type:rounded-l-md',
    'only-of-type:rounded-l-md only-of-type:rounded-r-md',
    'last-of-type:rounded-r-md'
  );

  const handleClick = (e) => {
    if (typeof onClick === 'function') {
      onClick(e);
    }
  };

  return (
    <button
      type='button'
      disabled={disabled}
      className={cls}
      onClick={handleClick}
      title={title}
    >
      {children}
    </button>
  );
}

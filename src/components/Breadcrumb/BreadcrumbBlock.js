import Breadcrumb from './Breadcrumb';
import { classNames } from 'helpers'

export default function BreadcrumbBlock({ items, className = '' }) {
  return (
    <div className={classNames('bg-white', className)}>
      <div className="container h-64px flex items-center">
        <Breadcrumb items={items} />
      </div>
    </div>
  );
}

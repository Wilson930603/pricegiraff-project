import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid';

export default function Breadcrumb({ items }) {
  return (
    <div className="flex items-center gap-0.5">
      <a href="/" className="w-3 h-3">
        <HomeIcon />
      </a>
      {items.map((item, idx) => item.name && (
        <div key={idx} className="flex items-center gap-0.5">
          <div className="w-3 h-3">
            <ChevronRightIcon />
          </div>
          <a href={item.path} className="text-13px capitalize">
            {item.name}
          </a>
        </div>
      ))}
    </div>
  );
}

import { useEffect, useState } from 'react';
import { classNames } from 'helpers';

export default function Tabs({ tabs, active = '' }) {
  const [activeTab, setActiveTab] = useState(
    tabs.find((tab) => tab.id === active) || tabs[0]
  );

  useEffect(() => {
    setActiveTab(tabs.find((tab) => tab.id === active) || tabs[0]);
  }, [active, tabs]);

  return (
    <div id="product-tabs">
      <div className="bg-white">
        <div className="container">
          <div className="flex">
            {tabs.map((tab, idx) => (
              <div
                key={idx}
                className={classNames(
                  'border-b-2 px-6 py-4 font-normal text-sm cursor-pointer select-none',
                  tab === activeTab
                    ? 'border-primary text-primary'
                    : 'border-transparent'
                )}
                onClick={() => setActiveTab(tab)}
              >
                {tab.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      {activeTab && activeTab.content}
    </div>
  );
}

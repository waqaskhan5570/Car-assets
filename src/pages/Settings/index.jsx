import { useState } from "react";
import { TABS, TABS_LIST } from "../../utils/constants";
import MyProfile from "./MyProfile";
import OtherTabs from "./OtherTabs";

function Settings() {
  const [activeTab, setActiveTab] = useState(TABS.details);

  // map component with it's key corresponding key
  const TAB_COMPONENTS = {
    [TABS.profile]: <MyProfile />,
    [TABS.details]: <OtherTabs title={TABS.details} />,
    [TABS.details]: <OtherTabs title={TABS.details} />,
    [TABS.notification]: <OtherTabs title={TABS.notification} />,
    [TABS.password]: <OtherTabs title={TABS.password} />,
    [TABS.email]: <OtherTabs title={TABS.email} />,
  };

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-primary-dark">Settings</h1>

      <div className="flex space-x-6 pb-4 mb-6 mt-[30px] overflow-x-auto">
        {TABS_LIST?.map((tab) => (
          <button
            key={tab?.key}
            className={`text-sm sm:text-lg text-secondary-gray-400 font-medium rounded ${
              activeTab === tab?.key
                ? "bg-primary-purple bg-opacity-10 text-[#242731] py-1 px-3"
                : ""
            }`}
            onClick={() => handleTabChange(tab?.key)}
          >
            {tab?.title}
          </button>
        ))}
      </div>

      {/* TO SELECT WHICH COMPONENT TO RENDER */}
      {TAB_COMPONENTS?.[activeTab]}
    </div>
  );
}

export default Settings;

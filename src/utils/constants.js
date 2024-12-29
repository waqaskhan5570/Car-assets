export const STATUS_CONSTANTS = {
  completed: "completed",
  pending: "pending",
};

export const NOTES_LIST = [
  {
    date: "Monday, 6th April 2020",
    description: "Book for General Service",
    status: STATUS_CONSTANTS.completed,
    icon: "icon-analyze",
  },
  {
    date: "Thursday, 24th October 2021",
    description: "Vehicle LV 001 has been marked for recall.",
    status: STATUS_CONSTANTS.pending,
    statusTime: "14:07-21/11/2021",
    icon: "icon-icon-3 text-secondary-red",
  },
  {
    date: "Monday, 13th August 2018",
    description: "Maintenance Completed, Collect",
    status: STATUS_CONSTANTS.pending,
    statusTime: "14:07-21/11/2021",
    icon: "icon-icon-4",
  },
];

export const TABS = {
  details: "details",
  profile: "profile",
  password: "password",
  email: "email",
  notification: "notification",
};

export const TABS_LIST = [
  {
    title: "My details",
    key: TABS.details,
  },
  {
    title: "Profile",
    key: TABS.profile,
  },
  {
    title: "Password",
    key: TABS.password,
  },
  {
    title: "Email",
    key: TABS.email,
  },
  {
    title: "Notification",
    key: TABS.notification,
  },
];

export const GENDER_OPTIONS = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

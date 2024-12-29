import InputField from "./FormFields/InputField";

const SocialProfiles = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <p className="font-medium text-primary-dark">Social Profiles</p>
      <div className="space-y-4 mt-2 md:mt-0">
        <InputField placeholder="facebook.com/" />
        <InputField placeholder="twitter.com/" />
      </div>
    </div>
  );
};

export default SocialProfiles;

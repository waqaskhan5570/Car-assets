import DateField from "../../components/UI/FormFields/DateField";
import InputField from "../../components/UI/FormFields/InputField";
import SelectField from "../../components/UI/FormFields/SelectField";
import ProfilePhotoCard from "../../components/UI/ProfilePhotoCard";
import SocialProfiles from "../../components/UI/SocialProfiles";
import { GENDER_OPTIONS } from "../../utils/constants";

function MyProfile() {
  return (
    <div>
      <h3 className="text-primary-dark">Profile</h3>
      <p className="text-secondary-gray-400 mb-8 border-b pb-7 border-gray-200">
        Update your photo and personal details here.
      </p>

      <form>
        <div className="md:w-9/12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Live in"
            placeholder="Zuichi, Switzerland"
            type="text"
          />

          <InputField
            label="Street Address"
            placeholder="2445 Crosswind Drive"
            type="text"
          />

          <div className="col-span-1 md:col-span-2">
            <InputField
              label="Email Address"
              placeholder="uihutofficial@gmail.com"
              type="email"
            />
          </div>

          <DateField label="Date Of Birth" placeholder="07.12.195" />

          <SelectField label="Gender" name="gender" options={GENDER_OPTIONS} />
        </div>
        <hr className="mt-9 mb-6" />

        <div className="md:w-11/12">
          <ProfilePhotoCard />
        </div>

        <hr className="mt-9 mb-6" />
        <div className="md:w-3/5">
          <SocialProfiles />
        </div>
      </form>
    </div>
  );
}

export default MyProfile;

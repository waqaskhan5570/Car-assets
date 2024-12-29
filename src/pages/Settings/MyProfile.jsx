import DateField from "../../components/UI/FormFields/DateField";
import InputField from "../../components/UI/FormFields/InputField";
import SelectField from "../../components/UI/FormFields/SelectField";
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

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Your Photo
          </label>
          <div className="mt-2 flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="h-16 w-16 rounded-full"
            />
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700"
            >
              Update
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Delete
            </button>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Social Profiles
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
            <input
              type="url"
              placeholder="facebook.com/"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
            />
            <input
              type="url"
              placeholder="twitter.com/"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default MyProfile;

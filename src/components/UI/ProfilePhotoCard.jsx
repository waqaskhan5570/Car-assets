import { useRef } from "react";
import { useState } from "react";

const ProfilePhotoCard = () => {
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setProfileImage(null); // Reset the profile image
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the file input value
    }
  };

  return (
    <div className="flex items-center justify-between flex-wrap">
      <div className="flex items-center gap-20">
        <div>
          <div>
            <p className="font-medium text-primary-dark">Your photo</p>
            <p className="text-sm text-gray-500">
              This will be displayed on your profile.
            </p>
          </div>
        </div>
        <img
          src={profileImage ? profileImage : "https://via.placeholder.com/60"}
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover"
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="text-sm font-medium text-secondary-gray-500 hover:underline"
          onClick={handleDeleteImage}
        >
          Delete
        </button>
        <label
          htmlFor="image-upload"
          className="text-sm font-medium text-primary-purple hover:underline cursor-pointer"
        >
          Update
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageUpload}
        />
      </div>
    </div>
  );
};

export default ProfilePhotoCard;

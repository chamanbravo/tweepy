import { useAppDispatch, useAppSelector } from "@/store";
import { toggleEditModal } from "@/store/features/editModal";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
// import ImageUpload from "../ImageUpload";
import Input from "../Input";
import Modal from "../Modal";

const EditModal = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.editModal);
  const currentUser = useAppSelector((state) => state.user);

  const [profileImage, setProfileImage] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    setProfileImage(currentUser?.image)
    setCoverImage(currentUser?.coverImage)
    setName(currentUser?.name)
    setUsername(currentUser?.username)
    setBio(currentUser?.bio)
  }, [currentUser?.name, currentUser?.username, currentUser?.bio, currentUser?.image, currentUser?.coverImage]);

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      // await axios.patch('/api/edit', { name, username, bio, profileImage, coverImage });

      toast.success('Updated');

      dispatch(toggleEditModal())
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  }, [dispatch]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      {/* <ImageUpload value={profileImage} disabled={isLoading} onChange={(image) => setProfileImage(image)} label="Upload profile image" />
      <ImageUpload value={coverImage} disabled={isLoading} onChange={(image) => setCoverImage(image)} label="Upload cover image" /> */}
      <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
      />
      <Input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        disabled={isLoading}
      />
      <Input
        placeholder="Bio"
        onChange={(e) => setBio(e.target.value)}
        value={bio}
        disabled={isLoading}
      />
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={isOpen}
      title="Edit your profile"
      actionLabel="Save"
      onClose={() => dispatch(toggleEditModal())}
      onSubmit={onSubmit}
      body={bodyContent}
    />
  );
}

export default EditModal;

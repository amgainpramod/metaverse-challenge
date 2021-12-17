import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUsername = () => {
    const newUsername = prompt(
      `Enter your new username (current: ${user.getUsername()})`
    );

    if (!newUsername) return;

    setUserData({
      username: newUsername,
    });
  };

  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        className="hover:text-white"
        disabled={isUserUpdating}
        onClick={setUsername}
      >
        Change Username
      </button>
    </div>
  );
}

export default ChangeUsername;

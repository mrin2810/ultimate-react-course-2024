import FriendsList from "./components/FriensList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from 'react';

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  

  function handleShowAddFriend() {
    setShowAddFriend(show => !show);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>
          {!showAddFriend ? "Add friend" : "Close"}
        </Button>
      </div>
      <div>
        <FormSplitBill />
      </div>
    </div>
  );
}







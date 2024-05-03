import FriendsList from "./components/FriensList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from 'react';
import initialFriends from "./data/initialFriends";

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState([...initialFriends]);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend(show => !show);
  }

  function handleAddFriend(newFriend) {
    setFriends(friends => [...friends, newFriend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList 
          friends={friends} 
          onSelection={handleSelection} 
          selectedFriend={selectedFriend}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend}/>}
        
        <Button onClick={handleShowAddFriend}>
          {!showAddFriend ? "Add friend" : "Close"}
        </Button>
      </div>
      <div>
        {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
      </div>
    </div>
  );
}







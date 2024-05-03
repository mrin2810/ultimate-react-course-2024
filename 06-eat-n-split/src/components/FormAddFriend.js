import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ onAddFriend }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    function handleSubmit(e) {
      e.preventDefault();

      if (!name || !image) return;
      const id = crypto.randomUUID();
      const newFriend = {
        name,
        image: `${image}?=${id}`,
        balance: 0,
        id,
      };

      onAddFriend(newFriend);

      setName("");
      setImage("https://i.pravatar.cc/48")
    }
    return (
      <form className="form-add-friend" onSubmit={handleSubmit}>
        <label>👫 Friend name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
  
        <label>🌅 Image Url</label>
        <input value={image} onChange={(e) => setImage(e.target.value)} type="text" />
  
        <Button>Add</Button>
      </form>
    );
  }
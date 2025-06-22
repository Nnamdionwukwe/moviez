const friendList = [
  {
    id: crypto.randomUUID(),
    image: "https://i.pravatar.cc/48?u=118836",
    name: "Clark",
    balance: -7,
  },
  {
    id: crypto.randomUUID(),
    image: "https://i.pravatar.cc/48?u=933372",
    name: "Sarah",
    balance: 20,
  },
  {
    id: crypto.randomUUID(),
    image: "https://i.pravatar.cc/48?u=499476",
    name: "Anthony",
    balance: 0,
  },
];

function App() {
  return (
    <div>
      <MyApp />
    </div>
  );
}

function MyApp() {
  const [friend, setFriend] = React.useState(friendList);
  const [addFriend, setAddFriend] = React.useState(false);
  const [showFriendBillForm, setShowFriendBillForm] = React.useState(null);

  function handleAddFriend(newFriend) {
    setFriend((friend) => [...friend, newFriend]);
  }

  function handleSelection(friend) {
    //setShowFriendBillForm(friend);
    setShowFriendBillForm((selected) =>
      selected?.id === friend.id ? null : friend
    );
  }

  return (
    <div className="main">
      <div>
        <FriendList
          handleSelection={handleSelection}
          showFriendBillForm={showFriendBillForm}
          friend={friend}
        />

        {addFriend && <AddFriendForm handleAddFriend={handleAddFriend} />}

        <button onClick={() => setAddFriend((addFriend) => !addFriend)}>
          {addFriend ? "Close" : "Add friend"}
        </button>
      </div>

      <div>
        {showFriendBillForm && (
          <ShowFriendForm showFriendBillForm={showFriendBillForm} />
        )}
      </div>
    </div>
  );
}

function FriendList({ friend, handleSelection, showFriendBillForm }) {
  return (
    <div>
      {friend.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          handleSelection={handleSelection}
          showFriendBillForm={showFriendBillForm}
        />
      ))}
    </div>
  );
}

function Friend({ friend, handleSelection, showFriendBillForm }) {
  const isSelected = showFriendBillForm?.id === friend.id;

  return (
    <div className="friend-list">
      <div>
        <img src={friend.image} />
      </div>

      <div className="friend-name">
        <p>{friend.name}</p>

        {friend.balance < 0 && (
          <p>
            You owe {friend.name} {Math.abs(friend.balance)}€
          </p>
        )}

        {friend.balance > 0 && (
          <p>
            {friend.name} owes you {Math.abs(friend.balance)}€
          </p>
        )}

        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      </div>

      <div>
        <button onClick={() => handleSelection(friend)}>
          {isSelected ? "Close" : "Select"}
        </button>
      </div>
    </div>
  );
}

function AddFriendForm({ handleAddFriend }) {
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = { id, image: `${image}?=${id}`, name, balance: 0 };
    handleAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-div">
        <div>👩🏽‍🤝‍👩🏼 Friend name</div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="input-div">
        <div>🖼 Friend name</div>
        <input value={image} onChange={(e) => setImage(e.target.value)} />
      </div>

      <button onClick={() => handleSubmit()}>Add</button>
    </form>
  );
}

function ShowFriendForm({ showFriendBillForm }) {
  const [bill, setBill] = React.useState("");
  const [paidByUser, setPaidByUser] = React.useState("");
  const paidByFriend = bill ? bill - paidByUser : "";

  return (
    <form>
      <h3>SPLIT A BILL WITH {showFriendBillForm.name} </h3>

      <div className="bill-div">
        <p>💰 Bill Value</p>

        <input value={bill} onChange={(e) => setBill(Number(e.target.value))} />
      </div>

      <div className="bill-div">
        <p>🧍‍♂️ Your expense</p>

        <input
          value={paidByUser}
          onChange={(e) =>
            setPaidByUser(
              Number(e.target.value) > bill
                ? paidByUser
                : Number(e.target.value)
            )
          }
        />
      </div>

      <div className="bill-div">
        <p>🧍‍♂️ {showFriendBillForm}'s expense</p>
        <input value={paidByFriend} disabled />
      </div>

      <div className="bill-div">
        <p>🤑 Who is paying the bill</p>
        <select>
          <option value="user">You</option>
          <option value="friend"> {showFriendBillForm.name} </option>
        </select>
      </div>

      <button>Split bill</button>
    </form>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);

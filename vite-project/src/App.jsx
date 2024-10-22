import user from "./user.json";
import "./user.css";
import { UserCard } from "./Usercard";
import { UsercardClass } from "./UsercardClass";

function App() {
  return (
    <>
      <UserCard
        name={user.name}
        phoneNumber={user.phoneNumber}
        age={user.age}
        address={user.address}
      />
      <UsercardClass
        name={user.name}
        phoneNumber={user.phoneNumber}
        age={user.age}
        address={user.address}
      />
    </>
  );
}

export default App;

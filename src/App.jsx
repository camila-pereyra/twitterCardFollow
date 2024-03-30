import { Follow } from "./components/Follow/Follow";
import "./App.css";
export const App = () => {
  return (
    <div id="containerFollow">
      <h1>Who to follow</h1>
      <Follow
        avatar="https://i.pravatar.cc/150?img=16"
        name="Camila Pereyra"
        account="@camilabpereyra"
      />
      <Follow
        avatar="https://i.pravatar.cc/150?img=69"
        name="Javier Diaz"
        account="@javidiaz"
      />
      <Follow
        avatar="https://i.pravatar.cc/150?img=46"
        name="Pablo Leguizamon"
        account="@pabloleguizamon"
      />
    </div>
  );
};

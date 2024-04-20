import { Story } from "../Story";
import "./style.css";
import { Post } from "../Post";
import { Suggestion } from "../Suggestion";

export function Layout() {
  return (
    <>
      <div className="MainGrid">
        
        <div className="first-column">
          <div className="box" style={{margin: "20px 0"}}>
            <Story />
          </div>

          <div className="box">
            <Post />
          </div>
        </div>
        
          <div className="suggestionBox">
            <Suggestion/>
          </div>

      </div>
    </>
  );
}

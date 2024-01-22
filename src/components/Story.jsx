import { useState, useEffect } from "react";
import "./global.css";

const baseURL = "https://shorty-api-5e2212a38a6c.herokuapp.com/get-story/";

const Story = ({ length }) => {
  let st = {
    author: "Loading...",
    prompt: "Loading...",
    content: "Loading...",
  };
  const [story, setStory] = useState(st);

  async function fetchStory(length) {
    let result;
    if (length === "1_minute" || length === "3_minutes" || length === "5_minutes") {
      result = await fetch(baseURL + length);
      result.json().then((json) => {
        let st = {
          author: json.author,
          prompt: json.prompt,
          content: json.content,
        };
        setStory(st);
      });
    } else {
      let st = {
        author: "Loading...",
        prompt: "Loading...",
        content: "Loading...",
      };
      setStory(st);
    }
  }

  useEffect(() => {
    const onLoad = async () => {
      await fetchStory(length);
    };

    onLoad();
  }, []);

  return (
    <div className="story">
      <p className="author">Author: u/{story.author}</p>
      <p className="prompt">{story.prompt}</p>
      <p className="content">{story.content}</p>
      <button
        className="nextStory"
        onClick={async () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          await fetchStory(length);
        }}
      >
        Next Story
      </button>
    </div>
  );
};

export default Story;

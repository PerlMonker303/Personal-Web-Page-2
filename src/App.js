import React, { Component } from "react";

import Welcome from "./components/welcome/welcome";
import Block from "./components/block/block";
import Skills from "./components/skills/skills";

class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  state = {
    blocks: [
      {
        id: 0,
        title: "WHAT I am",
        align: "left",
        content: [
          `Computer Science Student enthusiastic about the wondrous world of technology. 
          From web and mobile development to software engineering, I have always been interested in understanding how apps and 
          complex informatics systems are made.
          `,
          `Therefore I decided to follow my dreams and provide smart solutions to modern problems we face in our everyday lives.`,
        ],
      },
      {
        id: 1,
        title: "WHAT I do",
        align: "right",
        content: [],
        inside: <Skills />,
      },
      {
        id: 2,
        title: "WHAT I did",
        align: "left",
        content: [],
      },
      {
        id: 3,
        title: "CONTACT ME",
        align: "right",
        content: [],
      },
    ],
  };

  scrollToRef = () => window.scrollTo(0, this.myRef.current.offsetTop);
  render() {
    const executeScroll = () => this.scrollToRef(this.myRef);

    return (
      <div className="App">
        <Welcome executeScroll={executeScroll} />
        {this.state.blocks.map((block) => (
          <Block
            key={block.id}
            title={block.title}
            align={block.align}
            content={block.content}
            refference={block.id === 0 ? this.myRef : null}
            inside={block.inside}
          />
        ))}
      </div>
    );
  }
}

export default App;

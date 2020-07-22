import React, { Component } from "react";

import Welcome from "./components/welcome/welcome";
import Block from "./components/block/block";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.firstRef = React.createRef();
    this.contactRef = React.createRef();
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
        inside: <Projects />,
      },
    ],
  };

  scrollToRef = (rf) => window.scrollTo(0, rf.current.offsetTop);

  scrollToBlock = () => {
    console.log("SCROLLED");
  };

  render() {
    const executeFirstScroll = () => this.scrollToRef(this.firstRef);

    const executeContactScroll = () => this.scrollToRef(this.contactRef);

    return (
      <div className="App">
        <Welcome
          firstScroll={executeFirstScroll}
          contactScroll={executeContactScroll}
        />
        {this.state.blocks.map((block) => (
          <Block
            key={block.id}
            title={block.title}
            align={block.align}
            content={block.content}
            refference={block.id === 0 ? this.firstRef : null}
            inside={block.inside}
          />
        ))}
        <Contact contactRef={this.contactRef} />
      </div>
    );
  }
}

export default App;

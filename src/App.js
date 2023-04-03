import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";

function App() {
  const [features, showFeatures] = React.useState(false);
  const [scroll, setScroll] = React.useState(0);
  const [alignMargin, setAlignMargin] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
      setScroll(scrollPosition);
    });
  }, []);

  if (scroll > 0 && alignMargin === false) {
    setAlignMargin(true);
  }
  if (scroll === 0 && alignMargin === true) {
    setAlignMargin(false);
  }

  if (features) {
    console.log("Show feature table");
  }

  return (
    <div className="App">
      <div id="body">
        <center>
          <h1 id="themeHeading">
            Unlock the magic of music with our comprehensive tutorial page
          </h1>
        </center>
        <br />
        <button
          style={{ marginTop: alignMargin ? "20%" : "50%" }}
          id="learnMoreBtn"
          onClick={() => {
            window.location.href = "https://www.instagram.com/bishalgrg020/";
          }}
          className="btn btn-primary"
        >
          Learn More <AiFillInstagram />{" "}
        </button>

        <div
          style={{ marginTop: alignMargin ? "10%" : "50%" }}
          className="shadow p-3 mb-5 bg-white rounded"
          id="objective"
        >
          <center>
            <h6>OUR FEATURES </h6>
          </center>{" "}
          <br />
          <ul>
            <li>
              Lesson plan: A well-structured lesson plan is essential to guide
              learners through the learning process.
            </li>
            <li>
              Video tutorials: Video tutorials are an effective way to teach
              music techniques, theory, and performance.
            </li>
            <li>
              Audio examples: Audio examples are an excellent tool for learners
              to listen to and practice music techniques.
            </li>
            <li>
              Interactive quizzes: Interactive quizzes can help learners test
              their knowledge and understanding of music concepts.
            </li>
            <li>
              Community forum: A community forum is a great way for learners to
              interact with each other, share their experiences, and ask
              questions.
            </li>
            <li>
              Feedback and evaluation: Feedback and evaluation are essential to
              help learners improve their skills and performance.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

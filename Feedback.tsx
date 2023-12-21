import "../index.css";

function Feedback() {
  return (
    <>
      <div id="Container">
        <h1>Feedback</h1>
        <br />
        <br />
        <form
          action="index.html"
          method="POST"
        >
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                Feedback <br />
              </li>
              <li className="page-item"></li>
              <li className="page-item">
                <textarea id="message" name="message" required></textarea>
              </li>
            </ul>
          </nav>
          <a href="../index.html"></a>
          <button>
            <b>Submit</b>
          </button>
        </form>
      </div>
    </>
  );
}

export default Feedback;
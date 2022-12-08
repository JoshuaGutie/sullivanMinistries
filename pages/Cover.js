import Image from "next/image";


function Cover() {
  return (
    <div className="coverContainer">
      <div className="cover">
        <h1 className="coverText">For the equipping of the saints</h1>
      </div>
      <div className="underCover" id="books">
        <h3 style={{ marginTop: "75px" }} className="text">
          Real, lasting happiness can only be found by following God’s commands.
        </h3>
        <p className="text">
          That’s why Pastor Ray created The Habits of Happiness Bible study to
          show you how happiness that’s grounded in God’s unconditional love
          runs deeper than any difficult circumstance, feeling, or relationship
          you experience.
          <br />
          This interactive, full color, hardcover book is filled with Scripture,
          biblical truths, practical lessons, application exercises, and prayers
          to guide your journey. It’s a comprehensive study tool that will help
          you develop biblical habits that lead to true and lasting happiness.{" "}
        </p>
      </div>
    </div>
  );
}

export default Cover;

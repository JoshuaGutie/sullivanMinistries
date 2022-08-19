import authorPhoto from "../public/images/authorPhoto.png";
import Image from "next/image";

function About() {
  return (
    <div className="aboutContainer">
      <div className="navContainer" />
      <div className="aboutTextContainer">
        <div className="apContainer">
          <div><Image src={authorPhoto} alt="author" className="authorPhoto" /></div>
          <span className="text authTitle">Author Reagan Sulivan</span>
        </div>
        <div className="aboutText">
          <h3
            className="text authTitle"
            style={{ fontSize: "32px", textDecoration: "underline" }}
          >
            About the Author
          </h3>
          <p className="text">
            Reagan Sullivan has been in the Lord for close to 35 years. He has
            had the blessing of experiencing a very wide spectrum of Church
            experience ranging from Anabaptist/brethren, to evangelical
            Nondenominationalism, and even survived a sociological cult! This,
            along with his voracious hunger for truth has provided Reagan with a
            keen understanding of biblical doctrine and life. Additionally,
            Reagan has a Bachelor of Ministry and a masters of divinity.
            <br />
            <br />
            Along with his son, Reagan has pioneered Austin family Fellowship
            Church. AFF is a Home Church Network that employs the structure and
            mindset of the early church and is seeking to regain the powerful
            aspects of Christian community.
            <br />
            <br />
            Reagan… Or “brother Ray” as he is called, truly has a heart to
            further the kingdom of God in the lives of those in whom he has
            contact with. It is for this reason that he writes both books and
            songs, Ministers in the church, and serves the needy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

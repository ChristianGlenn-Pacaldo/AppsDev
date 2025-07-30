import { useState } from 'react';

const ProfileCard = () => {
  const [hovered, setHovered] = useState(false);

  const profileImageDefault = "https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/04/gojo-jjk-abilities-2.jpg";
  const profileImageHover = "https://p16-lemon8-sign-sg.tiktokcdn.com/tos-maliva-v-ac5634-us/oIi2nBIo0B6xAyBIBofGiDBEAnEi5AtNgDNzc6~tplv-sdweummd6v-text-logo-v1:QHBlbmVsb3BlamFja3NvbjYy:q75.jpeg?lk3s=c7f08e79&source=lemon8_seo&x-expires=1756382400&x-signature=E4yL45hcSb7A8XhWLUxPLCGepFU%3D";

  return (
    <div className="card">
      <div className="card-header"></div>

      <img
        src={hovered ? profileImageHover : profileImageDefault}
        alt="Profile"
        className="profile-image"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />

      <div className="card-content">
        <h2>Christian Glenn ☑️</h2>
        <p>👥 3.5K Friends </p>
        <p>👍 2.525 Likes</p>
        <p>🔔 1.5K Subcibers</p>
        <ol> Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ducimus fuga dolore similique error. Iste facilis eos ea maiores quis ut? Amet minima iusto dolor suscipit omnis, quasi ullam doloremque.</ol>

        <a href="https://www.facebook.com/itsme.nahce" target="_blank" rel="noreferrer">
          <button className="addfriend-button">Add Friend➕</button>
        </a>

        <div className="stats">
          <div><p>Videos</p><strong>1.7K</strong></div>
          <div><p>PROJECTS</p><strong>1.800K</strong></div>
          <div><p>POSTS</p><strong>4K</strong></div>
        </div>

        <h3 className="skill-title">SKILLS &lt;/&gt;</h3>

        <div>
          <p>HTML5 - 85%</p>
          <progress value="85" max="100" className="progress-bar"></progress>
        </div>
        <div>
          <p>CSS - 85%</p>
          <progress value="85" max="100" className="progress-bar"></progress>
        </div>
        <div>
          <p>JavaScript - 75%</p>
          <progress value="75" max="100" className="progress-bar"></progress>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

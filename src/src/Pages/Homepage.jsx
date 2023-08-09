import './homepage.css';
import profileImage from "../assets/OIG.JPG"
import Authorization from '../Components/Authorization';


const Homepage = () => {

  return (


    <div className="homepage">
     < Authorization/>
      <div className="circle">

        <img src={profileImage} alt="Profile Image" />
      </div>
      <h1 className='myName'>Alexander Inyama</h1>
      <div className="typing-text">Hello, I am Alexander Inyama</div>



    </div>


  );
};

export default Homepage;

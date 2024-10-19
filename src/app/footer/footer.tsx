import { FaGithub, FaEnvelope , FaLinkedin } from 'react-icons/fa';
export default function Footer(){
    return(
      <footer className="footer">
       
        <div className="icon">
          <FaEnvelope size={30}  />
          <a href="aqsafirdous49@gmail.com" >aqsafirdous49@gmail.com</a>
        
        
          <FaLinkedin size={30}  />
          <a href="https://www.linkedin.com/in/aqsa-firdous31">LinkedIn</a>
        
        
          <FaGithub size={30}  />
          <a href="https://github.com/AqsaFirdous234
 " >GitHub</a>
        </div>
        <hr />
        <div className="container">
        <p>&copy; {new Date().getFullYear()} Aqsa Firdous. All rights reserved.</p>

        </div>
        
    
      
    
      </footer>
    )
}
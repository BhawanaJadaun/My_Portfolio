import React from 'react';
import './services.css';
import website_creation from "../../assets/s1.png";
import customization from "../../assets/s2.png";
import file_conversion from "../../assets/s3.png";

const Services = () => {
  return (
    <>
      <div className='services'>
        <h2>SERVICES -</h2>
        <h1><span>Services</span> That I Provide</h1>
      </div>
      <section>
        <div className='card'>
          <div className='icon'>
            <img src={website_creation} alt="Website Creation" />
          </div>
          <div className='title'>
            <h3>Website Creation</h3>
          </div>
          <div className='detail'>
            <p>I will build any kind of fully Responsive Website for your Business.</p>
          </div>
        </div>
        <div className='card'>
          <div className='icon'>
            <img src={file_conversion} alt="File Conversion" />
          </div>
          <div className='title'>
            <h3>File Conversion</h3>
          </div>
          <div className='detail'>
            <p>I will convert PSD to HTML, Figma to HTML websites and vice versa.</p>
          </div>
        </div>
        <div className='card'>
          <div className='icon'>
            <img src={customization} alt="Customization" />
          </div>
          <div className='title'>
            <h3>Customization</h3>
          </div>
          <div className='detail'>
            <p>I will do any customization for your prebuilt HTML Website.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;

// import React from 'react';
// import './services.css';
// import { CgWebsite } from "react-icons/cg";
// import { SiCustomink } from "react-icons/si";
// import { FaFileAlt } from "react-icons/fa";
// // import customization from "../../assets/s2.png";
// // import file_conversion from "../../assets/s3.png";

// const Services = () => {
//   return (
//     <>
//       <div className='services'>
//         <h2>SERVICES -</h2>
//         <h1><span>Services</span> That I Provide</h1>
//       </div>
//   <section>
//         <div className='card'>
//             <i><CgWebsite/></i>
//             <div className='Title'>Website Creation</div>
//             <div className='detail'>I will build any kind of fully Responsive Website for your Business.</div>
//             </div>
       
    
//         <div className='card'>
//         <i><FaFileAlt/></i>
//             <div className='Title'>File Conversion</div>
//             <div className='detail'>I will convert PSD to HTML, Figma to HTML websites and vice versa.</div>
//         </div>
//         <div className='card'>
//         <i><SiCustomink/></i>
//             <div className='Title'>Customization</div>
//             <div className='detail'>I will do any customization for your prebuilt HTML Website</div>
//         </div>
//    </section>
//     </>
//   );
// }

// export default Services;


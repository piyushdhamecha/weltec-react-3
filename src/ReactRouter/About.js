// import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const About = () => {
  // const navigate = useNavigate()

  // const shouldRedirect = true;

  // useEffect(() => {
  //   if(shouldRedirect) {
  //     navigate("/home")
  //   }
  // }, [])

  return <Navigate replace={true} to="/home" />

  // return (
  //   <div>
  //     <h2>About</h2>
  //     {shouldRedirect && <Navigate to="/home" />}
  //   </div>
  // );
};

export default About;

import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Carlos Filho" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="https://raw.githubusercontent.com/ysneshy/ysneshy/main/.github/CARLOS%20AUGUSTO%20DINIZ%20FILHO%202024-1.pdf" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;

// SideBar.jsx
import React from 'react';
import PropTypes from 'prop-types';
import VerticalTabs from './VerticalTabs'; // Importando o componente VerticalTabs
import './style.css';

function SideBar({ activeTab, handleTabChange }) {
  return (
    <div className='sidebar'>
      <VerticalTabs activeTab={activeTab} handleTabChange={handleTabChange} />
      {/* Mais conteúdo do sidebar */}
    </div>
  );
}

SideBar.propTypes = {
  activeTab: PropTypes.number.isRequired,
  handleTabChange: PropTypes.func.isRequired,
};

export default SideBar;
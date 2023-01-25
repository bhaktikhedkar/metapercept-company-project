import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';
import "./Footer.css";

function Footer() {
  return (
    <div className='div-foot'>
       <div className='foot'>Copyright <span><CopyrightIcon /></span>2021.All Rights Reserved.</div>
       <div className='bck'>Back to top</div> 
    </div>
  )
}

export default Footer
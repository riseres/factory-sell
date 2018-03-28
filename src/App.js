import React, { Component } from 'react';
// import "bulma/css/bulma.css";
// import './bootstrap/css/bootstrap.css'
// import './bootstrap/js/bootstrap'

import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

// const bootstrap = require('bootstrap')
// require('bootstrap')

class App extends Component {
  render() {

    const images = []

    // for (let i = 0; i < 9; i++) {
    //   images.push({
    //     original: `./factoryPic/${i + 1}`,
    //   })
    // }

    return (
      <div className='col-sd-12 col-md-6 offset-md-3' style={{ marginTop: 25 }}>
        <center><h3 >Factoy For Sell</h3></center>
        <div style={{ marginTop: 15 }}>
          <center>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1AFsjc0PR9Db1CFvdWiWR4wfNWPyELrXj" width="100%" height="480"></iframe>
          </center>
        </div>

        {/* <img  src='./factoryPic/1.jpg'/> */}
        <div style={{ margin: 15 }}>
          ขายด่วน !!<br />
          โรงงานขนาดใหญ่  อยู่ในเขตเจริญแล้ว อ.เมืองจ.ปทุมธานี สร้างเต็มเนื้อที่* เกือบ15ไร่.<br />
          พร้อมอาคาร ใหญ่ 8 หลัง. มีหม้อแปลงใหญ่ 500 เควีเอ.  ไฟฟ้า น้ำประปา โทร. ไวไฟ.. ใบอนุญาติประกอบโรงงาน  ครบ.<br />
          พร้อมใช้งานได้ทันที <br />
          ขายราคา 190 ล้านบาท..<br />
          สนใจติดต่อ  คุณพรชัย โทร. 0818903818 หรือ ( Line ID. 0818903818)
          </div>
        <div>
          <ImageGallery items={images} />
        </div>
      </div>
    );
  }
}

export default App;

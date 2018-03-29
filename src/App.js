import React, { Component } from "react";
// import "bulma/css/bulma.css";
// import './bootstrap/css/bootstrap.css'
// import './bootstrap/js/bootstrap'

import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

// const bootstrap = require('bootstrap')
// require('bootstrap')

class App extends Component {
  render() {
    const images = [];

    // for (let i = 0; i < 9; i++) {
    //   images.push({
    //     original: require(`./factoryPic/${(i + 1)}.jpg`),
    //     thumbnail: require(`./factoryPic/${(i + 1)}.jpg`),
    //   })
    // }

    return (
      <div className="col-sd-12 col-md-12" style={{ marginTop: 25 }}>
        <div className="d-none d-md-block d-lg-block d-xl-block">
          <h1 className="display-4 text-center ">Factory for sales </h1>
        </div>

        <div className="d-xs-block   d-sm-block   d-md-none">
          <h4 className=" text-center ">Factory for sales </h4>
        </div>

        <div className="text-center">
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vSD7jssQ65kABI7tNezM4Z1p1om7QP4hjCXHMdGG9IKoMOVii276E4XeHhjPDlmTmyLI0waOgSgZ9DB/embed?start=true&loop=true&delayms=3000"
            frameborder="0"
            width="400"
            height="400"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          />
          {/* <ImageGallery items={images} showThumbnails={false} /> */}
        </div>

        <blockquote
          className="blockquote text-center"
          style={{ marginTop: 25 }}
        >
          <p className="mb-0">
            ขายด่วน !! ...*โรงงานขนาดใหญ่ สร้างมา14 ปี อยู่ในเขตเจริญแล้ว
            อ.เมืองจ.ปทุมธานี สร้างเต็มเนื้อที่* เกือบ15ไร่.{" "}
          </p>
        </blockquote>

        <blockquote className="blockquote text-center">
          <p className="mb-0">
            พร้อมอาคาร ใหญ่ 8 หลัง. มีหม้อแปลงใหญ่ 500 เควีเอ. ไฟฟ้า น้ำประปา
            โทร. ไวไฟ.. ครบ. สภาพพร้อมใช้งาน ได้ทันที{" "}
            <span style={{ color: "blue", fontWeight: "bold" }}>
              ขายราคา 190 ล้านบาท
            </span>
          </p>
        </blockquote>

        <blockquote className="blockquote text-center">
          <p className="mb-0">
            สนใจติดต่อ โทร. 0818903818 หรือ ( Line ID. 0818903818)
          </p>
        </blockquote>

        <div style={{ marginTop: 15 }}>
          <center>
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1AFsjc0PR9Db1CFvdWiWR4wfNWPyELrXj"
              width="100%"
              height="480"
            />

            
          </center>
        </div>

        <blockquote
          className="blockquote text-center"
          style={{ marginTop: 25 }}
        >
          <p className="mb-0">
            Factory*for Sales. Urgent**..!! Big factory near Patumthani City. 7
            Km.only.
          </p>
        </blockquote>

        <blockquote
          className="blockquote text-center"
          style={{ marginTop: 25 }}
        >
          <p className="mb-0">
            On the Land about 15 Rai. Including 8 numbers of Buildings.
            Transformer..electrical 500Kva..Water..Wifi etc.
          </p>
        </blockquote>

        <blockquote
          className="blockquote text-center"
          style={{ marginTop: 25 }}
        >
          <p className="mb-0">
            **Ready for Operation.{" "}
            <span style={{ color: "blue", fontWeight: "bold" }}>
              Sales at 190 Million Bath only.
            </span>
          </p>
        </blockquote>

        <blockquote
          className="blockquote text-center"
          style={{ marginTop: 25 }}
        >
          <p className="mb-0">Contact 0818903818 (Line ID also 0818903818 )</p>
        </blockquote>

        <div className="text-center d-none d-md-block d-lg-block d-xl-block ">
        <img style={{margin:'0 auto'}}
            className="img-thumbnail center-block"
            src={require(`./factoryPic/map.jpg`)}
          />
        </div>
         
        <div className="text-center d-xs-block   d-sm-block   d-md-none ">
        <img style={{margin:'0 auto', width : 400}}
            className="img-thumbnail center-block"
            src={require(`./factoryPic/map.jpg`)}
          />
        </div>
         
      </div>
    );
  }
}

export default App;

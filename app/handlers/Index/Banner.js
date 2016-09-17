/** @jsx React.DOM */
var React = require('react');
var api = require('../../utils/api');

var hybrid = require('./../common/hybrid');

var PIC_LIMIT = 2;

var Banner = module.exports = React.createClass({

  componentDidMount() {

    // 滚动
    var swiper = require('./../vendor/swiper');
    var swiper = new Swiper('.nbanner .swiper-container', {
      pagination: '.nbanner .swiper-pagination',
      autoplay: 4000,
      autoplayDisableOnInteraction: false,
      speed: 300,
      loop: true,
      longSwipesRatio: 1
    });

    // 第三张之后图片懒加载
    var list = document.querySelectorAll('.nbanner [data-src]');
    for (var i = 0; i < list.length; i++) {
      if (i >= PIC_LIMIT - 1) {
        list[i].src = list[i].dataset["src"];
      }
    }

  },

  helpers: {
    bannerImg: function(img) {
      return "http://lehumall.b0.upaiyun.com" + img;
    },
  },

  render: function() {
    return (
      <div className="nbanner">
          <div className="swiper-container">
              <div className="swiper-wrapper" id="ajax_banner" ref="banner">
                  {
                    this.props.data.bannerList.map((banner, index) => {
                        if (index < PIC_LIMIT) {
                          return <div className="swiper-slide" key={banner.ID} data-banner={JSON.stringify(banner)}>
                          <img src={this.helpers.bannerImg(banner.BANNER_IMG)} data-original={banner.BANNER_IMG}/>
                          </div>
                        } else {
                          return <div className="swiper-slide" key={banner.ID} data-banner={JSON.stringify(banner)}>
                          <img className='lazyload' data-src={this.helpers.bannerImg(banner.BANNER_IMG)} data-original={banner.BANNER_IMG}/>
                          </div>
                        }
                        
                    })
                  }
              </div>
              <div className="swiper-pagination"></div>
          </div>
      </div>
    );
  }
});
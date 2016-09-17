/** @jsx React.DOM */
var React = require('react');
var api = require('../../utils/api');

var hybrid = require('./../common/hybrid');

var Tags = module.exports = React.createClass({

  bannerImg: function(img) {
    return "http://lehumall.b0.upaiyun.com" + img;
  },

  tagClick: function(tag) {
    var clickedTag = this.tagMap[tag["ID"]];
    if (clickedTag) {
      var type = clickedTag.type;
      if (type == 'h5') {
        window.location.href = clickedTag.url;
      } else if (type == 'native') {
        var jsonParams = {
          'funName': 'shortcut_fun',
          'params': {
            'FAST_NAME': tag["FAST_NAME"],
            'dID': tag["ID"],
            'LINK_NAME': tag["LINK_NAME"],
            'FAST_IMG': tag["FAST_IMG"]
          }
        };
        hybrid.nativeFun(jsonParams);
      } else if (type == 'nativehongbao') {
        var jsonParams = {
          'funName': 'promotion_more_fun',
          'params': {
            'id': '642',
            'promotion_name': '红包商品专区',
            'detail_layout': '2'
          }
        };
        hybrid.nativeFun(jsonParams);
      } else {
        //其他类型不支持点击
        return false;
      }
    }
  },

  tagMap: {
    "17": {
      type: "native",
      name: "摇一摇"
    },
    "22": {
      type: "native",
      name: "免费试用"
    },
    "25": {
      type: "native",
      name: "每日签到"
    },
    "6": {
      type: "nativehongbao",
      name: "红包专区"
    },
    "-1": {
      type: "native",
      name: "播播直播"
    },
    "3": {
      type: "h5",
      name: "海外购",
      url: 'list.html?storeId=1031&mark=5',
      query: 'storeId=1031&mark=5'
    },
    "5": {
      type: "h5",
      name: "日韩馆",
      url: 'list.html?originIds=42&mark=8',
      query: 'originIds=42&mark=8'
    },
    "15": {
      type: "h5",
      name: "澳洲馆",
      url: 'list.html?originIds=44&mark=8',
      query: 'originIds=44&mark=8'
    },
    "8": {
      type: "h5",
      name: "欧洲馆",
      url: 'list.html?originIds=43&mark=8',
      query: 'originIds=43&mark=8'
    },
    "7": {
      type: "h5null",
      name: "全部",
      url: 'list.html?originIds=42&mark=8'
    }
  },

  render: function() {
    return (
      <div className="ntag" id="ajax_fastList">
          {
            this.props.data.fastList.map((tag) => {
                return <a href='javascript:;' key={tag.ID} onClick={this.tagClick.bind(this, tag)}>
                  <img className='lazyload' data-src={this.bannerImg(tag.FAST_IMG)}/>
                  <span>{tag.FAST_NAME}</span>
                </a>
            })
          }
      </div>
    );
  }
});
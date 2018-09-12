// pages/detail/detail.js
import { fetchData, starToArray } from "../../utils/utils.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let type = options.type;
    let url = "https://beta-api.m.jd.com/?functionId=ncFineDiscountIndex&body={'pageNum':'1','pageSize':'10','categoryId':0}&client=wh5&clientVersion=1.0.0";
    switch (type) {
      case "top250":
        break;
      case "电影":
        break;
      case "即将上影":
        break;
    }
    fetchData(url).then(res=>{
      console.log("---------------")
        console.log(res);
       
    })
    this.proessDate(obj);
  },
  proessDate(res) {
    let datas = res.subjects;
    let arr = [];
    for (let i = 0; i < datas.length; i++) {
      let cur = datas[i];
      let tmpl = {
        images: cur.images.medium,
        title: cur.title,
        rating: {
          stars: starToArray(cur.rating.stars),//星
          average: cur.rating.average //评分
        }
      }
      arr.push(tmpl);
    }
    let obj1 = {
      movies: arr.reverse(),
    }
    this.setData(obj1);
    console.log("=======")
    console.log(arr);
  },
  bindToSearch(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  bindToDetail(e){
    let mid = e.currentTarget.dataset.mid;
    console.log(mid)
    wx.navigateTo({
      url: '../index/movie-detail/movie-detail?mid='+mid,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

let obj = {
  "subjects": [
    {
      "rating": {
        "max": 10,
        "average": 8.3,
        "stars": "45",
        "min": 0
      },
      "genres": [
        "动作",
        "惊悚",
        "冒险"
      ],
      "title": "碟中谍6：全面瓦解",
      "casts": [
       
        {
          "alt": "https://movie.douban.com/celebrity/1048129/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8712.webp",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8712.webp",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1535963472.93.webp"
          },
          "name": "文·瑞姆斯",
          "id": "1048129"
        }
      ],
      "collect_count": 300752,
      "original_title": "Mission: Impossible - Fallout",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1276314/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1535912054.09.webp",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1535912054.09.webp",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1535912054.09.jpg"
          },
          "name": "克里斯托弗·麦奎里",
          "id": "1276314"
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2529365085.webp",
        "large": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2529365085.webp",
        "medium": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2529365085.jpg"
      },
      "alt": "https://movie.douban.com/subject/26336252/",
      "id": "26336252"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [
        "剧情"
      ],
      "title": "勇敢往事",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1316634/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p37025.webp",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p37025.webp",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p37025.webp"
          },
          "name": "赵静",
          "id": "1316634"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1391127/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1522824500.67.webp",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1522824500.67.webp",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1522824500.67.webp"
          },
          "name": "王勇",
          "id": "1391127"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1391128/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1522824518.67.webp",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1522824518.67.webp",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1522824518.67.webp"
          },
          "name": "刘磊",
          "id": "1391128"
        }
      ],
      "collect_count": 97,
      "original_title": "勇敢往事",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1339798/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/pGpynvK44y08cel_avatar_uploaded1397876393.45.webp",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/pGpynvK44y08cel_avatar_uploaded1397876393.45.webp",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/pGpynvK44y08cel_avatar_uploaded1397876393.45.webp"
          },
          "name": "叶田",
          "id": "1339798"
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2524173793.webp",
        "large": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2524173793.webp",
        "medium": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2524173793.webp"
      },
      "alt": "https://movie.douban.com/subject/27191430/",
      "id": "27191430"
    },
    {
      "rating": {
        "max": 10,
        "average": 6.5,
        "stars": "35",
        "min": 0
      },
      "genres": [
        "剧情",
        "冒险"
      ],
      "title": "阿尔法：狼伴归途",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1248592/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1354128837.83.webp",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1354128837.83.webp",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1354128837.83.webp"
          },
          "name": "柯蒂·斯密特-麦菲",
          "id": "1248592"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1013863/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18400.webp",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18400.webp",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18400.webp"
          },
          "name": "娜塔莎·迈尔兹",
          "id": "1013863"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1013889/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p15807.webp",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p15807.webp",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p15807.webp"
          },
          "name": "蕾奥娜·维埃拉",
          "id": "1013889"
        }
      ],
      "collect_count": 14064,
      "original_title": "Alpha",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1000201/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22148.webp",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22148.webp",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22148.webp"
          },
          "name": "艾尔伯特·休斯",
          "id": "1000201"
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530871439.webp",
        "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530871439.webp",
        "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530871439.webp"
      },
      "alt": "https://movie.douban.com/subject/26810318/",
      "id": "26810318"
    },
    {
      "rating": {
        "max": 10,
        "average": 7.5,
        "stars": "40",
        "min": 0
      },
      "genres": [
        "动作",
        "科幻",
        "冒险"
      ],
      "title": "蚁人2：黄蜂女现身",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1002667/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1501385708.56.webp",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1501385708.56.webp",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1501385708.56.webp"
          },
          "name": "保罗·路德",
          "id": "1002667"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1021963/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4077.webp",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4077.webp",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4077.webp"
          },
          "name": "伊万杰琳·莉莉",
          "id": "1021963"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1131634/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1454118774.76.webp",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1454118774.76.webp",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1454118774.76.webp"
          },
          "name": "迈克尔·佩纳",
          "id": "1131634"
        }
      ],
      "collect_count": 324819,
      "original_title": "Ant-Man and the Wasp",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1009586/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p38984.webp",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p38984.webp",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p38984.webp"
          },
          "name": "佩顿·里德",
          "id": "1009586"
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529389608.webp",
        "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529389608.webp",
        "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529389608.webp"
      },
      "alt": "https://movie.douban.com/subject/26636712/",
      "id": "26636712"
    },
    {
      "rating": {
        "max": 10,
        "average": 7.6,
        "stars": "40",
        "min": 0
      },
      "genres": [
        "剧情",
        "传记",
        "运动"
      ],
      "title": "传奇的诞生",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1366032/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1535963472.93.webp",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1535963472.93.webp",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1535963472.93.webp"
          },
          "name": "凯文·德·保拉",
          "id": "1366032"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1366033/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1482122272.76.webp",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1482122272.76.webp",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1482122272.76.webp"
          },
          "name": "莱昂纳多·利马·卡瓦柳",
          "id": "1366033"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1018330/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p27284.webp",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p27284.webp",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p27284.webp"
          },
          "name": "索·豪黑",
          "id": "1018330"
        }
      ],
      "collect_count": 8487,
      "original_title": "Pelé: Birth of a Legend",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1361073/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1535963367.24.webp",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1535963367.24.webp",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1535963367.24.webp"
          },
          "name": "杰夫·泽姆巴利斯特",
          "id": "1361073"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1361074/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1535963411.16.webp",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1535963411.16.webp",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1535963411.16.webp"
          },
          "name": "迈克尔·泽姆巴利斯特",
          "id": "1361074"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2531286907.webp",
        "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2531286907.webp",
        "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2531286907.webp"
      },
      "alt": "https://movie.douban.com/subject/3073268/",
      "id": "3073268"
    },
    {
      "rating": {
        "max": 10,
        "average": 5.3,
        "stars": "30",
        "min": 0
      },
      "genres": [
        "剧情",
        "犯罪",
        "悬疑"
      ],
      "title": "道高一丈",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1275718/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1357005509.65.webp",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1357005509.65.webp",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1357005509.65.webp"
          },
          "name": "聂远",
          "id": "1275718"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1275687/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p39183.webp",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p39183.webp",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p39183.webp"
          },
          "name": "谭凯",
          "id": "1275687"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1274777/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1417604913.76.webp",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1417604913.76.webp",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1417604913.76.webp"
          },
          "name": "徐露",
          "id": "1274777"
        }
      ],
      "collect_count": 4286,
      "original_title": "道高一丈",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1317408/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1464595053.55.webp",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1464595053.55.webp",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1464595053.55.webp"
          },
          "name": "姜凯阳",
          "id": "1317408"
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530863118.webp",
        "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530863118.webp",
        "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530863118.webp"
      },
      "alt": "https://movie.douban.com/subject/26954268/",
      "id": "26954268"
    }
  ]
}
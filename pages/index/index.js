// pages/index/index.js


import { fetchData, starToArray } from "../../utils/utils.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters: {
      movies: [],
      name: "电影"
    },
    comigSoon: {
      movies: [],
      name: "即将上影"
    },
    top250: {
      movies: [],
      name: "top250"
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let doubanurl = 'http://api.douban.com/v2/movie/in_theaters?star=0&count=6';
    let jdurl = 'https://api.m.jd.com/?functionId=newChannelSpecialProduct&body={"pageNum":"1","pageSize":"30"}&client=wh5&clientVersion=1.0.0';
    fetchData(doubanurl).then(res => {
      this.proessDate(obj, "电影", "inTheaters");
    })
    let douban2 = "https://api.douban.com/v2/movie/coming_soon?star=0&count=6";
    fetchData(douban2).then(res => {
      this.proessDate(obj2, "即将上影", "comigSoon");
      console.log(res.data);
    })

  },
  proessDate(res, name, type) {
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
    let obj1 = {};
    obj1[type] = {
      movies: arr.reverse(),
      name,
    }
    this.setData(obj1);
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

let obj2 ={
  "subjects": [
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
                      "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p37025.webp",
                      "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p37025.webp",
                      "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p37025.webp"
                  },
                  "name": "赵静",
                  "id": "1316634"
              },
              {
                  "alt": "https://movie.douban.com/celebrity/1391127/",
                  "avatars": {
                      "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1522824500.67.webp",
                      "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1522824500.67.webp",
                      "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1522824500.67.webp"
                  },
                  "name": "王勇",
                  "id": "1391127"
              },
              {
                  "alt": "https://movie.douban.com/celebrity/1391128/",
                  "avatars": {
                      "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1522824518.67.webp",
                      "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1522824518.67.webp",
                      "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1522824518.67.webp"
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
                      "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pGpynvK44y08cel_avatar_uploaded1397876393.45.webp",
                      "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pGpynvK44y08cel_avatar_uploaded1397876393.45.webp",
                      "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pGpynvK44y08cel_avatar_uploaded1397876393.45.webp"
                  },
                  "name": "叶田",
                  "id": "1339798"
              }
          ],
          "year": "2018",
          "images": {
              "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2524173793.webp",
              "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2524173793.webp",
              "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2524173793.webp"
          },
          "alt": "https://movie.douban.com/subject/27191430/",
          "id": "27191430"
      },
      {
          "rating": {
              "max": 10,
              "average": 0,
              "stars": "00",
              "min": 0
          },
          "genres": [
              "动作",
              "惊悚"
          ],
          "title": "古墓兽影",
          "casts": [
              {
                  "alt": "https://movie.douban.com/celebrity/1275718/",
                  "avatars": {
                      "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1357005509.65.webp",
                      "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1357005509.65.webp",
                      "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1357005509.65.webp"
                  },
                  "name": "聂远",
                  "id": "1275718"
              },
              {
                  "alt": "https://movie.douban.com/celebrity/1037846/",
                  "avatars": {
                      "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40360.webp",
                      "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40360.webp",
                      "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40360.webp"
                  },
                  "name": "莫少聪",
                  "id": "1037846"
              },
              {
                  "alt": "https://movie.douban.com/celebrity/1318040/",
                  "avatars": {
                      "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p50590.webp",
                      "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p50590.webp",
                      "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p50590.webp"
                  },
                  "name": "安泽豪",
                  "id": "1318040"
              }
          ],
          "collect_count": 18,
          "original_title": "古墓兽影",
          "subtype": "movie",
          "directors": [
              {
                  "alt": "https://movie.douban.com/celebrity/1321641/",
                  "avatars": {
                      "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1535602568.77.webp",
                      "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1535602568.77.webp",
                      "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1535602568.77.webp"
                  },
                  "name": "李麒麟",
                  "id": "1321641"
              }
          ],
          "year": "2018",
          "images": {
              "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533829843.webp",
              "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533829843.webp",
              "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533829843.webp"
          },
          "alt": "https://movie.douban.com/subject/30311865/",
          "id": "30311865"
      },
      {
          "rating": {
              "max": 10,
              "average": 6.8,
              "stars": "35",
              "min": 0
          },
          "genres": [
              "剧情",
              "奇幻"
          ],
          "title": "镰仓物语",
          "casts": [
              {
                  "alt": "https://movie.douban.com/celebrity/1028795/",
                  "avatars": {
                      "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1353675638.54.webp",
                      "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1353675638.54.webp",
                      "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1353675638.54.webp"
                  },
                  "name": "堺雅人",
                  "id": "1028795"
              },
              {
                  "alt": "https://movie.douban.com/celebrity/1330848/",
                  "avatars": {
                      "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1416788895.28.webp",
                      "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1416788895.28.webp",
                      "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1416788895.28.webp"
                  },
                  "name": "高畑充希",
                  "id": "1330848"
              },
              {
                  "alt": "https://movie.douban.com/celebrity/1151079/",
                  "avatars": {
                      "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4033.webp",
                      "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4033.webp",
                      "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4033.webp"
                  },
                  "name": "堤真一",
                  "id": "1151079"
              }
          ],
          "collect_count": 32214,
          "original_title": "DESTINY 鎌倉ものがたり",
          "subtype": "movie",
          "directors": [
              {
                  "alt": "https://movie.douban.com/celebrity/1301398/",
                  "avatars": {
                      "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p53321.webp",
                      "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p53321.webp",
                      "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p53321.webp"
                  },
                  "name": "山崎贵",
                  "id": "1301398"
              }
          ],
          "year": "2017",
          "images": {
              "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2532008868.webp",
              "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2532008868.webp",
              "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2532008868.webp"
          },
          "alt": "https://movie.douban.com/subject/26916229/",
          "id": "26916229"
      },
      {
          "rating": {
              "max": 10,
              "average": 6.6,
              "stars": "35",
              "min": 0
          },
          "genres": [
              "剧情",
              "爱情"
          ],
          "title": "念念手纪",
          "casts": [
              {
                  "alt": "https://movie.douban.com/celebrity/1324483/",
                  "avatars": {
                      "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p59244.webp",
                      "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p59244.webp",
                      "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p59244.webp"
                  },
                  "name": "滨边美波",
                  "id": "1324483"
              },
              {
                  "alt": "https://movie.douban.com/celebrity/1314521/",
                  "avatars": {
                      "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1458386920.72.webp",
                      "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1458386920.72.webp",
                      "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1458386920.72.webp"
                  },
                  "name": "北村匠海",
                  "id": "1314521"
              },
              {
                  "alt": "https://movie.douban.com/celebrity/1023064/",
                  "avatars": {
                      "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p39264.webp",
                      "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p39264.webp",
                      "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p39264.webp"
                  },
                  "name": "北川景子",
                  "id": "1023064"
              }
          ],
          "collect_count": 10198,
          "original_title": "君の膵臓をたべたい",
          "subtype": "movie",
          "directors": [
              {
                  "alt": "https://movie.douban.com/celebrity/1372453/",
                  "avatars": {
                      "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1500646774.95.webp",
                      "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1500646774.95.webp",
                      "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1500646774.95.webp"
                  },
                  "name": "月川翔",
                  "id": "1372453"
              }
          ],
          "year": "2017",
          "images": {
              "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2531648684.webp",
              "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2531648684.webp",
              "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2531648684.webp"
          },
          "alt": "https://movie.douban.com/subject/26869119/",
          "id": "26869119"
      },
      {
          "rating": {
              "max": 10,
              "average": 7.1,
              "stars": "35",
              "min": 0
          },
          "genres": [
              "剧情",
              "犯罪"
          ],
          "title": "未择之路",
          "casts": [
              {
                  "alt": "https://movie.douban.com/celebrity/1274550/",
                  "avatars": {
                      "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1401519674.96.webp",
                      "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1401519674.96.webp",
                      "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1401519674.96.webp"
                  },
                  "name": "王学兵",
                  "id": "1274550"
              },
              {
                  "alt": "https://movie.douban.com/celebrity/1011935/",
                  "avatars": {
                      "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1415523283.1.webp",
                      "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1415523283.1.webp",
                      "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1415523283.1.webp"
                  },
                  "name": "马伊琍",
                  "id": "1011935"
              },
              {
                  "alt": "https://movie.douban.com/celebrity/1396885/",
                  "avatars": {
                      "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1531119856.76.webp",
                      "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1531119856.76.webp",
                      "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1531119856.76.webp"
                  },
                  "name": "朱耕佑",
                  "id": "1396885"
              }
          ],
          "collect_count": 2968,
          "original_title": "未择之路",
          "subtype": "movie",
          "directors": [
              {
                  "alt": "https://movie.douban.com/celebrity/1351952/",
                  "avatars": {
                      "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1528697520.72.webp",
                      "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1528697520.72.webp",
                      "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1528697520.72.webp"
                  },
                  "name": "唐高鹏",
                  "id": "1351952"
              }
          ],
          "year": "2018",
          "images": {
              "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533833822.webp",
              "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533833822.webp",
              "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533833822.webp"
          },
          "alt": "https://movie.douban.com/subject/26607969/",
          "id": "26607969"
      },
      {
          "rating": {
              "max": 10,
              "average": 0,
              "stars": "00",
              "min": 0
          },
          "genres": [
              "剧情",
              "动作",
              "犯罪"
          ],
          "title": "反贪风暴3",
          "casts": [
              {
                  "alt": "https://movie.douban.com/celebrity/1027577/",
                  "avatars": {
                      "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1421047436.79.webp",
                      "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1421047436.79.webp",
                      "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1421047436.79.webp"
                  },
                  "name": "古天乐",
                  "id": "1027577"
              },
              {
                  "alt": "https://movie.douban.com/celebrity/1050979/",
                  "avatars": {
                      "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1241.webp",
                      "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1241.webp",
                      "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1241.webp"
                  },
                  "name": "张智霖",
                  "id": "1050979"
              },
              {
                  "alt": "https://movie.douban.com/celebrity/1274666/",
                  "avatars": {
                      "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40550.webp",
                      "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40550.webp",
                      "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40550.webp"
                  },
                  "name": "郑嘉颖",
                  "id": "1274666"
              }
          ],
          "collect_count": 329,
          "original_title": "L風暴",
          "subtype": "movie",
          "directors": [
              {
                  "alt": "https://movie.douban.com/celebrity/1326068/",
                  "avatars": {
                      "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1357529568.73.webp",
                      "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1357529568.73.webp",
                      "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1357529568.73.webp"
                  },
                  "name": "林德禄 ",
                  "id": "1326068"
              }
          ],
          "year": "2018",
          "images": {
              "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2531887203.webp",
              "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2531887203.webp",
              "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2531887203.webp"
          },
          "alt": "https://movie.douban.com/subject/26996640/",
          "id": "26996640"
      }
  ]
}
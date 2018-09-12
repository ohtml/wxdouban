import { fetchData } from "../../utils/utils.js"
Page({
  timer: [],
  /**
   * 页面的初始数据
   */
  data: {
    flag: true,
    movies: [],
    historys:[],
    val:""

  },
  valToSearch(e) {
    console.log(e);
    let val = e.detail.value;
    if (val) {
      this.setData({
        flag: false,
      })
      //防止输入频繁一直调用接口 最终只差一次
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        fetchData("https://api.douban.com/v2/movie/search?q=1").then(res => {
          console.log(res);
        })
      }, 300);
      //  this.processData()
    } else {
      clearTimeout(this.timer);
      this.setData({
        flag: true,
        movies: []
      })
    }
  },
  processData() {
    let datas = obj.subjects;
    let arr = [];
    for (var i = 0; i < datas.length; i++) {
      var cur = datas[i];
      let tmpl = {
        image3: cur.images.medium,
        title: cur.title,
        averages: cur.rating.averages,
        year: cur.year
      }
      arr.push(tmpl);
    }
    this.setData({
      movies: arr
    })
    console.log(arr)
  },
  saveStorage(e) {
    console.log(e);
    let val = e.detail.value;
    let historys = wx.getStorageSync('histortys') || [];
    var falg = historys.find((item) => {
      return item === val;
    })
    //如果输入框有值，&& 没有存过
    if (val != "" && !falg) {
        historys.push(val)
        wx.setStorageSync('histortys',historys);
        this.setData({
          historys:historys
        })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.processData();
    let historys = wx.getStorageSync('histortys') || [];
    this.setData({
      historys:historys
    })
  },
  searchByhistory(e){
    console.log(e);
    let val = e.currentTarget.dataset.history;
    this.setData({
      val:val,
      flag:false
    })
    //调用接口查询数据
    this.processData()
  },
  clearHistory(){
      wx.clearStorageSync("histortys");
      this.setData({
        historys:[]
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
        "average": 7.5,
        "stars": "40",
        "min": 0
      },
      "genres": [
        "剧情"
      ],
      "title": "1:99电影行动",
      "casts": [
        {
          "alt": null,
          "avatars": null,
          "name": "香港群星",
          "id": null
        }
      ],
      "collect_count": 3067,
      "original_title": "1:99電影行動",
      "subtype": "movie",
      "directors": [
        {
          "alt": null,
          "avatars": null,
          "name": "杜琪峰",
          "id": null
        },
        {
          "alt": null,
          "avatars": null,
          "name": "韦家辉",
          "id": null
        },
        {
          "alt": null,
          "avatars": null,
          "name": "林超贤",
          "id": null
        },
        {
          "alt": null,
          "avatars": null,
          "name": "陈可辛",
          "id": null
        },
        {
          "alt": null,
          "avatars": null,
          "name": "刘伟强",
          "id": null
        },
        {
          "alt": null,
          "avatars": null,
          "name": "谢立文",
          "id": null
        },
        {
          "alt": null,
          "avatars": null,
          "name": "陈果",
          "id": null
        },
        {
          "alt": null,
          "avatars": null,
          "name": "陈德森",
          "id": null
        },
        {
          "alt": null,
          "avatars": null,
          "name": "徐克",
          "id": null
        },
        {
          "alt": null,
          "avatars": null,
          "name": "周星驰",
          "id": null
        },
        {
          "alt": null,
          "avatars": null,
          "name": "马伟豪",
          "id": null
        },
        {
          "alt": null,
          "avatars": null,
          "name": "罗启锐",
          "id": null
        },
        {
          "alt": null,
          "avatars": null,
          "name": "张婉婷",
          "id": null
        },
        {
          "alt": null,
          "avatars": null,
          "name": "麦兆辉",
          "id": null
        }
      ],
      "year": "2003",
      "images": {
        "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p478629604.webp",
        "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p478629604.webp",
        "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p478629604.webp"
      },
      "alt": "https://movie.douban.com/subject/1419547/",
      "id": "1419547"
    },
    {
      "rating": {
        "max": 10,
        "average": 8.3,
        "stars": "45",
        "min": 0
      },
      "genres": [
        "纪录片"
      ],
      "title": "极速一生",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1000010/",
          "avatars": {
            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p32214.webp",
            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p32214.webp",
            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p32214.webp"
          },
          "name": "迈克尔·法斯宾德",
          "id": "1000010"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1111254/",
          "avatars": {
            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1521088626.1.webp",
            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1521088626.1.webp",
            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1521088626.1.webp"
          },
          "name": "尼基·劳达",
          "id": "1111254"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1014345/",
          "avatars": {
            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2660.webp",
            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2660.webp",
            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2660.webp"
          },
          "name": "迈克尔·舒马赫",
          "id": "1014345"
        }
      ],
      "collect_count": 1069,
      "original_title": "1",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1014911/",
          "avatars": {
            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1507351884.83.webp",
            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1507351884.83.webp",
            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1507351884.83.webp"
          },
          "name": "鲍尔·克劳德尔",
          "id": "1014911"
        }
      ],
      "year": "2013",
      "images": {
        "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2153898948.webp",
        "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2153898948.webp",
        "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2153898948.webp"
      },
      "alt": "https://movie.douban.com/subject/25745115/",
      "id": "25745115"
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
        "同性"
      ],
      "title": "一分五十四秒",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1228911/",
          "avatars": {
            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19737.webp",
            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19737.webp",
            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19737.webp"
          },
          "name": "罗伯特·内勒",
          "id": "1228911"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1323944/",
          "avatars": {
            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57662.webp",
            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57662.webp",
            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57662.webp"
          },
          "name": "苏菲·奈丽丝",
          "id": "1323944"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1344177/",
          "avatars": {
            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pWZ3UFLuEkK0cel_avatar_uploaded1414367734.51.webp",
            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pWZ3UFLuEkK0cel_avatar_uploaded1414367734.51.webp",
            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pWZ3UFLuEkK0cel_avatar_uploaded1414367734.51.webp"
          },
          "name": "安托万-奥利弗·波尼安",
          "id": "1344177"
        }
      ],
      "collect_count": 222,
      "original_title": "1:54",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1283206/",
          "avatars": {
            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p58523.webp",
            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p58523.webp",
            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p58523.webp"
          },
          "name": "杨·英格兰德",
          "id": "1283206"
        }
      ],
      "year": "2016",
      "images": {
        "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2414614377.webp",
        "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2414614377.webp",
        "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2414614377.webp"
      },
      "alt": "https://movie.douban.com/subject/26872492/",
      "id": "26872492"
    },
    {
      "rating": {
        "max": 10,
        "average": 4.9,
        "stars": "25",
        "min": 0
      },
      "genres": [
        "动作",
        "惊悚"
      ],
      "title": "一寸丹心",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1200503/",
          "avatars": {
            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1353307051.77.webp",
            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1353307051.77.webp",
            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1353307051.77.webp"
          },
          "name": "迈赫什·巴布",
          "id": "1200503"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1340571/",
          "avatars": {
            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1502510410.06.webp",
            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1502510410.06.webp",
            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1502510410.06.webp"
          },
          "name": "克里蒂·萨农",
          "id": "1340571"
        },
        {
          "alt": null,
          "avatars": null,
          "name": "Nasser",
          "id": null
        }
      ],
      "collect_count": 219,
      "original_title": "1 - Nenokkadine",
      "subtype": "movie",
      "directors": [
        {
          "alt": null,
          "avatars": null,
          "name": "Sukumar",
          "id": null
        }
      ],
      "year": "2014",
      "images": {
        "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2170948975.webp",
        "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2170948975.webp",
        "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2170948975.webp"
      },
      "alt": "https://movie.douban.com/subject/20388692/",
      "id": "20388692"
    },
    {
      "rating": {
        "max": 10,
        "average": 7.8,
        "stars": "40",
        "min": 0
      },
      "genres": [
        "动画",
        "短片"
      ],
      "title": "最终兵器少女 Another love song MISSION:1",
      "casts": [],
      "collect_count": 862,
      "original_title": "最終兵器彼女 Another love song",
      "subtype": "tv",
      "directors": [
        {
          "alt": null,
          "avatars": null,
          "name": "加瀬充子",
          "id": null
        }
      ],
      "year": "2005",
      "images": {
        "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1868618833.webp",
        "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1868618833.webp",
        "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1868618833.webp"
      },
      "alt": "https://movie.douban.com/subject/2365045/",
      "id": "2365045"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [],
      "title": "1",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1123528/",
          "avatars": {
            "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "Felix Locher",
          "id": "1123528"
        }
      ],
      "collect_count": 1,
      "original_title": "The Adventures of Jim Bowie",
      "subtype": "movie",
      "directors": [
        {
          "alt": null,
          "avatars": null,
          "name": "1",
          "id": null
        },
        {
          "alt": null,
          "avatars": null,
          "name": "1",
          "id": null
        },
        {
          "alt": null,
          "avatars": null,
          "name": "1",
          "id": null
        }
      ],
      "year": "",
      "images": {
        "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2298030092.webp",
        "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2298030092.webp",
        "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2298030092.webp"
      },
      "alt": "https://movie.douban.com/subject/3024652/",
      "id": "3024652"
    },
    {
      "rating": {
        "max": 10,
        "average": 4.9,
        "stars": "25",
        "min": 0
      },
      "genres": [
        "纪录片",
        "短片",
        "运动"
      ],
      "title": "1:42:08: A Man and His Car",
      "casts": [
        {
          "alt": null,
          "avatars": null,
          "name": "Pete Brock",
          "id": null
        }
      ],
      "collect_count": 82,
      "original_title": "1:42:08: A Man and His Car",
      "subtype": "movie",
      "directors": [
        {
          "alt": null,
          "avatars": null,
          "name": "George Lucas",
          "id": null
        }
      ],
      "year": "1966",
      "images": {
        "small": "https://img1.doubanio.com/view/subject/s/public/s1992787.jpg",
        "large": "https://img1.doubanio.com/view/subject/l/public/s1992787.jpg",
        "medium": "https://img1.doubanio.com/view/subject/m/public/s1992787.jpg"
      },
      "alt": "https://movie.douban.com/subject/1963573/",
      "id": "1963573"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [
        "惊悚"
      ],
      "title": "神秘之书",
      "casts": [
        {
          "alt": null,
          "avatars": null,
          "name": "Zoltán Mucsi",
          "id": null
        },
        {
          "alt": null,
          "avatars": null,
          "name": "László Sinkó",
          "id": null
        },
        {
          "alt": null,
          "avatars": null,
          "name": "Pál Mácsai",
          "id": null
        }
      ],
      "collect_count": 22,
      "original_title": "1",
      "subtype": "movie",
      "directors": [
        {
          "alt": null,
          "avatars": null,
          "name": "Pater Sparrow",
          "id": null
        }
      ],
      "year": "2009",
      "images": {
        "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506088744.webp",
        "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506088744.webp",
        "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506088744.webp"
      },
      "alt": "https://movie.douban.com/subject/3287822/",
      "id": "3287822"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [
        "短片"
      ],
      "title": "1:77",
      "casts": [
        {
          "alt": null,
          "avatars": null,
          "name": "乌兰",
          "id": null
        }
      ],
      "collect_count": 4,
      "original_title": "1:77",
      "subtype": "movie",
      "directors": [
        {
          "alt": null,
          "avatars": null,
          "name": "萨其仁贵",
          "id": null
        }
      ],
      "year": "2016",
      "images": {
        "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2520962832.webp",
        "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2520962832.webp",
        "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2520962832.webp"
      },
      "alt": "https://movie.douban.com/subject/27056188/",
      "id": "27056188"
    },
    {
      "rating": {
        "max": 10,
        "average": 7.9,
        "stars": "40",
        "min": 0
      },
      "genres": [
        "动作",
        "动画",
        "情色"
      ],
      "title": "魔法少女爱",
      "casts": [
        {
          "alt": null,
          "avatars": null,
          "name": "阿谷ほのか",
          "id": null
        },
        {
          "alt": null,
          "avatars": null,
          "name": "梅干丸梦千代",
          "id": null
        }
      ],
      "collect_count": 199,
      "original_title": "魔法少女アイ（まほうしょうじょアイ）",
      "subtype": "tv",
      "directors": [
        {
          "alt": null,
          "avatars": null,
          "name": "敷岛博英",
          "id": null
        }
      ],
      "year": "2003",
      "images": {
        "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517643932.webp",
        "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517643932.webp",
        "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517643932.webp"
      },
      "alt": "https://movie.douban.com/subject/20279472/",
      "id": "20279472"
    },
    {
      "rating": {
        "max": 10,
        "average": 5,
        "stars": "25",
        "min": 0
      },
      "genres": [
        "喜剧",
        "动作",
        "科幻"
      ],
      "title": "镭射小队",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1254642/",
          "avatars": {
            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1406419418.56.webp",
            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1406419418.56.webp",
            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1406419418.56.webp"
          },
          "name": "阿兰·里奇森",
          "id": "1254642"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1198786/",
          "avatars": {
            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p50665.webp",
            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p50665.webp",
            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p50665.webp"
          },
          "name": "亚历山德里娅·德伯里",
          "id": "1198786"
        },
        {
          "alt": null,
          "avatars": null,
          "name": "Burnie Burns",
          "id": null
        }
      ],
      "collect_count": 692,
      "original_title": "Lazer Team",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1028316/",
          "avatars": {
            "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "Matt Hullum",
          "id": "1028316"
        }
      ],
      "year": "2016",
      "images": {
        "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2315557002.webp",
        "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2315557002.webp",
        "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2315557002.webp"
      },
      "alt": "https://movie.douban.com/subject/26337986/",
      "id": "26337986"
    },
    {
      "rating": {
        "max": 10,
        "average": 4.3,
        "stars": "25",
        "min": 0
      },
      "genres": [
        "动作"
      ],
      "title": "无人机战场",
      "casts": [
        {
          "alt": null,
          "avatars": null,
          "name": "Dominique Swain",
          "id": null
        },
        {
          "alt": null,
          "avatars": null,
          "name": "Michael Paré",
          "id": null
        },
        {
          "alt": null,
          "avatars": null,
          "name": "Oleg Taktarov",
          "id": null
        }
      ],
      "collect_count": 308,
      "original_title": "Battle Drone",
      "subtype": "movie",
      "directors": [
        {
          "alt": null,
          "avatars": null,
          "name": "Mitch Gould",
          "id": null
        }
      ],
      "year": "2017",
      "images": {
        "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2499419657.webp",
        "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2499419657.webp",
        "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2499419657.webp"
      },
      "alt": "https://movie.douban.com/subject/26605081/",
      "id": "26605081"
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
      "title": "1:1",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1058530/",
          "avatars": {
            "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "Trine Appel",
          "id": "1058530"
        },
        {
          "alt": null,
          "avatars": null,
          "name": "Jonas Busekist",
          "id": null
        }
      ],
      "collect_count": 5,
      "original_title": "1:1",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1042385/",
          "avatars": {
            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1416462340.7.webp",
            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1416462340.7.webp",
            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1416462340.7.webp"
          },
          "name": "安妮特·欧森",
          "id": "1042385"
        }
      ],
      "year": "2006",
      "images": {
        "small": "https://img3.doubanio.com/view/subject/s/public/s2564055.jpg",
        "large": "https://img3.doubanio.com/view/subject/l/public/s2564055.jpg",
        "medium": "https://img3.doubanio.com/view/subject/m/public/s2564055.jpg"
      },
      "alt": "https://movie.douban.com/subject/1476604/",
      "id": "1476604"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [],
      "title": "1:30 am",
      "casts": [
        {
          "alt": null,
          "avatars": null,
          "name": "Ena Saha",
          "id": null
        },
        {
          "alt": null,
          "avatars": null,
          "name": "Sudip Bandyopadhyay",
          "id": null
        },
        {
          "alt": null,
          "avatars": null,
          "name": "Anirban Gupta",
          "id": null
        }
      ],
      "collect_count": 1,
      "original_title": "1:30 am",
      "subtype": "movie",
      "directors": [
        {
          "alt": null,
          "avatars": null,
          "name": "Sourav De",
          "id": null
        }
      ],
      "year": "2012",
      "images": {
        "small": "https://img3.doubanio.com/view/subject/s/public/s10391980.jpg",
        "large": "https://img3.doubanio.com/view/subject/l/public/s10391980.jpg",
        "medium": "https://img3.doubanio.com/view/subject/m/public/s10391980.jpg"
      },
      "alt": "https://movie.douban.com/subject/10811550/",
      "id": "10811550"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [
        "短片",
        "剧情",
        "悬疑"
      ],
      "title": "1:03AM",
      "casts": [
        {
          "alt": null,
          "avatars": null,
          "name": "Christopher Augustus",
          "id": null
        },
        {
          "alt": null,
          "avatars": null,
          "name": "Steven Bess",
          "id": null
        },
        {
          "alt": "https://movie.douban.com/celebrity/1175175/",
          "avatars": {
            "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "Tom Druilhet",
          "id": "1175175"
        }
      ],
      "collect_count": 0,
      "original_title": "1:03AM",
      "subtype": "movie",
      "directors": [],
      "year": "2009",
      "images": {
        "small": "https://img1.doubanio.com/f/movie/b6dc761f5e4cf04032faa969826986efbecd54bb/pics/movie/movie_default_small.png",
        "large": "https://img3.doubanio.com/f/movie/30c6263b6db26d055cbbe73fe653e29014142ea3/pics/movie/movie_default_large.png",
        "medium": "https://img1.doubanio.com/f/movie/5081e011b4b06f1a8c3735122b38e781bd852ab6/pics/movie/movie_default_medium.png"
      },
      "alt": "https://movie.douban.com/subject/3387672/",
      "id": "3387672"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [],
      "title": "Personkrets 3:1",
      "casts": [],
      "collect_count": 0,
      "original_title": "Personkrets 3:1",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1062454/",
          "avatars": {
            "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "Arn-Henrik Blomqvist",
          "id": "1062454"
        }
      ],
      "year": "1998",
      "images": {
        "small": "https://img1.doubanio.com/f/movie/b6dc761f5e4cf04032faa969826986efbecd54bb/pics/movie/movie_default_small.png",
        "large": "https://img3.doubanio.com/f/movie/30c6263b6db26d055cbbe73fe653e29014142ea3/pics/movie/movie_default_large.png",
        "medium": "https://img1.doubanio.com/f/movie/5081e011b4b06f1a8c3735122b38e781bd852ab6/pics/movie/movie_default_medium.png"
      },
      "alt": "https://movie.douban.com/subject/5098387/",
      "id": "5098387"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [
        "恐怖"
      ],
      "title": "1:13:7 Ek Tera Saat",
      "casts": [],
      "collect_count": 1,
      "original_title": "1:13:7 Ek Tera Saat",
      "subtype": "movie",
      "directors": [],
      "year": "2016",
      "images": {
        "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2488447380.webp",
        "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2488447380.webp",
        "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2488447380.webp"
      },
      "alt": "https://movie.douban.com/subject/26881600/",
      "id": "26881600"
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
      "title": "当爱失去时",
      "casts": [
        {
          "alt": null,
          "avatars": null,
          "name": "Rati Agnihotri",
          "id": null
        },
        {
          "alt": null,
          "avatars": null,
          "name": "Gulshan Grover",
          "id": null
        }
      ],
      "collect_count": 1,
      "original_title": "1:1.6 An Ode to Lost Love",
      "subtype": "movie",
      "directors": [
        {
          "alt": null,
          "avatars": null,
          "name": "Madhu Ambat",
          "id": null
        }
      ],
      "year": "2004",
      "images": {
        "small": "https://img1.doubanio.com/f/movie/b6dc761f5e4cf04032faa969826986efbecd54bb/pics/movie/movie_default_small.png",
        "large": "https://img3.doubanio.com/f/movie/30c6263b6db26d055cbbe73fe653e29014142ea3/pics/movie/movie_default_large.png",
        "medium": "https://img1.doubanio.com/f/movie/5081e011b4b06f1a8c3735122b38e781bd852ab6/pics/movie/movie_default_medium.png"
      },
      "alt": "https://movie.douban.com/subject/6139291/",
      "id": "6139291"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [
        "音乐"
      ],
      "title": "披头士乐队：1",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1027302/",
          "avatars": {
            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p30752.webp",
            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p30752.webp",
            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p30752.webp"
          },
          "name": "约翰·列侬",
          "id": "1027302"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1000410/",
          "avatars": {
            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p29234.webp",
            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p29234.webp",
            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p29234.webp"
          },
          "name": "珍·爱舍",
          "id": "1000410"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1069258/",
          "avatars": {
            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p23599.webp",
            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p23599.webp",
            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p23599.webp"
          },
          "name": "帕蒂·博伊德",
          "id": "1069258"
        }
      ],
      "collect_count": 3,
      "original_title": "The Beatles: 1",
      "subtype": "movie",
      "directors": [],
      "year": "2015",
      "images": {
        "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2499253102.webp",
        "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2499253102.webp",
        "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2499253102.webp"
      },
      "alt": "https://movie.douban.com/subject/27141896/",
      "id": "27141896"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [],
      "title": "Do przerwy 0:1",
      "casts": [],
      "collect_count": 0,
      "original_title": "Do przerwy 0:1",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1024843/",
          "avatars": {
            "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "Stanislaw Jedryka",
          "id": "1024843"
        }
      ],
      "year": "1969",
      "images": {
        "small": "https://img1.doubanio.com/f/movie/b6dc761f5e4cf04032faa969826986efbecd54bb/pics/movie/movie_default_small.png",
        "large": "https://img3.doubanio.com/f/movie/30c6263b6db26d055cbbe73fe653e29014142ea3/pics/movie/movie_default_large.png",
        "medium": "https://img1.doubanio.com/f/movie/5081e011b4b06f1a8c3735122b38e781bd852ab6/pics/movie/movie_default_medium.png"
      },
      "alt": "https://movie.douban.com/subject/5097305/",
      "id": "5097305"
    }
  ]
}
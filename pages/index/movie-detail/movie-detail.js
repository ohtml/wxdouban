import { fetchData, starToArray } from "../../../utils/utils.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.mid;
    let url = "https://api.douban.com/v2/movie/subject/1764796";
    // fetchData(url).then(res => {
    //   console.log(res);
    // })
    this.processData();

  },
  processData() {
    let datas = obj;
    let tmpl = {
      image: datas.images.small,
      rating: {
        stars: starToArray(datas.rating.stars),
        average: datas.rating.average,
      },
      title: datas.title,
      summary: datas.summary
    }
    console.log(tmpl)
    this.setData({
      movie: tmpl
    })
  },
  imgbig(){
    wx.previewImage({
      urls: [this.data.movie.image],
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
  "rating": {
    "max": 10,
    "average": 7.5,
    "stars": "40",
    "min": 0
  },
  "reviews_count": 302,
  "wish_count": 16201,
  "douban_site": "",
  "year": "2009",
  "images": {
    "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p494268647.webp",
    "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p494268647.webp",
    "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p494268647.webp"
  },
  "alt": "https://movie.douban.com/subject/1764796/",
  "id": "1764796",
  "mobile_url": "https://movie.douban.com/subject/1764796/mobile",
  "title": "机器人9号",
  "do_count": null,
  "share_url": "https://m.douban.com/movie/subject/1764796",
  "seasons_count": null,
  "schedule_url": "",
  "episodes_count": null,
  "countries": [
    "美国"
  ],
  "genres": [
    "动画",
    "冒险",
    "奇幻"
  ],
  "collect_count": 75873,
  "casts": [
    {
      "alt": "https://movie.douban.com/celebrity/1054395/",
      "avatars": {
        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p51597.webp",
        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p51597.webp",
        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p51597.webp"
      },
      "name": "伊莱贾·伍德",
      "id": "1054395"
    },
    {
      "alt": "https://movie.douban.com/celebrity/1016673/",
      "avatars": {
        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33305.webp",
        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33305.webp",
        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33305.webp"
      },
      "name": "詹妮弗·康纳利",
      "id": "1016673"
    },
    {
      "alt": "https://movie.douban.com/celebrity/1017907/",
      "avatars": {
        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p55994.webp",
        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p55994.webp",
        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p55994.webp"
      },
      "name": "约翰·C·赖利",
      "id": "1017907"
    },
    {
      "alt": "https://movie.douban.com/celebrity/1036321/",
      "avatars": {
        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p42033.webp",
        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p42033.webp",
        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p42033.webp"
      },
      "name": "克里斯托弗·普卢默",
      "id": "1036321"
    }
  ],
  "current_season": null,
  "original_title": "9",
  "summary": "机器人9号（伊利亚•伍德 Elijah Wood 饰）突然醒来，发现身边的世界充满危机，四处残败，一片末世景象。9号带着一个画有三个奇怪符号的圆形物体逃到街上，幸遇发明家机器人2号（马丁•兰道 Martin Landau 饰）给自己装上了声音，但2号却不幸被机器怪兽抓走。9号找到了老兵1号（克里斯托弗•普卢默 Christopher Plummer 饰）、机械工5号（约翰•雷利 John C. Reilly 饰）、疯癫画家6号（克里斯品•格拉夫 Crispin Glover 饰）和大力士8号（弗雷德•塔塔绍尔 Fred Tatasciore 饰）。9号与5号擅自出行援救2号，危急时被女武士7号（詹妮佛•康纳利 Jennifer Connelly 饰）救下，但无意中9号却令终极机器兽复活。带着自己从哪里来以及生存使命的问题，9号决定想尽办法制服机器兽，拯救全世界……©豆瓣",
  "subtype": "movie",
  "directors": [
    {
      "alt": "https://movie.douban.com/celebrity/1276787/",
      "avatars": {
        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1351678808.44.webp",
        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1351678808.44.webp",
        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1351678808.44.webp"
      },
      "name": "申·阿克",
      "id": "1276787"
    }
  ],
  "comments_count": 9296,
  "ratings_count": 61099,
  "aka": [
    "9：末世决战",
    "九",
    "Number 9",
    "机器人9号"
  ]
}
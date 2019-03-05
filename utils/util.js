const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function get_http(url, callback) {
  wx.request({
    url: url,
    method: "GET",
    data: {},
    header: {
      "Content-Type": "json"
    },
    success: function(res) {
      callback(res.data);
    },
    fail: function(err) {
      console.log("error" + err);
    }
  })
}

function post_http(url, data, callback) {
  wx.request({
    url: url,
    method: "POST",
    data: data,
    header: {
      "Content-Type": "json"
    },
    success: function(res) {
      callback(res.data);
    },
    fail: function(err) {
      console.log("error" + err);
    }
  })
}

module.exports = {
  formatTime: formatTime,
  getHttp: get_http,
  postHttp: post_http,
}
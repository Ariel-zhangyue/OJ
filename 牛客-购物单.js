// https://www.nowcoder.com/questionTerminal/f9c6f980eeec43ef85be20755ddbeaf4

var usefirstline = [1000, 5]; // money, quantity
var usegoods = [
  ['800', '2', 0],
  ['400', '5', 1],
  ['300', '5', 1],
  ['400', '3', 0],
  ['500', '2', 0],
]; // [ [price, rank, attachIndex] ]


//  map: {1: []}

var reduceGoods = (goods) => {
  var costs = goods.reduce((accu, [price]) => (Number(accu) + Number(price)), 0)
  var gains = goods.reduce((accu, [price, rank]) => (Number(accu) + Number(price * rank)), 0)
  return { costs, gains };
}

var formatgroups = (origins) => {
  var map = {};
  var leads = [];
  origins.forEach((ele, index) => {
    var [price, rank, attachIndex] = ele;
    if (attachIndex === 0) {
      map[index] = [ele];
      leads.push([ele])
    } else {
      var mapEle = map[attachIndex - 1];
      mapEle.push(ele);
      leads.push([...mapEle]);
      if (mapEle.length === 2) {
        leads.push([mapEle[0], mapEle[2]]);
      }
    }
  });
  var res = [];
  leads.forEach((lead) => {
    var t = reduceGoods(lead);
    res.push(t);
  });
  return res;
}

// groups: [{costs, gains}]

var dpf = (money, quantity, groups) => {
  var leadslen = groups.length;

  var v = []; // 最后的期望
  for (var i = 0; i < leadslen + 1; i += 1) {
    v.push([]);
  }
  v[0].length = money / 10;
  v[0].fill(0);

  for (var i = 1; i <= leadslen; i += 1) {
    var { costs, gains } = groups[i - 1];
    for (var w = 0; w <= money; w += 10) {
      var crt = w / 10;
      var pre = (w - costs) / 10;
      if (costs <= w && v[i - 1][crt] < gains + v[i - 1][pre]) {
        v[i][crt] = gains + v[i - 1][pre];
      } else {
        v[i][crt] = v[i - 1][crt];
      }
    }
  }
  return v[leadslen][money / 10 - 1];
}

var gs = formatgroups(usegoods);
var result = dpf(...usefirstline, gs);
console.log('dpf result: ', result);
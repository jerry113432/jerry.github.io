var app = new Vue({
  el: '#app',
  data: {
      selectedBrand: 'HEAD',  
      itemList: [

        { id: '1', brand: 'HEAD', category: '球拍', itemName: '基本型球拍', imgUrl: '../img/HEAD_img/HEAD_rk/H1.jpg', price: 580, count: 0 },
        { id: '2', brand: 'HEAD', category: '球拍', itemName: '極輕型青綠款球拍', imgUrl: '../img/HEAD_img/HEAD_rk/H2.jpg', price: 1080, count: 0 },
        { id: '3', brand: 'HEAD', category: '球拍', itemName: '極輕型深綠款球拍', imgUrl: '../img/HEAD_img/HEAD_rk/H3.jpg', price: 1080, count: 0 },
        { id: '4', brand: 'HEAD', category: '球拍', itemName: '紫黑款球拍', imgUrl: '../img/HEAD_img/HEAD_rk/H4.jpg', price: 680, count: 0 },
        { id: '5', brand: 'HEAD', category: '球拍', itemName: '藍白款球拍', imgUrl: '../img/HEAD_img/HEAD_rk/H5.jpg', price: 680, count: 0 },
        { id: '6', brand: 'HEAD', category: '球拍', itemName: '黑青款球拍', imgUrl: '../img/HEAD_img/HEAD_rk/H6.jpg', price: 780, count: 0 },
        { id: '7', brand: 'HEAD', category: '球拍', itemName: '深青款球拍', imgUrl: '../img/HEAD_img/HEAD_rk/H7.jpg', price: 2080, count: 0 },
        { id: '8', brand: 'HEAD', category: '球拍', itemName: '橘色球拍', imgUrl: '../img/HEAD_img/HEAD_rk/H8.jpg', price: 380, count: 0 },
        { id: '9', brand: 'HEAD', category: '球拍', itemName: '黑橘款球拍', imgUrl: '../img/HEAD_img/HEAD_rk/H9.jpg', price: 680, count: 0 },
        { id: '10', brand: 'HEAD', category: '球拍', itemName: '亮橘色球拍', imgUrl: '../img/HEAD_img/HEAD_rk/H10.jpg', price: 780, count: 0 },
        { id: '11', brand: 'HEAD', category: '球拍', itemName: '黑球拍', imgUrl: '../img/HEAD_img/HEAD_rk/H11.jpg', price: 1480, count: 0 },
        { id: '12', brand: 'HEAD', category: '球拍', itemName: '黑白球拍', imgUrl: '../img/HEAD_img/HEAD_rk/H12.jpg', price: 980, count: 0 },

        { id: '13', brand: 'HEAD', category: '網球線', itemName: '球線', imgUrl: '../img/HEAD_img/HEAD_str/h1.jpg', price: 780, count: 0 },
        { id: '14', brand: 'HEAD', category: '網球線', itemName: '球線', imgUrl: '../img/HEAD_img/HEAD_str/h2.jpg', price: 780, count: 0 },
        { id: '15', brand: 'HEAD', category: '網球線', itemName: '球線', imgUrl: '../img/HEAD_img/HEAD_str/h3.jpg', price: 780, count: 0 },
        { id: '16', brand: 'HEAD', category: '網球線', itemName: '球線', imgUrl: '../img/HEAD_img/HEAD_str/h4.jpg', price: 780, count: 0 },
        { id: '17', brand: 'HEAD', category: '網球線', itemName: '球線', imgUrl: '../img/HEAD_img/HEAD_str/h5.jpg', price: 780, count: 0 },
        { id: '18', brand: 'HEAD', category: '網球線', itemName: '球線', imgUrl: '../img/HEAD_img/HEAD_str/h6.jpg', price: 780, count: 0 },
        { id: '19', brand: 'HEAD', category: '網球線', itemName: '球線', imgUrl: '../img/HEAD_img/HEAD_str/h7.jpg', price: 380, count: 0 },
        { id: '20', brand: 'HEAD', category: '網球線', itemName: '球線', imgUrl: '../img/HEAD_img/HEAD_str/h8.jpg', price: 380, count: 0 },
        { id: '21', brand: 'HEAD', category: '網球線', itemName: '球線', imgUrl: '../img/HEAD_img/HEAD_str/h9.jpg', price: 380, count: 0 },
        { id: '22', brand: 'HEAD', category: '網球線', itemName: '球線', imgUrl: '../img/HEAD_img/HEAD_str/h10.jpg', price: 380, count: 0 },
        { id: '23', brand: 'HEAD', category: '網球線', itemName: '球線', imgUrl: '../img/HEAD_img/HEAD_str/h11.jpg', price: 380, count: 0 },
        { id: '24', brand: 'HEAD', category: '網球線', itemName: '球線', imgUrl: '../img/HEAD_img/HEAD_str/h12.jpg', price: 380, count: 0 },
        { id: '25', brand: 'HEAD', category: '網球線', itemName: '球線', imgUrl: '../img/HEAD_img/HEAD_str/h10.jpg', price: 380, count: 0 },
        { id: '26', brand: 'HEAD', category: '網球線', itemName: '球線', imgUrl: '../img/HEAD_img/HEAD_str/h11.jpg', price: 380, count: 0 },
        { id: '27', brand: 'HEAD', category: '網球線', itemName: '球線', imgUrl: '../img/HEAD_img/HEAD_str/h12.jpg', price: 380, count: 0 },
        

        { id: '28', brand: 'HEAD', category: '網球鞋', itemName: '白球鞋', imgUrl: '../img/HEAD_img/HEAD_shoes/h1.jpg', price: 2680, count: 0 },
        { id: '29', brand: 'HEAD', category: '網球鞋', itemName: '紅球鞋', imgUrl: '../img/HEAD_img/HEAD_shoes/h2.jpg', price: 2380, count: 0 },
        { id: '30', brand: 'HEAD', category: '網球鞋', itemName: '黑球鞋', imgUrl: '../img/HEAD_img/HEAD_shoes/h3.jpg', price: 2680, count: 0 },
        { id: '31', brand: 'HEAD', category: '網球鞋', itemName: '白球鞋', imgUrl: '../img/HEAD_img/HEAD_shoes/h4.jpg', price: 2680, count: 0 },
        { id: '32', brand: 'HEAD', category: '網球鞋', itemName: '黑球鞋', imgUrl: '../img/HEAD_img/HEAD_shoes/h5.jpg', price: 2780, count: 0 },
        { id: '33', brand: 'HEAD', category: '網球鞋', itemName: '紅球鞋', imgUrl: '../img/HEAD_img/HEAD_shoes/h6.jpg', price: 2980, count: 0 },
        { id: '34', brand: 'HEAD', category: '網球鞋', itemName: '黃球鞋', imgUrl: '../img/HEAD_img/HEAD_shoes/h7.jpg', price: 2780, count: 0 },
        { id: '35', brand: 'HEAD', category: '網球鞋', itemName: '白球鞋', imgUrl: '../img/HEAD_img/HEAD_shoes/h8.jpg', price: 2780, count: 0 },
        { id: '36', brand: 'HEAD', category: '網球鞋', itemName: '黑球鞋', imgUrl: '../img/HEAD_img/HEAD_shoes/h9.jpg', price: 2380, count: 0 },
        { id: '37', brand: 'HEAD', category: '網球鞋', itemName: '黃球鞋', imgUrl: '../img/HEAD_img/HEAD_shoes/h10.jpg', price: 2380, count: 0 },
        { id: '38', brand: 'HEAD', category: '網球鞋', itemName: '白球鞋', imgUrl: '../img/HEAD_img/HEAD_shoes/h11.jpg', price: 2380, count: 0 },
        { id: '39', brand: 'HEAD', category: '網球鞋', itemName: '藍球鞋', imgUrl: '../img/HEAD_img/HEAD_shoes/h12.jpg', price: 2380, count: 0 },
        { id: '40', brand: 'HEAD', category: '網球鞋', itemName: '橘球鞋', imgUrl: '../img/HEAD_img/HEAD_shoes/h13.jpg', price: 2380, count: 0 },
        { id: '41', brand: 'HEAD', category: '網球鞋', itemName: '白球鞋', imgUrl: '../img/HEAD_img/HEAD_shoes/h14.jpg', price: 2380, count: 0 },
        { id: '42', brand: 'HEAD', category: '網球鞋', itemName: '黃球鞋', imgUrl: '../img/HEAD_img/HEAD_shoes/h15.jpg', price: 2380, count: 0 },
        

        { id: '43', brand: 'HEAD', category: '網球', itemName: '大大份網球', imgUrl: '../img/HEAD_img/HEAD_tennis/h1.jpg', price: 580, count: 0 },
        { id: '44', brand: 'HEAD', category: '網球', itemName: '特大桶的球', imgUrl: '../img/HEAD_img/HEAD_tennis/h2.jpg', price: 3080, count: 0 },
        { id: '45', brand: 'HEAD', category: '網球', itemName: '孤單的一顆球', imgUrl: '../img/HEAD_img/HEAD_tennis/h3.jpg', price: 111, count: 0 },

        { id: '46', brand: 'HEAD', category: '球袋', itemName: '酷斃了書包', imgUrl: '../img/HEAD_img/HEAD_bag/h1.jpg', price: 1280, count: 0 },
        { id: '47', brand: 'HEAD', category: '球袋', itemName: '書呆子書包', imgUrl: '../img/HEAD_img/HEAD_bag/h2.jpg', price: 880, count: 0 },
        { id: '48', brand: 'HEAD', category: '球袋', itemName: '球童專用書包', imgUrl: '../img/HEAD_img/HEAD_bag/h3.jpg', price: 980, count: 0 },
        { id: '49', brand: 'HEAD', category: '球袋', itemName: '灰色書包', imgUrl: '../img/HEAD_img/HEAD_bag/h4.jpg', price: 580, count: 0 },
        { id: '50', brand: 'HEAD', category: '球袋', itemName: '黑色書包', imgUrl: '../img/HEAD_img/HEAD_bag/h5.jpg', price: 980, count: 0 },
        { id: '51', brand: 'HEAD', category: '球袋', itemName: '黑書包', imgUrl: '../img/HEAD_img/HEAD_bag/h6.jpg', price: 1080, count: 0 },
        { id: '52', brand: 'HEAD', category: '球袋', itemName: '白蘭地書包', imgUrl: '../img/HEAD_img/HEAD_bag/h7.jpg', price: 1080, count: 0 },
        { id: '53', brand: 'HEAD', category: '球袋', itemName: '綠色書包', imgUrl: '../img/HEAD_img/HEAD_bag/h8.jpg', price: 1080, count: 0 },
        { id: '54', brand: 'HEAD', category: '球袋', itemName: '棕梠樹書包', imgUrl: '../img/HEAD_img/HEAD_bag/h9.jpg', price: 1080, count: 0 },
        { id: '55', brand: 'HEAD', category: '球袋', itemName: '綠叔叔書包', imgUrl: '../img/HEAD_img/HEAD_bag/h10.jpg', price: 1080, count: 0 },
        { id: '56', brand: 'HEAD', category: '球袋', itemName: '阿公專用書包', imgUrl: '../img/HEAD_img/HEAD_bag/h11.jpg', price: 1080, count: 0 },
        { id: '57', brand: 'HEAD', category: '球袋', itemName: '帥帥的書包', imgUrl: '../img/HEAD_img/HEAD_bag/h12.jpg', price: 1080, count: 0 },
        { id: '58', brand: 'HEAD', category: '球袋', itemName: '普通書包', imgUrl: '../img/HEAD_img/HEAD_bag/h13.jpg', price: 1080, count: 0 },
        { id: '59', brand: 'HEAD', category: '球袋', itemName: '大媽螢光書包', imgUrl: '../img/HEAD_img/HEAD_bag/h14.jpg', price: 1080, count: 0 },
        { id: '60', brand: 'HEAD', category: '球袋', itemName: '極致黑書包', imgUrl: '../img/HEAD_img/HEAD_bag/h15.jpg', price: 1080, count: 0 },
        
        { id: '61', brand: 'HEAD', category: '服飾', itemName: '網球球衣', imgUrl: '../img/HEAD_img/HEAD_tshirt/h1.jpg', price: 980, count: 0 },
        { id: '62', brand: 'HEAD', category: '服飾', itemName: '專屬網球球衣', imgUrl: '../img/HEAD_img/HEAD_tshirt/h2.jpg', price: 980, count: 0 },
        { id: '63', brand: 'HEAD', category: '服飾', itemName: '頂級網球球衣', imgUrl: '../img/HEAD_img/HEAD_tshirt/h3.jpg', price: 1580, count: 0 },
        { id: '64', brand: 'HEAD', category: '服飾', itemName: '西經紅球衣', imgUrl: '../img/HEAD_img/HEAD_tshirt/h4.jpg', price: 980, count: 0 },
        { id: '65', brand: 'HEAD', category: '服飾', itemName: '球褲', imgUrl: '../img/HEAD_img/HEAD_tshirt/h5.jpg', price: 680, count: 0 },
        { id: '66', brand: 'HEAD', category: '服飾', itemName: '阿杯褲', imgUrl: '../img/HEAD_img/HEAD_tshirt/h6.jpg', price: 680, count: 0 },
        { id: '67', brand: 'HEAD', category: '服飾', itemName: '魅力加分球衣', imgUrl: '../img/HEAD_img/HEAD_tshirt/h7.jpg', price: 980, count: 0 },
        { id: '68', brand: 'HEAD', category: '服飾', itemName: '加值球衣', imgUrl: '../img/HEAD_img/HEAD_tshirt/h8.jpg', price: 980, count: 0 },
        { id: '69', brand: 'HEAD', category: '服飾', itemName: '刷卡型球衣', imgUrl: '../img/HEAD_img/HEAD_tshirt/h9.jpg', price: 980, count: 0 },
        { id: '70', brand: 'HEAD', category: '服飾', itemName: '個性球衣', imgUrl: '../img/HEAD_img/HEAD_tshirt/h10.jpg', price: 980, count: 0 },
        { id: '71', brand: 'HEAD', category: '服飾', itemName: '特殊色球衣', imgUrl: '../img/HEAD_img/HEAD_tshirt/h11.jpg', price: 980, count: 0 },
        { id: '72', brand: 'HEAD', category: '服飾', itemName: '巨巨球衣', imgUrl: '../img/HEAD_img/HEAD_tshirt/h12.jpg', price: 980, count: 0 },
        { id: '73', brand: 'HEAD', category: '服飾', itemName: '內衣', imgUrl: '../img/HEAD_img/HEAD_tshirt/h13.jpg', price: 980, count: 0 },
        { id: '74', brand: 'HEAD', category: '服飾', itemName: '內衣', imgUrl: '../img/HEAD_img/HEAD_tshirt/h14.jpg', price: 980, count: 0 },
        { id: '75', brand: 'HEAD', category: '服飾', itemName: '內衣', imgUrl: '../img/HEAD_img/HEAD_tshirt/h15.jpg', price: 980, count: 0 },
        
        { id: '76', brand: 'HEAD', category: '配件', itemName: '高性能避震器', imgUrl: '../img/HEAD_img/HEAD_acc/h1.jpg', price: 1280, count: 0 },
        { id: '77', brand: 'HEAD', category: '配件', itemName: '極度抗震避震器', imgUrl: '../img/HEAD_img/HEAD_acc/h2.jpg', price: 2580, count: 0 },
        { id: '78', brand: 'HEAD', category: '配件', itemName: '避震器', imgUrl: '../img/HEAD_img/HEAD_acc/h3.jpg', price: 1380, count: 0 },
        { id: '79', brand: 'HEAD', category: '配件', itemName: '避震器', imgUrl: '../img/HEAD_img/HEAD_acc/h4.jpg', price: 1380, count: 0 },
        { id: '80', brand: 'HEAD', category: '配件', itemName: '避震器', imgUrl: '../img/HEAD_img/HEAD_acc/h5.jpg', price: 1380, count: 0 },
        { id: '81', brand: 'HEAD', category: '配件', itemName: '避震器', imgUrl: '../img/HEAD_img/HEAD_acc/h6.jpg', price: 1380, count: 0 },
        { id: '82', brand: 'HEAD', category: '配件', itemName: '護腕', imgUrl: '../img/HEAD_img/HEAD_acc/h7.jpg', price: 1280, count: 0 },
        { id: '83', brand: 'HEAD', category: '配件', itemName: '護腕', imgUrl: '../img/HEAD_img/HEAD_acc/h8.jpg', price: 1280, count: 0 },
        { id: '84', brand: 'HEAD', category: '配件', itemName: '護腕', imgUrl: '../img/HEAD_img/HEAD_acc/h9.jpg', price: 1280, count: 0 },
        { id: '85', brand: 'HEAD', category: '配件', itemName: '護腕', imgUrl: '../img/HEAD_img/HEAD_acc/h10.jpg', price: 1280, count: 0 },
        { id: '86', brand: 'HEAD', category: '配件', itemName: '護腕', imgUrl: '../img/HEAD_img/HEAD_acc/h11.jpg', price: 1280, count: 0 },
        { id: '87', brand: 'HEAD', category: '配件', itemName: '護腕', imgUrl: '../img/HEAD_img/HEAD_acc/h12.jpg', price: 1280, count: 0 },

  
        { id: '88', brand: 'BABOLAT', category: '球拍', itemName: 'BABOLAT 球拍1', imgUrl: '../img/Babolat_img/Babolat_rk/b1.jpg', price: 600, count: 0 },
        { id: '89', brand: 'BABOLAT', category: '球拍', itemName: 'BABOLAT 球拍2', imgUrl: '../img/Babolat_img/Babolat_rk/b2.jpg', price: 600, count: 0 },
        { id: '90', brand: 'BABOLAT', category: '球拍', itemName: 'BABOLAT 球拍3', imgUrl: '../img/Babolat_img/Babolat_rk/b3.jpg', price: 600, count: 0 },
        { id: '91', brand: 'BABOLAT', category: '球拍', itemName: 'BABOLAT 球拍4', imgUrl: '../img/Babolat_img/Babolat_rk/b4.jpg', price: 600, count: 0 },
        { id: '92', brand: 'BABOLAT', category: '球拍', itemName: 'BABOLAT 球拍5', imgUrl: '../img/Babolat_img/Babolat_rk/b5.jpg', price: 600, count: 0 },
        { id: '93', brand: 'BABOLAT', category: '球拍', itemName: 'BABOLAT 球拍6', imgUrl: '../img/Babolat_img/Babolat_rk/b6.jpg', price: 600, count: 0 },
        { id: '94', brand: 'BABOLAT', category: '球拍', itemName: 'BABOLAT 球拍7', imgUrl: '../img/Babolat_img/Babolat_rk/b7.jpg', price: 600, count: 0 },
        { id: '95', brand: 'BABOLAT', category: '球拍', itemName: 'BABOLAT 球拍8', imgUrl: '../img/Babolat_img/Babolat_rk/b8.jpg', price: 600, count: 0 },
        { id: '96', brand: 'BABOLAT', category: '球拍', itemName: 'BABOLAT 球拍9', imgUrl: '../img/Babolat_img/Babolat_rk/b9.jpg', price: 600, count: 0 },
        { id: '97', brand: 'BABOLAT', category: '球拍', itemName: 'BABOLAT 球拍10', imgUrl: '../img/Babolat_img/Babolat_rk/b10.jpg', price: 600, count: 0 },
        { id: '98', brand: 'BABOLAT', category: '球拍', itemName: 'BABOLAT 球拍11', imgUrl: '../img/Babolat_img/Babolat_rk/b11.jpg', price: 600, count: 0 },
        { id: '99', brand: 'BABOLAT', category: '球拍', itemName: 'BABOLAT 球拍12', imgUrl: '../img/Babolat_img/Babolat_rk/b12.jpg', price: 600, count: 0 },
        

        { id: '112', brand: 'BABOLAT', category: '網球線', itemName: 'BABOLAT 球拍2', imgUrl: '../img/Babolat_img/Babolat_str/b2.jpg', price: 600, count: 0 },
        { id: '113', brand: 'BABOLAT', category: '網球線', itemName: 'BABOLAT 球拍3', imgUrl: '../img/Babolat_img/Babolat_str/b3.jpg', price: 600, count: 0 },
        { id: '114', brand: 'BABOLAT', category: '網球線', itemName: 'BABOLAT 球拍4', imgUrl: '../img/Babolat_img/Babolat_str/b4.jpg', price: 600, count: 0 },
        { id: '115', brand: 'BABOLAT', category: '網球線', itemName: 'BABOLAT 球拍5', imgUrl: '../img/Babolat_img/Babolat_str/b5.jpg', price: 600, count: 0 },
        { id: '116', brand: 'BABOLAT', category: '網球線', itemName: 'BABOLAT 球拍6', imgUrl: '../img/Babolat_img/Babolat_str/b6.jpg', price: 600, count: 0 },
        { id: '117', brand: 'BABOLAT', category: '網球線', itemName: 'BABOLAT 球拍7', imgUrl: '../img/Babolat_img/Babolat_str/b7.jpg', price: 600, count: 0 },
        { id: '118', brand: 'BABOLAT', category: '網球線', itemName: 'BABOLAT 球拍8', imgUrl: '../img/Babolat_img/Babolat_str/b8.jpg', price: 600, count: 0 },
        { id: '119', brand: 'BABOLAT', category: '網球線', itemName: 'BABOLAT 球拍9', imgUrl: '../img/Babolat_img/Babolat_str/b9.jpg', price: 600, count: 0 },
        { id: '120', brand: 'BABOLAT', category: '網球線', itemName: 'BABOLAT 球拍10', imgUrl: '../img/Babolat_img/Babolat_str/b10.jpg', price: 600, count: 0 },
        { id: '121', brand: 'BABOLAT', category: '網球線', itemName: 'BABOLAT 球拍11', imgUrl: '../img/Babolat_img/Babolat_str/b11.jpg', price: 600, count: 0 },
        { id: '122', brand: 'BABOLAT', category: '網球線', itemName: 'BABOLAT 球拍12', imgUrl: '../img/Babolat_img/Babolat_str/b12.jpg', price: 600, count: 0 },
        

        { id: '123', brand: 'BABOLAT', category: '網球鞋', itemName: 'BABOLAT 球拍1', imgUrl: '../img/Babolat_img/Babolat_sh/bs1.jpg', price: 600, count: 0 },
        { id: '124', brand: 'BABOLAT', category: '網球鞋', itemName: 'BABOLAT 球拍2', imgUrl: '../img/Babolat_img/Babolat_sh/bs2.jpg', price: 600, count: 0 },
        { id: '125', brand: 'BABOLAT', category: '網球鞋', itemName: 'BABOLAT 球拍3', imgUrl: '../img/Babolat_img/Babolat_sh/bs3.jpg', price: 600, count: 0 },
        { id: '126', brand: 'BABOLAT', category: '網球鞋', itemName: 'BABOLAT 球拍4', imgUrl: '../img/Babolat_img/Babolat_sh/bs4.jpg', price: 600, count: 0 },
        { id: '127', brand: 'BABOLAT', category: '網球鞋', itemName: 'BABOLAT 球拍5', imgUrl: '../img/Babolat_img/Babolat_sh/bs5.jpg', price: 600, count: 0 },
        { id: '128', brand: 'BABOLAT', category: '網球鞋', itemName: 'BABOLAT 球拍6', imgUrl: '../img/Babolat_img/Babolat_sh/bs6.jpg', price: 600, count: 0 },
        { id: '129', brand: 'BABOLAT', category: '網球鞋', itemName: 'BABOLAT 球拍7', imgUrl: '../img/Babolat_img/Babolat_sh/bs7.jpg', price: 600, count: 0 },
        { id: '130', brand: 'BABOLAT', category: '網球鞋', itemName: 'BABOLAT 球拍8', imgUrl: '../img/Babolat_img/Babolat_sh/bs8.jpg', price: 600, count: 0 },
        { id: '131', brand: 'BABOLAT', category: '網球鞋', itemName: 'BABOLAT 球拍9', imgUrl: '../img/Babolat_img/Babolat_sh/bs9.jpg', price: 600, count: 0 },
        { id: '132', brand: 'BABOLAT', category: '網球鞋', itemName: 'BABOLAT 球拍10', imgUrl: '../img/Babolat_img/Babolat_sh/bs10.jpg', price: 600, count: 0 },
        { id: '133', brand: 'BABOLAT', category: '網球鞋', itemName: 'BABOLAT 球拍11', imgUrl: '../img/Babolat_img/Babolat_sh/bs11.jpg', price: 600, count: 0 },
        { id: '134', brand: 'BABOLAT', category: '網球鞋', itemName: 'BABOLAT 球拍12', imgUrl: '../img/Babolat_img/Babolat_sh/bs12.jpg', price: 600, count: 0 },
        

        { id: '49', brand: 'BABOLAT', category: '網球', itemName: 'BABOLAT 球拍1', imgUrl: '../img/Babolat_img/Babolat_tennis/image.png', price: 600, count: 0 },
        { id: '49', brand: 'BABOLAT', category: '網球', itemName: 'BABOLAT 球拍1', imgUrl: '../img/Babolat_img/Babolat_tennis/image2.png', price: 600, count: 0 },
        { id: '49', brand: 'BABOLAT', category: '網球', itemName: 'BABOLAT 球拍1', imgUrl: '../img/Babolat_img/Babolat_tennis/image3.png', price: 600, count: 0 },

        { id: '49', brand: 'BABOLAT', category: '網袋', itemName: 'BABOLAT 球拍1', imgUrl: '../img/Babolat_img/Babolat_bag/bb1.jpg', price: 600, count: 0 },
        { id: '127', brand: 'BABOLAT', category: '網袋', itemName: 'BABOLAT 球拍2', imgUrl: '../img/Babolat_img/Babolat_bag/bb2.jpg', price: 600, count: 0 },
        { id: '128', brand: 'BABOLAT', category: '網袋', itemName: 'BABOLAT 球拍3', imgUrl: '../img/Babolat_img/Babolat_bag/bb3.jpg', price: 600, count: 0 },
        { id: '129', brand: 'BABOLAT', category: '網袋', itemName: 'BABOLAT 球拍4', imgUrl: '../img/Babolat_img/Babolat_bag/bb4.jpg', price: 600, count: 0 },
        { id: '130', brand: 'BABOLAT', category: '網袋', itemName: 'BABOLAT 球拍5', imgUrl: '../img/Babolat_img/Babolat_bag/bb5.jpg', price: 600, count: 0 },
        { id: '131', brand: 'BABOLAT', category: '網袋', itemName: 'BABOLAT 球拍6', imgUrl: '../img/Babolat_img/Babolat_bag/bb6.jpg', price: 600, count: 0 },
        { id: '132', brand: 'BABOLAT', category: '網袋', itemName: 'BABOLAT 球拍7', imgUrl: '../img/Babolat_img/Babolat_bag/bb7.jpg', price: 600, count: 0 },
        { id: '133', brand: 'BABOLAT', category: '網袋', itemName: 'BABOLAT 球拍8', imgUrl: '../img/Babolat_img/Babolat_bag/bb8.jpg', price: 600, count: 0 },
        { id: '134', brand: 'BABOLAT', category: '網袋', itemName: 'BABOLAT 球拍9', imgUrl: '../img/Babolat_img/Babolat_bag/bb9.jpg', price: 600, count: 0 },
        { id: '135', brand: 'BABOLAT', category: '網袋', itemName: 'BABOLAT 球拍10', imgUrl: '../img/Babolat_img/Babolat_bag/bb10.jpg', price: 600, count: 0 },
        { id: '136', brand: 'BABOLAT', category: '網袋', itemName: 'BABOLAT 球拍11', imgUrl: '../img/Babolat_img/Babolat_bag/bb11.jpg', price: 600, count: 0 },
        { id: '137', brand: 'BABOLAT', category: '網袋', itemName: 'BABOLAT 球拍12', imgUrl: '../img/Babolat_img/Babolat_bag/bb12.jpg', price: 600, count: 0 },
        { id: '138', brand: 'BABOLAT', category: '網袋', itemName: 'BABOLAT 球拍13', imgUrl: '../img/Babolat_img/Babolat_bag/bb13.jpg', price: 600, count: 0 },
        { id: '139', brand: 'BABOLAT', category: '網袋', itemName: 'BABOLAT 球拍14', imgUrl: '../img/Babolat_img/Babolat_bag/bb14.jpg', price: 600, count: 0 },
        

        { id: '49', brand: 'BABOLAT', category: '服飾', itemName: 'BABOLAT 球拍1', imgUrl: '../img/Babolat_img/Babolat_tshirt/bts1.jpg', price: 600, count: 0 },
        { id: '140', brand: 'BABOLAT', category: '服飾', itemName: 'BABOLAT 球拍2', imgUrl: '../img/Babolat_img/Babolat_tshirt/bts2.jpg', price: 600, count: 0 },
        { id: '141', brand: 'BABOLAT', category: '服飾', itemName: 'BABOLAT 球拍3', imgUrl: '../img/Babolat_img/Babolat_tshirt/bts3.jpg', price: 600, count: 0 },
        { id: '142', brand: 'BABOLAT', category: '服飾', itemName: 'BABOLAT 球拍4', imgUrl: '../img/Babolat_img/Babolat_tshirt/bts4.jpg', price: 600, count: 0 },
        { id: '143', brand: 'BABOLAT', category: '服飾', itemName: 'BABOLAT 球拍5', imgUrl: '../img/Babolat_img/Babolat_tshirt/bts5.jpg', price: 600, count: 0 },


        { id: '49', brand: 'BABOLAT', category: '配件', itemName: 'BABOLAT 球拍1', imgUrl: '../img/Babolat_img/BABOLAT_acc/ba1.jpg', price: 600, count: 0 },
        { id: '158', brand: 'BABOLAT', category: '配件', itemName: 'BABOLAT 球拍2', imgUrl: '../img/Babolat_img/BABOLAT_acc/ba2.jpg', price: 600, count: 0 },
        { id: '159', brand: 'BABOLAT', category: '配件', itemName: 'BABOLAT 球拍3', imgUrl: '../img/Babolat_img/BABOLAT_acc/ba3.jpg', price: 600, count: 0 },
        { id: '160', brand: 'BABOLAT', category: '配件', itemName: 'BABOLAT 球拍4', imgUrl: '../img/Babolat_img/BABOLAT_acc/ba4.jpg', price: 600, count: 0 },
        { id: '161', brand: 'BABOLAT', category: '配件', itemName: 'BABOLAT 球拍5', imgUrl: '../img/Babolat_img/BABOLAT_acc/ba5.jpg', price: 600, count: 0 },
        { id: '162', brand: 'BABOLAT', category: '配件', itemName: 'BABOLAT 球拍6', imgUrl: '../img/Babolat_img/BABOLAT_acc/ba6.jpg', price: 600, count: 0 },
        { id: '163', brand: 'BABOLAT', category: '配件', itemName: 'BABOLAT 球拍7', imgUrl: '../img/Babolat_img/BABOLAT_acc/ba7.jpg', price: 600, count: 0 },
        { id: '164', brand: 'BABOLAT', category: '配件', itemName: 'BABOLAT 球拍8', imgUrl: '../img/Babolat_img/BABOLAT_acc/ba8.jpg', price: 600, count: 0 },
        { id: '165', brand: 'BABOLAT', category: '配件', itemName: 'BABOLAT 球拍9', imgUrl: '../img/Babolat_img/BABOLAT_acc/ba9.jpg', price: 600, count: 0 },
        { id: '166', brand: 'BABOLAT', category: '配件', itemName: 'BABOLAT 球拍10', imgUrl: '../img/Babolat_img/BABOLAT_acc/ba10.jpg', price: 600, count: 0 },
        { id: '167', brand: 'BABOLAT', category: '配件', itemName: 'BABOLAT 球拍11', imgUrl: '../img/Babolat_img/BABOLAT_acc/ba11.jpg', price: 600, count: 0 },
        { id: '168', brand: 'BABOLAT', category: '配件', itemName: 'BABOLAT 球拍12', imgUrl: '../img/Babolat_img/BABOLAT_acc/ba12.jpg', price: 600, count: 0 },
        { id: '169', brand: 'BABOLAT', category: '配件', itemName: 'BABOLAT 球拍13', imgUrl: '../img/Babolat_img/BABOLAT_acc/ba13.jpg', price: 600, count: 0 },
        { id: '170', brand: 'BABOLAT', category: '配件', itemName: 'BABOLAT 球拍14', imgUrl: '../img/Babolat_img/BABOLAT_acc/ba14.jpg', price: 600, count: 0 },
        

        { id: '73', brand: 'WILSON', category: '球拍', itemName: 'WILSON 球拍1', imgUrl: '../img/Wilson_img/Wilson_rk/wrk1.jpg', price: 550, count: 0 },
        { id: '174', brand: 'WILSON', category: '球拍', itemName: 'WILSON 球拍2', imgUrl: '../img/Wilson_img/Wilson_rk/wrk2.jpg', price: 550, count: 0 },
        { id: '175', brand: 'WILSON', category: '球拍', itemName: 'WILSON 球拍3', imgUrl: '../img/Wilson_img/Wilson_rk/wrk3.jpg', price: 550, count: 0 },
        { id: '176', brand: 'WILSON', category: '球拍', itemName: 'WILSON 球拍4', imgUrl: '../img/Wilson_img/Wilson_rk/wrk4.jpg', price: 550, count: 0 },
        { id: '177', brand: 'WILSON', category: '球拍', itemName: 'WILSON 球拍5', imgUrl: '../img/Wilson_img/Wilson_rk/wrk5.jpg', price: 550, count: 0 },
        { id: '178', brand: 'WILSON', category: '球拍', itemName: 'WILSON 球拍6', imgUrl: '../img/Wilson_img/Wilson_rk/wrk6.jpg', price: 550, count: 0 },
        { id: '179', brand: 'WILSON', category: '球拍', itemName: 'WILSON 球拍7', imgUrl: '../img/Wilson_img/Wilson_rk/wrk7.jpg', price: 550, count: 0 },
        { id: '180', brand: 'WILSON', category: '球拍', itemName: 'WILSON 球拍8', imgUrl: '../img/Wilson_img/Wilson_rk/wrk8.jpg', price: 550, count: 0 },
        { id: '181', brand: 'WILSON', category: '球拍', itemName: 'WILSON 球拍9', imgUrl: '../img/Wilson_img/Wilson_rk/wrk9.jpg', price: 550, count: 0 },
        { id: '182', brand: 'WILSON', category: '球拍', itemName: 'WILSON 球拍10', imgUrl: '../img/Wilson_img/Wilson_rk/wrk10.jpg', price: 550, count: 0 },
        { id: '183', brand: 'WILSON', category: '球拍', itemName: 'WILSON 球拍11', imgUrl: '../img/Wilson_img/Wilson_rk/wrk11.jpg', price: 550, count: 0 },
        { id: '184', brand: 'WILSON', category: '球拍', itemName: 'WILSON 球拍12', imgUrl: '../img/Wilson_img/Wilson_rk/wrk12.jpg', price: 550, count: 0 },
        

        { id: '73', brand: 'WILSON', category: '網球線', itemName: 'WILSON 網球線1', imgUrl: '../img/Wilson_img/Wilson_str/wsr1.jpg', price: 550, count: 0 },
        { id: '184', brand: 'WILSON', category: '網球線', itemName: 'WILSON 網球線2', imgUrl: '../img/Wilson_img/Wilson_str/wsr2.jpg', price: 550, count: 0 },
        { id: '185', brand: 'WILSON', category: '網球線', itemName: 'WILSON 網球線3', imgUrl: '../img/Wilson_img/Wilson_str/wsr3.jpg', price: 550, count: 0 },
        { id: '186', brand: 'WILSON', category: '網球線', itemName: 'WILSON 網球線4', imgUrl: '../img/Wilson_img/Wilson_str/wsr4.jpg', price: 550, count: 0 },
        { id: '187', brand: 'WILSON', category: '網球線', itemName: 'WILSON 網球線5', imgUrl: '../img/Wilson_img/Wilson_str/wsr5.jpg', price: 550, count: 0 },
        { id: '188', brand: 'WILSON', category: '網球線', itemName: 'WILSON 網球線6', imgUrl: '../img/Wilson_img/Wilson_str/wsr6.jpg', price: 550, count: 0 },
        { id: '189', brand: 'WILSON', category: '網球線', itemName: 'WILSON 網球線7', imgUrl: '../img/Wilson_img/Wilson_str/wsr7.jpg', price: 550, count: 0 },
        { id: '190', brand: 'WILSON', category: '網球線', itemName: 'WILSON 網球線8', imgUrl: '../img/Wilson_img/Wilson_str/wsr8.jpg', price: 550, count: 0 },
        { id: '191', brand: 'WILSON', category: '網球線', itemName: 'WILSON 網球線9', imgUrl: '../img/Wilson_img/Wilson_str/wsr9.jpg', price: 550, count: 0 },
        { id: '192', brand: 'WILSON', category: '網球線', itemName: 'WILSON 網球線10', imgUrl: '../img/Wilson_img/Wilson_str/wsr10.jpg', price: 550, count: 0 },
        

        { id: '73', brand: 'WILSON', category: '網球鞋', itemName: 'WILSON 網球鞋1', imgUrl: '../img/Wilson_img/Wilson_rk/wrk1.jpg', price: 550, count: 0 },
        { id: '194', brand: 'WILSON', category: '網球鞋', itemName: 'WILSON 網球鞋2', imgUrl: '../img/Wilson_img/Wilson_rk/wrk2.jpg', price: 550, count: 0 },
        { id: '195', brand: 'WILSON', category: '網球鞋', itemName: 'WILSON 網球鞋3', imgUrl: '../img/Wilson_img/Wilson_rk/wrk3.jpg', price: 550, count: 0 },
        { id: '196', brand: 'WILSON', category: '網球鞋', itemName: 'WILSON 網球鞋4', imgUrl: '../img/Wilson_img/Wilson_rk/wrk4.jpg', price: 550, count: 0 },
        { id: '197', brand: 'WILSON', category: '網球鞋', itemName: 'WILSON 網球鞋5', imgUrl: '../img/Wilson_img/Wilson_rk/wrk5.jpg', price: 550, count: 0 },
        { id: '198', brand: 'WILSON', category: '網球鞋', itemName: 'WILSON 網球鞋6', imgUrl: '../img/Wilson_img/Wilson_rk/wrk6.jpg', price: 550, count: 0 },
        { id: '199', brand: 'WILSON', category: '網球鞋', itemName: 'WILSON 網球鞋7', imgUrl: '../img/Wilson_img/Wilson_rk/wrk7.jpg', price: 550, count: 0 },
        { id: '200', brand: 'WILSON', category: '網球鞋', itemName: 'WILSON 網球鞋8', imgUrl: '../img/Wilson_img/Wilson_rk/wrk8.jpg', price: 550, count: 0 },
        { id: '201', brand: 'WILSON', category: '網球鞋', itemName: 'WILSON 網球鞋9', imgUrl: '../img/Wilson_img/Wilson_rk/wrk9.jpg', price: 550, count: 0 },
        { id: '202', brand: 'WILSON', category: '網球鞋', itemName: 'WILSON 網球鞋10', imgUrl: '../img/Wilson_img/Wilson_rk/wrk10.jpg', price: 550, count: 0 },
        { id: '203', brand: 'WILSON', category: '網球鞋', itemName: 'WILSON 網球鞋11', imgUrl: '../img/Wilson_img/Wilson_rk/wrk11.jpg', price: 550, count: 0 },
        { id: '204', brand: 'WILSON', category: '網球鞋', itemName: 'WILSON 網球鞋12', imgUrl: '../img/Wilson_img/Wilson_rk/wrk12.jpg', price: 550, count: 0 },
        

        { id: '73', brand: 'WILSON', category: '網球', itemName: 'WILSON 球拍1', imgUrl: '../img/Wilson_img/Wilson_ball/w1.jpg', price: 550, count: 0 },
        { id: '73', brand: 'WILSON', category: '網球', itemName: 'WILSON 球拍1', imgUrl: '../img/Wilson_img/Wilson_ball/w2.jpg', price: 550, count: 0 },
        { id: '73', brand: 'WILSON', category: '網球', itemName: 'WILSON 球拍1', imgUrl: '../img/Wilson_img/Wilson_ball/w3.jpg', price: 550, count: 0 },


        { id: '73', brand: 'WILSON', category: '球袋', itemName: 'WILSON 球袋1', imgUrl: '../img/Wilson_img/wilson_bag/wbg1.jpg', price: 550, count: 0 },
        { id: '205', brand: 'WILSON', category: '球袋', itemName: 'WILSON 球袋2', imgUrl: '../img/Wilson_img/wilson_bag/wbg2.jpg', price: 550, count: 0 },
        { id: '206', brand: 'WILSON', category: '球袋', itemName: 'WILSON 球袋3', imgUrl: '../img/Wilson_img/wilson_bag/wbg3.jpg', price: 550, count: 0 },
        { id: '207', brand: 'WILSON', category: '球袋', itemName: 'WILSON 球袋4', imgUrl: '../img/Wilson_img/wilson_bag/wbg4.jpg', price: 550, count: 0 },
        { id: '208', brand: 'WILSON', category: '球袋', itemName: 'WILSON 球袋5', imgUrl: '../img/Wilson_img/wilson_bag/wbg5.jpg', price: 550, count: 0 },
        { id: '209', brand: 'WILSON', category: '球袋', itemName: 'WILSON 球袋6', imgUrl: '../img/Wilson_img/wilson_bag/wbg6.jpg', price: 550, count: 0 },
        { id: '210', brand: 'WILSON', category: '球袋', itemName: 'WILSON 球袋7', imgUrl: '../img/Wilson_img/wilson_bag/wbg7.jpg', price: 550, count: 0 },
        { id: '211', brand: 'WILSON', category: '球袋', itemName: 'WILSON 球袋8', imgUrl: '../img/Wilson_img/wilson_bag/wbg8.jpg', price: 550, count: 0 },
        { id: '212', brand: 'WILSON', category: '球袋', itemName: 'WILSON 球袋9', imgUrl: '../img/Wilson_img/wilson_bag/wbg9.jpg', price: 550, count: 0 },
        { id: '213', brand: 'WILSON', category: '球袋', itemName: 'WILSON 球袋10', imgUrl: '../img/Wilson_img/wilson_bag/wbg10.jpg', price: 550, count: 0 },
        { id: '214', brand: 'WILSON', category: '球袋', itemName: 'WILSON 球袋11', imgUrl: '../img/Wilson_img/wilson_bag/wbg11.jpg', price: 550, count: 0 },
        { id: '215', brand: 'WILSON', category: '球袋', itemName: 'WILSON 球袋12', imgUrl: '../img/Wilson_img/wilson_bag/wbg12.jpg', price: 550, count: 0 },
        { id: '216', brand: 'WILSON', category: '球袋', itemName: 'WILSON 球袋13', imgUrl: '../img/Wilson_img/wilson_bag/wbg13.jpg', price: 550, count: 0 },
        { id: '217', brand: 'WILSON', category: '球袋', itemName: 'WILSON 球袋14', imgUrl: '../img/Wilson_img/wilson_bag/wbg14.jpg', price: 550, count: 0 },
        { id: '218', brand: 'WILSON', category: '球袋', itemName: 'WILSON 球袋15', imgUrl: '../img/Wilson_img/wilson_bag/wbg15.jpg', price: 550, count: 0 },
        

        { id: '73', brand: 'WILSON', category: '服飾', itemName: 'WILSON 服飾1', imgUrl: '../img/Wilson_img/wilson_tshirt/wt1.jpg', price: 550, count: 0 },
        { id: '219', brand: 'WILSON', category: '服飾', itemName: 'WILSON 服飾2', imgUrl: '../img/Wilson_img/wilson_tshirt/wt2.jpg', price: 550, count: 0 },
        { id: '220', brand: 'WILSON', category: '服飾', itemName: 'WILSON 服飾3', imgUrl: '../img/Wilson_img/wilson_tshirt/wt3.jpg', price: 550, count: 0 },
        { id: '221', brand: 'WILSON', category: '服飾', itemName: 'WILSON 服飾4', imgUrl: '../img/Wilson_img/wilson_tshirt/wt4.jpg', price: 550, count: 0 },
        { id: '222', brand: 'WILSON', category: '服飾', itemName: 'WILSON 服飾5', imgUrl: '../img/Wilson_img/wilson_tshirt/wt5.jpg', price: 550, count: 0 },
        { id: '223', brand: 'WILSON', category: '服飾', itemName: 'WILSON 服飾6', imgUrl: '../img/Wilson_img/wilson_tshirt/wt6.jpg', price: 550, count: 0 },
        { id: '224', brand: 'WILSON', category: '服飾', itemName: 'WILSON 服飾7', imgUrl: '../img/Wilson_img/wilson_tshirt/wt7.jpg', price: 550, count: 0 },
        { id: '225', brand: 'WILSON', category: '服飾', itemName: 'WILSON 服飾8', imgUrl: '../img/Wilson_img/wilson_tshirt/wt8.jpg', price: 550, count: 0 },
        
        { id: '73', brand: 'WILSON', category: '配件', itemName: 'WILSON 配件1', imgUrl: '../img/Wilson_img/WILSON_acc/wa1.jpg', price: 550, count: 0 },
        { id: '224', brand: 'WILSON', category: '配件', itemName: 'WILSON 配件2', imgUrl: '../img/Wilson_img/WILSON_acc/wa2.jpg', price: 550, count: 0 },
        { id: '225', brand: 'WILSON', category: '配件', itemName: 'WILSON 配件3', imgUrl: '../img/Wilson_img/WILSON_acc/wa3.jpg', price: 550, count: 0 },
        { id: '226', brand: 'WILSON', category: '配件', itemName: 'WILSON 配件4', imgUrl: '../img/Wilson_img/WILSON_acc/wa4.jpg', price: 550, count: 0 },
        { id: '227', brand: 'WILSON', category: '配件', itemName: 'WILSON 配件5', imgUrl: '../img/Wilson_img/WILSON_acc/wa5.jpg', price: 550, count: 0 },
        { id: '228', brand: 'WILSON', category: '配件', itemName: 'WILSON 配件6', imgUrl: '../img/Wilson_img/WILSON_acc/wa6.jpg', price: 550, count: 0 },
        { id: '229', brand: 'WILSON', category: '配件', itemName: 'WILSON 配件7', imgUrl: '../img/Wilson_img/WILSON_acc/wa7.jpg', price: 550, count: 0 },
        { id: '230', brand: 'WILSON', category: '配件', itemName: 'WILSON 配件8', imgUrl: '../img/Wilson_img/WILSON_acc/wa8.jpg', price: 550, count: 0 },
        { id: '231', brand: 'WILSON', category: '配件', itemName: 'WILSON 配件9', imgUrl: '../img/Wilson_img/WILSON_acc/wa9.jpg', price: 550, count: 0 },
        { id: '232', brand: 'WILSON', category: '配件', itemName: 'WILSON 配件10', imgUrl: '../img/Wilson_img/WILSON_acc/wa10.jpg', price: 550, count: 0 },
        { id: '233', brand: 'WILSON', category: '配件', itemName: 'WILSON 配件11', imgUrl: '../img/Wilson_img/WILSON_acc/wa11.jpg', price: 550, count: 0 },
        { id: '234', brand: 'WILSON', category: '配件', itemName: 'WILSON 配件12', imgUrl: '../img/Wilson_img/WILSON_acc/wa12.jpg', price: 550, count: 0 },
        { id: '235', brand: 'WILSON', category: '配件', itemName: 'WILSON 配件13', imgUrl: '../img/Wilson_img/WILSON_acc/wa13.jpg', price: 550, count: 0 },
        { id: '236', brand: 'WILSON', category: '配件', itemName: 'WILSON 配件14', imgUrl: '../img/Wilson_img/WILSON_acc/wa14.jpg', price: 550, count: 0 },
        
   

      ]
  },
  methods: {
      handlePlus: function(item) {
          item.count++;
      },
      handleSub: function(item) {
          if (item.count > 0) {
              item.count--;
          }
      },
      handledelete: function(index) {
          this.itemList.splice(index, 1);
      },
      submitOrder: function() {
          alert(`訂單已送出！總数量: ${this.totalCount}, 總金额: $${this.totalPrice}`);
      },
      selectBrand: function(brand) {
          this.selectedBrand = brand;
      }
  },
  computed: {
      totalPrice: function() {
          return this.itemList.reduce((total, item) => {
              return total + (item.price * item.count);
          }, 0);
      },
      totalCount: function() {
          return this.itemList.reduce((total, item) => {
              return total + item.count;
          }, 0);
      },
      categorizedItems: function() {
          let brands = {};
          this.itemList.forEach(item => {
              if (!brands[item.brand]) {
                  brands[item.brand] = {};
              }
              if (!brands[item.brand][item.category]) {
                  brands[item.brand][item.category] = [];
              }
              brands[item.brand][item.category].push(item);
          });
          return brands;
      },
      filteredItems: function() {
          return this.itemList.filter(item => item.brand === this.selectedBrand);
      }
  }
});

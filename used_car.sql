/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : used_car

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 14:49:11
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for bookcar
-- ----------------------------
DROP TABLE IF EXISTS `bookcar`;
CREATE TABLE `bookcar` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `test_shijian` varchar(255) DEFAULT '',
  `test_area` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bookcar
-- ----------------------------
INSERT INTO `bookcar` VALUES ('1', 'xiao', '13233322211', '2018-02-08 10:45:48', '广州');
INSERT INTO `bookcar` VALUES ('2', '2232', '232', '2002-', '23');
INSERT INTO `bookcar` VALUES ('3', '2232', '232', '20', '23');
INSERT INTO `bookcar` VALUES ('4', '肖振龙', '1232323222', '122', '广州');
INSERT INTO `bookcar` VALUES ('5', '肖振龙', '1232323222', '122', '广州');
INSERT INTO `bookcar` VALUES ('6', 'sad', 'dsa', 'adsd', 'dsad');
INSERT INTO `bookcar` VALUES ('7', 'sad', 'dsa', 'adsd', 'dsad');
INSERT INTO `bookcar` VALUES ('8', 'sad', 'dsa', 'adsd', 'dsad');
INSERT INTO `bookcar` VALUES ('9', 'sad', 'dsa', 'adsd', 'dsad');
INSERT INTO `bookcar` VALUES ('10', 'sad', 'dsa', 'adsd', 'dsad');
INSERT INTO `bookcar` VALUES ('11', 'sad', 'dsa', 'adsd', 'dsad');
INSERT INTO `bookcar` VALUES ('12', 'sad', 'dsa', 'adsd', 'dsad');
INSERT INTO `bookcar` VALUES ('13', 'sad', 'dsa', 'adsd', 'dsad');
INSERT INTO `bookcar` VALUES ('14', 'sad', 'dsa', 'adsd', 'dsad');
INSERT INTO `bookcar` VALUES ('15', 'dsa', 'dsa', 'sad', 'sa');
INSERT INTO `bookcar` VALUES ('16', '涛总', '888888', '2012.8-12', '北京');
INSERT INTO `bookcar` VALUES ('20', '周涛', '13523222233', '2018-12-18', '北京');
INSERT INTO `bookcar` VALUES ('21', 'dsadsad', 'dasdsad', 'sadsadsa', 'sadsad');
INSERT INTO `bookcar` VALUES ('36', '11', '11', '1', '11');
INSERT INTO `bookcar` VALUES ('35', '周涛', '17722864831', '2018-2-15', '广州');
INSERT INTO `bookcar` VALUES ('38', '123', '123', '123', '123');
INSERT INTO `bookcar` VALUES ('37', '123', '123', '123', '132');

-- ----------------------------
-- Table structure for brand
-- ----------------------------
DROP TABLE IF EXISTS `brand`;
CREATE TABLE `brand` (
  `brand_id` int(11) NOT NULL AUTO_INCREMENT,
  `brand_name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  PRIMARY KEY (`brand_id`)
) ENGINE=MyISAM AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of brand
-- ----------------------------
INSERT INTO `brand` VALUES ('1', '奥迪', 'A');
INSERT INTO `brand` VALUES ('2', '宝马', 'B');
INSERT INTO `brand` VALUES ('3', '本田', 'B');
INSERT INTO `brand` VALUES ('4', '传祺', 'C');
INSERT INTO `brand` VALUES ('5', '长安', 'C');
INSERT INTO `brand` VALUES ('6', '别克', 'B');
INSERT INTO `brand` VALUES ('7', '大众', 'D');
INSERT INTO `brand` VALUES ('8', '东风', 'D');
INSERT INTO `brand` VALUES ('9', '福特', 'F');
INSERT INTO `brand` VALUES ('10', '广汽', 'G');
INSERT INTO `brand` VALUES ('11', '哈弗', 'H');
INSERT INTO `brand` VALUES ('12', '吉利', 'J');
INSERT INTO `brand` VALUES ('13', '江淮', 'J');
INSERT INTO `brand` VALUES ('14', '吉普', 'J');
INSERT INTO `brand` VALUES ('15', '凯迪拉克', 'K');
INSERT INTO `brand` VALUES ('16', '铃木', 'L');
INSERT INTO `brand` VALUES ('17', '雷克萨斯', 'L');
INSERT INTO `brand` VALUES ('18', '蒙迪欧', 'M');
INSERT INTO `brand` VALUES ('19', '纳智捷', 'N');
INSERT INTO `brand` VALUES ('20', '起亚', 'Q');
INSERT INTO `brand` VALUES ('21', '日产', 'R');
INSERT INTO `brand` VALUES ('22', '荣威', 'R');
INSERT INTO `brand` VALUES ('24', '斯巴鲁', 'S');
INSERT INTO `brand` VALUES ('25', '沃尔沃', 'W');
INSERT INTO `brand` VALUES ('26', '现代', 'X');
INSERT INTO `brand` VALUES ('27', '雪弗兰', 'X');
INSERT INTO `brand` VALUES ('28', '雪铁龙', 'X');
INSERT INTO `brand` VALUES ('29', '英菲尼迪', 'Y');

-- ----------------------------
-- Table structure for cars
-- ----------------------------
DROP TABLE IF EXISTS `cars`;
CREATE TABLE `cars` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `brand_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `brand_name` varchar(255) NOT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `oprice` decimal(10,2) NOT NULL,
  `nprice` decimal(10,2) NOT NULL,
  `license_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `mileage` varchar(255) NOT NULL,
  `license_area` varchar(255) NOT NULL,
  `car_area` varchar(255) NOT NULL,
  `baomai` varchar(255) NOT NULL,
  `car_type` varchar(255) NOT NULL,
  `car_age` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `biansuxiang` varchar(255) DEFAULT NULL,
  `paifang` varchar(255) NOT NULL,
  `paifangbiaozhun` varchar(255) NOT NULL,
  `haoche` varchar(255) NOT NULL,
  `jishou` varchar(255) NOT NULL,
  `detail_img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=97 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cars
-- ----------------------------
INSERT INTO `cars` VALUES ('96', '12', '22', '222', null, '22.00', '22.00', '2018-02-15 00:00:00', 'undefined', '广州', '广州', 'true', '2厢', '1', '白色', '国产', null, '1.6', '国三', 'true', 'false', null);
INSERT INTO `cars` VALUES ('25', '9', '福特锐界 2015款 2.0T GTDi 两驱精锐型 ', '福特', 'project/src/img/fute3.jpg,project/src/img/fute1a.jpg,project/src/img/fute1b.jpg,project/src/img/fute1c.jpg,project/src/img/fute1d.jpg', '19.50', '27.10', '2017-01-01 00:00:00', '22', '深圳', '深圳', 'false ', '3厢', '2', '白色', '法系', '自动', '1.6', '国三', 'false ', 'true ', 'project/src/img/fute1a.jpg,project/src/img/fute1b.jpg,project/src/img/fute1c.jpg,project/src/img/fute1d.jpg');
INSERT INTO `cars` VALUES ('24', '9', '福特野马 2015款 2.3T 50周年纪念版(进口)', '福特', 'project/src/img/fute2.jpg,project/src/img/fute1a.jpg,project/project/src/img/fute1b.jpg,project/src/img/fute1c.jpg,project/src/img/fute1d.jpg', '32.80', '46.70', '2013-08-01 00:00:00', '23', '佛山', '深圳', 'true ', '2厢', '4', '黑色', '德系', '手动', '1.8', '国四', 'true ', 'false ', 'project/src/img/fute1a.jpg,project/project/src/img/fute1b.jpg,project/src/img/fute1c.jpg,project/src/img/fute1d.jpg');
INSERT INTO `cars` VALUES ('23', '9', '福特锐界 2016款 EcoBoost 245 四驱豪锐型 7座', '福特', 'project/src/img/fute1.jpg,project/src/img/fute1a.jpg,project/src/img/fute1b.jpg,project/src/img/fute1c.jpg,project/src/img/fute1d.jpg', '25.00', '34.70', '2014-08-01 00:00:00', '21', '东莞', '佛山', 'false ', '3厢', '2', '黑色', '德系', '自动', '1.8', '国五', 'false ', 'true ', 'project/src/img/fute1a.jpg,project/src/img/fute1b.jpg,project/src/img/fute1c.jpg,project/src/img/fute1d.jpg');
INSERT INTO `cars` VALUES ('22', '8', '东风小康东风风光580 2016款 改款 1.5T CVT豪华型', '东风', 'project/src/img/dongfeng4.jpg,project/src/img/dongfeng1a.jpg,project/src/img/dongfeng1b.jpg,project/src/img/dongfeng1c.jpg,project/src/img/dongfeng1d.jpg', '9.50', '10.80', '2016-05-01 00:00:00', '29', '广州', '广州', 'true ', '3厢', '2', '黑色', '日产', '手动', '2', '国五', 'true ', 'false ', 'project/src/img/dongfeng1a.jpg,project/src/img/dongfeng1b.jpg,project/src/img/dongfeng1c.jpg,project/src/img/dongfeng1d.jpg');
INSERT INTO `cars` VALUES ('5', '2', '宝马X1 2015款 sDrive18i 领先晋级版', '宝马', 'project/src/img/baoma1.jpg,project/src/img/baoma1a.jpg,project/src/img/baoma1b.jpg,project/src/img/baoma1c.jpg,project/src/img/baoma1d.jpg', '21.00', '34.60', '2014-08-01 00:00:00', '9.5', '佛山', '佛山', 'false ', '2厢', '4', '黑色', '德系', '自动', '2.2', '国四', 'true ', 'false ', 'project/src/img/baoma1a.jpg,project/src/img/baoma1b.jpg,project/src/img/baoma1c.jpg,project/src/img/baoma1d.jpg');
INSERT INTO `cars` VALUES ('6', '2', '宝马3系 2014款 320i 运动设计套装', '宝马', 'project/src/img/baoma2.jpg,project/src/img/baoma2a.jpg,project/src/img/baoma2b.jpg,project/src/img/baoma2c.jpg,project/src/img/baoma2d.jpg', '23.00', '41.60', '2015-08-01 00:00:00', '5.6', '东莞', '广州', 'false ', '3厢', '2', '香槟色', '国产', '自动', '2.4', '国三', 'false ', 'true ', 'project/src/img/baoma2a.jpg,project/src/img/baoma2b.jpg,project/src/img/baoma2c.jpg,project/src/img/baoma2d.jpg');
INSERT INTO `cars` VALUES ('7', '2', '宝马3系 2013款 320Li 豪华设计套装', '宝马', 'project/src/img/baoma3.jpg,project/src/img/baoma3a.jpg,project/src/img/baoma3b.jpg,project/src/img/baoma3c.jpg,project/src/img/baoma3d.jpg', '22.00', '44.30', '2016-05-01 00:00:00', '22.3', '深圳', '深圳', 'false ', '3厢', '1', '灰色', '韩系', '自动', '2', '国四', 'true ', 'false ', 'project/src/img/baoma3a.jpg,project/src/img/baoma3b.jpg,project/src/img/baoma3c.jpg,project/src/img/baoma3d.jpg');
INSERT INTO `cars` VALUES ('8', '3', '本田雅阁 2012款 2.0L SE', '本田', 'project/src/img/bentian1.jpg,project/src/img/bentian1a.jpg,project/src/img/bentian1b.jpg,project/src/img/bentian1c.jpg,project/src/img/bentian1d.jpg', '10.50', '22.00', '2014-08-01 00:00:00', '31.5', '深圳', '广州', 'false ', '2厢', '3', '白色', '日产', '自动', '1.8', '国五', 'false ', 'true ', 'project/src/img/bentian1a.jpg,project/src/img/bentian1b.jpg,project/src/img/bentian1c.jpg,project/src/img/bentian1d.jpg');
INSERT INTO `cars` VALUES ('9', '3', '本田奥德赛 2015款 2.4L 豪华版', '本田', 'project/src/img/bentian2.jpg,project/src/img/bentian2a.jpg,project/src/img/bentian2b.jpg,project/src/img/bentian2c.jpg,project/src/img/bentian2d.jpg', '22.00', '27.10', '2013-08-01 00:00:00', '14.7', '佛山', '深圳', 'true ', '3厢', '3', '香槟色', '日产', '手动', '1.8', '国五', 'true ', 'false ', 'project/src/img/bentian2a.jpg,project/src/img/bentian2b.jpg,project/src/img/bentian2c.jpg,project/src/img/bentian2d.jpg');
INSERT INTO `cars` VALUES ('10', '4', '传祺GS8 2017款 320T 两驱豪华智联版', '传祺', 'project/src/img/chuanqi1.jpg,project/src/img/chuanqi1a.jpg,project/src/img/chuanqi1b.jpg,project/src/img/chuanqi1c.jpg,project/src/img/chuanqi1d.jpg', '16.20', '19.80', '2017-01-01 00:00:00', '84.6', '佛山', '佛山', 'true ', '2厢', '2', '黑色', '德系', '自动', '1.6', '国四', 'false ', 'true ', 'project/src/img/chuanqi1a.jpg,project/src/img/chuanqi1b.jpg,project/src/img/chuanqi1c.jpg,project/src/img/chuanqi1d.jpg');
INSERT INTO `cars` VALUES ('11', '4', '传祺GA5 2012款 1.8L 手动精英型', '传祺', 'project/src/img/chuanqi2.jpg,project/src/img/chuanqi2a.jpg,project/src/img/chuanqi2b.jpg,project/src/img/chuanqi2c.jpg,project/src/img/chuanqi2d.jpg', '3.80', '13.70', '2015-04-01 00:00:00', '30', '佛山', '广州', 'true ', '2厢', '4', '黑色', '德系', '自动', '1.8', '国三', 'true ', 'false ', 'project/src/img/chuanqi2a.jpg,project/src/img/chuanqi2b.jpg,project/src/img/chuanqi2c.jpg,project/src/img/chuanqi2d.jpg');
INSERT INTO `cars` VALUES ('12', '5', '长安逸动 2015款 XT 1.6L 手动致酷型 国IV', '长安', 'project/src/img/changan1.jpg,project/src/img/changan1a.jpg,project/src/img/changan1b.jpg,project/src/img/changan1c.jpg,project/src/img/changan1d.jpg', '5.70', '9.50', '2018-02-09 10:08:03', '6.6', '东莞', '东莞', '否', '3厢', '2', '白色', '法系', '自动', '2', '国四', 'true ', 'true ', 'project/src/img/changan1a.jpg,project/src/img/changan1b.jpg,project/src/img/changan1c.jpg,project/src/img/changan1d.jpg');
INSERT INTO `cars` VALUES ('13', '5', '长安逸动 2015款 1.6L 自动豪华型', '长安', 'project/src/img/changan2.jpg,project/src/img/changan2a.jpg,project/src/img/changan2b.jpg,project/src/img/changan2c.jpg,project/src/img/changan2d.jpg', '9.60', '5.60', '2016-08-01 00:00:00', '15.4', '东莞', '广州', 'false ', '3厢', '2', '白色', '国产', '手动', '2', '国五', 'true ', 'false ', 'project/src/img/changan2a.jpg,project/src/img/changan2b.jpg,project/src/img/changan2c.jpg,project/src/img/changan2d.jpg');
INSERT INTO `cars` VALUES ('14', '6', '别克威朗 2016款 两厢GS 20T 双离合纵情运动型', '别克', 'project/src/img/bieke1.jpg,project/src/img/bieke1a.jpg,project/src/img/bieke1b.jpg,project/src/img/bieke1c.jpg,project/src/img/bieke1d.jpg', '15.80', '22.30', '2015-08-01 00:00:00', '9.8', '广州', '广州', 'false ', '3厢', '3', '红色', '日系', '自动', '2.2', '国五', 'false ', 'true ', 'project/src/img/bieke1a.jpg,project/src/img/bieke1b.jpg,project/src/img/bieke1c.jpg,project/src/img/bieke1d.jpg');
INSERT INTO `cars` VALUES ('15', '6', '别克GL8 2013款 2.4L CT豪华商务舒适版', '别克', 'project/src/img/bieke2.jpg,project/src/img/bieke2a.jpg,project/src/img/bieke2b.jpg,project/src/img/bieke2c.jpg,project/src/img/bieke2d.jpg', '16.10', '31.50', '2014-09-01 00:00:00', '10.8', '佛山', '广州', 'true ', '3厢', '3', '白色', '日系', '自动', '1.8', '国三', 'false ', 'true ', 'project/src/img/bieke2a.jpg,project/src/img/bieke2b.jpg,project/src/img/bieke2c.jpg,project/src/img/bieke2d.jpg');
INSERT INTO `cars` VALUES ('16', '7', '大众CC 2009款 3.6FSI 顶配版(进口)', '大众', 'project/src/img/dazhong1.jpg,project/src/img/dazhong1a.jpg,project/src/img/dazhong1b.jpg,project/src/img/dazhong1c.jpg,project/src/img/dazhong1d.jpg', '58.30', '14.70', '2018-02-09 14:39:17', '34.7', '东莞', '东莞', '是', '3厢', '3', '红色', '法系', '自动', '1.6', '国四', 'false ', 'true ', 'project/src/img/dazhong1a.jpg,project/src/img/dazhong1b.jpg,project/src/img/dazhong1c.jpg,project/src/img/dazhong1d.jpg');
INSERT INTO `cars` VALUES ('17', '7', '大众辉腾 2011款 3.6L V6 5座加长商务版(进口)', '大众', 'project/src/img/dazhong2.jpg,project/src/img/dazhong2a.jpg,project/src/img/dazhong2b.jpg,project/src/img/dazhong2c.jpg,project/src/img/dazhong2d.jpg', '27.80', '84.60', '2014-06-01 00:00:00', '46.7', '东莞', '深圳', 'false ', '2厢', '3', '香槟色', '日系', '手动', '1.8', '国五', 'true ', 'false ', 'project/src/img/dazhong2a.jpg,project/src/img/dazhong2b.jpg,project/src/img/dazhong2c.jpg,project/src/img/dazhong2d.jpg');
INSERT INTO `cars` VALUES ('18', '7', '大众途锐 2011款 3.0TSI 标配型(进口)', '大众', 'project/src/img/dazhong3.jpg,project/src/img/dazhong3a.jpg,project/src/img/dazhong3b.jpg,project/src/img/dazhong3c.jpg,project/src/img/dazhong3d.jpg', '30.00', '78.30', '2018-02-08 11:56:12', '27.1', '广州', '深圳', 'true ', '2厢', '2', '黑色', '德系', '手动', '1.6', '国五', 'true ', 'false ', 'project/src/img/dazhong3a.jpg,project/src/img/dazhong3b.jpg,project/src/img/dazhong3c.jpg,project/src/img/dazhong3d.jpg');
INSERT INTO `cars` VALUES ('19', '8', '东风风神AX7 2015款 2.0L 自动智悦型', '东风', 'project/src/img/dongfeng1.jpg,project/src/img/dongfeng1a.jpg,project/src/img/dongfeng1b.jpg,project/src/img/dongfeng1c.jpg,project/src/img/dongfeng1d.jpg', '13.90', '16.60', '2018-02-08 11:56:56', '60', '广州', '深圳', 'false ', '3厢', '1', '黑色', '国产', '自动', '1.7', '国四', 'false ', 'false ', 'project/src/img/dongfeng1a.jpg,project/src/img/dongfeng1b.jpg,project/src/img/dongfeng1c.jpg,project/src/img/dongfeng1d.jpg');
INSERT INTO `cars` VALUES ('20', '8', '东风风神AX7 2016款 2.3L 自动智尊型', '东风', 'project/src/img/dongfeng2.jpg,project/src/img/dongfeng1a.jpg,project/src/img/dongfeng1b.jpg,project/src/img/dongfeng1c.jpg,project/src/img/dongfeng1d.jpg', '9.50', '15.40', '2014-08-01 00:00:00', '6.5', '广州', '深圳', 'true ', '3厢', '2', '白色', '韩系', '手动', '2.2', '国三', 'true ', 'true ', 'project/src/img/dongfeng1a.jpg,project/src/img/dongfeng1b.jpg,project/src/img/dongfeng1c.jpg,project/src/img/dongfeng1d.jpg');
INSERT INTO `cars` VALUES ('21', '8', '东风小康东风风光S560 2018款 1.8L CVT尊贵型', '东风', 'project/src/img/dongfeng3.jpg,project/src/img/dongfeng1a.jpg,project/src/img/dongfeng1b.jpg,project/src/img/dongfeng1c.jpg,project/src/img/dongfeng1d.jpg', '8.80', '9.80', '2015-08-01 00:00:00', '26', '东莞', '佛山', 'false ', '2厢', '3', '白色', '日产', '自动', '2.4', '国四', 'false ', 'true ', 'project/src/img/dongfeng1a.jpg,project/src/img/dongfeng1b.jpg,project/src/img/dongfeng1c.jpg,project/src/img/dongfeng1d.jpg');
INSERT INTO `cars` VALUES ('58', '30', '众泰Z700 2016款 1.8T DCT尊贵型', '众泰', 'project/src/img/zt2.jpg,project/src/img/zt2a.jpg,project/src/img/zt2b.jpg,project/src/img/zt2c.jpg,project/src/img/zt2d.jpg', '10.10', '15.10', '2016-05-01 00:00:00', '8.2', '广州', '广州', 'true ', '3厢', '1', '黑色', '国产', '自动', '2', '国三', 'true ', 'fslse', 'project/src/img/zt2a.jpg,project/src/img/zt2b.jpg,project/src/img/zt2c.jpg,project/src/img/zt2d.jpg');
INSERT INTO `cars` VALUES ('57', '30', '众泰T700 2017款 1.8T 双离合尊享型', '众泰', 'project/src/img/zt1.jpg,project/src/img/zt1a.jpg,project/src/img/zt1b.jpg,project/src/img/zt1c.jpg,project/src/img/zt1d.jpg', '12.50', '14.10', '2016-05-01 00:00:00', '2.6', '东莞', '东莞', 'false ', '2厢', '2', '白色', '国产', '自动', '2.1', '国三', 'true ', 'true ', 'project/src/img/zt1a.jpg,project/src/img/zt1b.jpg,project/src/img/zt1c.jpg,project/src/img/zt1d.jpg');
INSERT INTO `cars` VALUES ('26', '9', '福特探险者 2016款 2.3T汽油 自动档7座 美规版', '福特', 'project/src/img/fute4.jpg,project/src/img/fute1a.jpg,project/src/img/fute1b.jpg,project/src/img/fute1c.jpg,project/src/img/fute1d.jpg', '40.00', '60.00', '2015-04-01 00:00:00', '10.5', '深圳', '东莞', 'true ', '2厢', '1', '黑色', '国产', '自动', '1.8', '国四', 'false ', 'false ', 'project/src/img/fute1a.jpg,project/src/img/fute1b.jpg,project/src/img/fute1c.jpg,project/src/img/fute1d.jpg');
INSERT INTO `cars` VALUES ('27', '10', '广汽吉奥星朗 2014款 1.5L 豪华型', '广汽', 'project/src/img/guangqi1.jpg,project/src/img/guangqi1.jpg,project/src/img/guangqi1.jpg,project/src/img/guangqi1.jpg,project/src/img/guangqi1.jpg', '3.50', '6.50', '2014-07-01 00:00:00', '22', '深圳', '深圳', 'true ', '2厢', '3', '黑色', '日系', '自动', '2', '国五', 'true ', 'true ', 'jpg,project/src/img/guangqi1.jpg,project/src/img/guangqi1.jpg,project/src/img/guangqi1.jpg,project/src/img/guangqi1.jpg');
INSERT INTO `cars` VALUES ('28', '11', '哈弗H1 2015款 1.5L AMT豪华型', '哈弗', 'project/src/img/hafu1.jpg,project/src/img/hafu1a.jpg,project/src/img/hafu1b.jpg,project/src/img/hafu1c.jpg,project/src/img/hafu1d.jpg', '5.00', '8.50', '2016-08-01 00:00:00', '19.28', '佛山', '深圳', 'true ', '3厢', '3', '白色', '日系', '自动', '2', '国五', 'true ', 'false ', 'project/src/img/hafu1a.jpg,project/src/img/hafu1b.jpg,project/src/img/hafu1c.jpg,project/src/img/hafu1d.jpg');
INSERT INTO `cars` VALUES ('29', '11', '哈弗H5 2012款 智尊版 2.0L 两驱导航型', '哈弗', 'project/src/img/hafu2.jpg,project/src/img/hafu1a.jpg,project/src/img/hafu1b.jpg,project/src/img/hafu1c.jpg,project/src/img/hafu1d.jpg', '5.00', '10.70', '2015-08-01 00:00:00', '13.7', '佛山', '佛山', 'false ', '2厢', '2', '黑色', '法系', '手动', '2.2', '国四', 'false ', 'false ', 'project/src/img/hafu1a.jpg,project/src/img/hafu1b.jpg,project/src/img/hafu1c.jpg,project/src/img/hafu1d.jpg');
INSERT INTO `cars` VALUES ('30', '12', '吉利博越 2016款 1.8TD 自动智慧型', '吉利', 'project/src/img/jili1.jpg,project/src/img/baoma1a.jpg,project/src/img/baoma1b.jpg,project/src/img/baoma1c.jpg,project/src/img/baoma1d.jpg', '11.40', '15.20', '2014-09-01 00:00:00', '9.5', '佛山', '佛山', 'false ', '2厢', '4', '白色', '日系', '自动', '1.8', '国三', 'true ', 'true ', 'project/src/img/baoma1a.jpg,project/src/img/baoma1b.jpg,project/src/img/baoma1c.jpg,project/src/img/baoma1d.jpg');
INSERT INTO `cars` VALUES ('31', '13', '江淮瑞风M5 2016款 2.0T 汽油自动公务版', '江淮', 'project/src/img/jianghuai1.jpg,project/src/img/baoma1a.jpg,project/src/img/baoma1b.jpg,project/src/img/baoma1c.jpg,project/src/img/baoma1d.jpg', '11.60', '17.60', '2015-10-01 00:00:00', '5.6', '佛山', '佛山', 'false ', '3厢', '2', '黑色', '德系', '自动', '1.6', '国四', 'false ', 'true ', 'project/src/img/baoma1a.jpg,project/src/img/baoma1b.jpg,project/src/img/baoma1c.jpg,project/src/img/baoma1d.jpg');
INSERT INTO `cars` VALUES ('32', '14', 'Jeep指南者 2012款 2.4L 四驱豪华版(进口)', 'jeep', 'project/src/img/jeep.jpg,project/src/img/baoma1a.jpg,project/src/img/baoma1b.jpg,project/src/img/baoma1c.jpg,project/src/img/baoma1d.jpg', '13.70', '28.90', '2014-06-01 00:00:00', '22.3', '东莞', '东莞', 'true ', '3厢', '2', '白色', '国产', '自动', '1.8', '国五', 'true ', 'false ', 'project/src/img/baoma1a.jpg,project/src/img/baoma1b.jpg,project/src/img/baoma1c.jpg,project/src/img/baoma1d.jpg');
INSERT INTO `cars` VALUES ('33', '15', '凯迪拉克赛威SLS 2011款 2.0T 豪华型', '凯迪拉克', 'project/src/img/kdlk1.jpg,project/src/img/baoma1a.jpg,project/src/img/baoma1b.jpg,project/src/img/baoma1c.jpg,project/src/img/baoma1d.jpg', '12.80', '47.60', '2015-05-01 00:00:00', '31.5', '东莞', '东莞', 'true ', '2厢', '3', '香槟色', '韩系', '手动', '1.6', '国五', 'false ', 'true ', 'project/src/img/baoma1a.jpg,project/src/img/baoma1b.jpg,project/src/img/baoma1c.jpg,project/src/img/baoma1d.jpg');
INSERT INTO `cars` VALUES ('34', '16', '铃木 吉姆尼 2015款 1.3 AT JLX(进口)', '铃木', 'project/src/img/lingmu1.jpg,project/src/img/baoma1a.jpg,project/src/img/baoma1b.jpg,project/src/img/baoma1c.jpg,project/src/img/baoma1d.jpg', '13.00', '16.50', '2015-07-01 00:00:00', '14.7', '广州', '广州', 'false ', '3厢', '3', '红色', '日产', '自动', '1.7', '国四', 'true ', 'false ', 'project/src/img/baoma1a.jpg,project/src/img/baoma1b.jpg,project/src/img/baoma1c.jpg,project/src/img/baoma1d.jpg');
INSERT INTO `cars` VALUES ('35', '17', '雷克萨斯IS 2015款 200t 领先版', '雷克萨斯', 'project/src/img/lkss1.jpg,project/src/img/baoma1a.jpg,project/src/img/baoma1b.jpg,project/src/img/baoma1c.jpg,project/src/img/baoma1d.jpg', '29.00', '40.70', '2014-08-01 00:00:00', '84.6', '广州', '佛山', 'true ', '3厢', '3', '白色', '日产', '自动', '2.2', '国三', 'false ', 'true ', 'project/src/img/baoma1a.jpg,project/src/img/baoma1b.jpg,project/src/img/baoma1c.jpg,project/src/img/baoma1d.jpg');
INSERT INTO `cars` VALUES ('36', '18', '蒙迪欧 2013款 2.0L GTDi200时尚型', '蒙迪欧', 'project/src/img/mengdiou1.jpg,project/src/img/baoma1a.jpg,project/src/img/baoma1b.jpg,project/src/img/baoma1c.jpg,project/src/img/baoma1d.jpg', '13.00', '22.00', '2015-08-01 00:00:00', '30', '广州', '东莞', 'false ', '2厢', '3', '黑色', '德系', '自动', '2.4', '国四', 'true ', 'false ', 'project/src/img/baoma1a.jpg,project/src/img/baoma1b.jpg,project/src/img/baoma1c.jpg,project/src/img/baoma1d.jpg');
INSERT INTO `cars` VALUES ('37', '19', '纳智捷优6 SUV 2015款 2.0T 智尊型', '纳智捷', 'project/src/img/nzjy1.jpg,project/src/img/baoma1a.jpg,project/src/img/baoma1b.jpg,project/src/img/baoma1c.jpg,project/src/img/baoma1d.jpg', '9.70', '15.90', '2016-05-01 00:00:00', '6.6', '佛山', '东莞', 'true ', '3厢', '2', '黑色', '德系', '手动', '2', '国五', 'false ', 'true ', 'project/src/img/baoma1a.jpg,project/src/img/baoma1b.jpg,project/src/img/baoma1c.jpg,project/src/img/baoma1d.jpg');
INSERT INTO `cars` VALUES ('38', '19', '纳智捷大7 SUV 2011款 2.2T 四驱智尊型', '纳智捷', 'project/src/img/nzjy2.jpg,project/src/img/baoma1a.jpg,project/src/img/baoma1b.jpg,project/src/img/baoma1c.jpg,project/src/img/baoma1d.jpg', '7.60', '26.00', '2014-08-01 00:00:00', '15.4', '东莞', '广州', 'false ', '2厢', '1', '白色', '法系', '手动', '1.8', '国五', 'true ', 'false ', 'project/src/img/baoma1a.jpg,project/src/img/baoma1b.jpg,project/src/img/baoma1c.jpg,project/src/img/baoma1d.jpg');
INSERT INTO `cars` VALUES ('39', '20', '起亚福瑞迪 2011款 1.6L MT GL', '起亚', 'project/src/img/qiya1.jpg,project/src/img/qiya1a.jpg,project/src/img/qiya1b.jpg,project/src/img/qiya1c.jpg,project/src/img/qiya1d.jpg', '3.40', '10.70', '2013-08-01 00:00:00', '9.8', '佛山', '广州', 'true ', '2厢', '2', '红色', '国产', '自动', '1.8', '国四', 'true ', 'true ', 'project/src/img/qiya1a.jpg,project/src/img/qiya1b.jpg,project/src/img/qiya1c.jpg,project/src/img/qiya1d.jpg');
INSERT INTO `cars` VALUES ('40', '21', '日产奇骏 2014款 2.5L CVT豪华版 4WD', '荣威', 'project/src/img/qijun1.jpg,project/src/img/qijun1a.jpg,project/src/img/qijun1b.jpg,project/src/img/qijun1c.jpg,project/src/img/qijun1d.jpg', '18.00', '25.90', '2017-01-01 00:00:00', '10.8', '佛山', '广州', 'false ', '3厢', '3', '白色', '日系', '手动', '1.6', '国三', 'true ', 'false ', 'project/src/img/qijun1a.jpg,project/src/img/qijun1b.jpg,project/src/img/qijun1c.jpg,project/src/img/qijun1d.jpg');
INSERT INTO `cars` VALUES ('41', '22', '荣威550 2010款 550 1.8L 手动世博风尚版', '日产', 'project/src/img/rongwei1.jpg,project/src/img/rongwei1a.jpg,project/src/img/rongwei1b.jpg,project/src/img/rongwei1c.jpg,project/src/img/rongwei1d.jpg', '3.40', '13.90', '2015-04-01 00:00:00', '34.7', '佛山', '东莞', 'true ', '3厢', '2', '红色', '日系', '自动', '1.8', '国四', 'false ', 'true ', 'project/src/img/rongwei1a.jpg,project/src/img/rongwei1b.jpg,project/src/img/rongwei1c.jpg,project/src/img/rongwei1d.jpg');
INSERT INTO `cars` VALUES ('42', '21', '日产奇骏 2014款 2.5L CVT豪华版 4WD', '日产', 'project/src/img/richan1.jpg,project/src/img/richan1a.jpg,project/src/img/richan1b.jpg,project/src/img/richan1c.jpg,project/src/img/richan1d.jpg', '18.00', '25.90', '2014-07-01 00:00:00', '46.7', '广州', '广州', 'false ', '3厢', '2', '香槟色', '法系', '手动', '2', '国五', 'false ', 'true ', 'project/src/img/richan1a.jpg,project/src/img/richan1b.jpg,project/src/img/richan1c.jpg,project/src/img/richan1d.jpg');
INSERT INTO `cars` VALUES ('43', '21', '日产逍客 2011款 2.0XV 雷 CVT 2WD', '日产', 'project/src/img/richan2.jpg,project/src/img/richan2a.jpg,project/src/img/richan2b.jpg,project/src/img/richan2c.jpg,project/src/img/richan2d.jpg', '6.80', '10.60', '2016-08-01 00:00:00', '27.1', '广州', '东莞', 'true ', '2厢', '4', '黑色', '日系', '自动', '2', '国五', 'false ', 'true ', 'project/src/img/richan2a.jpg,project/src/img/richan2b.jpg,project/src/img/richan2c.jpg,project/src/img/richan2d.jpg');
INSERT INTO `cars` VALUES ('44', '21', '日产骐达 2008款 1.6L 自动智能型', '日产', 'project/src/img/richan3.jpg,project/src/img/richan3a.jpg,project/src/img/richan3b.jpg,project/src/img/richan3c.jpg,project/src/img/richan3d.jpg', '4.50', '13.80', '2015-08-01 00:00:00', '60', '广州', '佛山', 'true ', '2厢', '2', '黑色', '德系', '手动', '2.2', '国四', 'true ', 'false ', 'project/src/img/richan3a.jpg,project/src/img/richan3b.jpg,project/src/img/richan3c.jpg,project/src/img/richan3d.jpg');
INSERT INTO `cars` VALUES ('45', '24', '斯巴鲁森林人 2013款 2.5i 自动豪华版', '斯巴鲁', 'project/src/img/sbl1.jpg,project/src/img/sbl1a.jpg,project/src/img/sbl1b.jpg,project/src/img/sblc.jpg,project/src/img/sbld.jpg', '14.00', '34.00', '2014-09-01 00:00:00', '6.5', '广州', '深圳', 'true ', '3厢', '1', '白色', '国产', '自动', '1.8', '国三', 'true ', 'false ', 'project/src/img/sbl1a.jpg,project/src/img/sbl1b.jpg,project/src/img/sblc.jpg,project/src/img/sbld.jpg');
INSERT INTO `cars` VALUES ('46', '24', '斯巴鲁XV 2014款 2.0i 精英版', '斯巴鲁', 'project/src/img/sbl2.jpg,project/src/img/sbl2a.jpg,project/src/img/sbl2b.jpg,project/src/img/sbl2c.jpg,project/src/img/sbl2d.jpg', '13.80', '23.90', '2015-10-01 00:00:00', '10.5', '东莞', '深圳', 'false ', '3厢', '3', '白色', '韩系', '自动', '1.6', '国四', 'true ', 'false ', 'project/src/img/sbl2a.jpg,project/src/img/sbl2b.jpg,project/src/img/sbl2c.jpg,project/src/img/sbl2d.jpg');
INSERT INTO `cars` VALUES ('47', '24', '斯巴鲁森林人 2011款 2.5XS 自动豪华版', '斯巴鲁', 'project/src/img/sbl3.jpg,project/src/img/sbl3a.jpg,project/src/img/sbl3b.jpg,project/src/img/sbl3c.jpg,project/src/img/sbl3d.jpg', '12.30', '29.50', '2014-06-01 00:00:00', '22', '东莞', '深圳', 'false ', '2厢', '3', '黑色', '日产', '自动', '1.8', '国五', 'false ', 'true ', 'project/src/img/sbl3a.jpg,project/src/img/sbl3b.jpg,project/src/img/sbl3c.jpg,project/src/img/sbl3d.jpg');
INSERT INTO `cars` VALUES ('48', '25', '沃尔沃S60 2013款 T5 舒适版(进口) ', '沃尔沃', 'project/src/img/vol1.jpg,project/src/img/vol1a.jpg,project/src/img/vol1b.jpg,project/src/img/vol1c.jpg,project/src/img/vol1d.jpg', '14.70', '35.00', '2015-05-01 00:00:00', '19.28', '佛山', '佛山', 'false ', '3厢', '2', '黑色', '日产', '自动', '1.6', '国五', 'true ', 'true ', 'project/src/img/vol1a.jpg,project/src/img/vol1b.jpg,project/src/img/vol1c.jpg,project/src/img/vol1d.jpg');
INSERT INTO `cars` VALUES ('49', '26', '现代全新胜达 2013款 2.4L 自动四驱智能型', '现代', 'project/src/img/xiandai1.jpg,project/src/img/xiandai1a.jpg,project/src/img/xiandai1b.jpg,project/src/img/xiandai1c.jpg,project/src/img/xiandai1d.jpg', '13.80', '28.20', '2015-07-01 00:00:00', '13.7', '广州', '佛山', 'true ', '3厢', '4', '黑色', '德系', '手动', '1.7', '国四', 'false ', 'false ', 'project/src/img/xiandai1a.jpg,project/src/img/xiandai1b.jpg,project/src/img/xiandai1c.jpg,project/src/img/xiandai1d.jpg');
INSERT INTO `cars` VALUES ('50', '26', '现代ix35 2013款 2.4L 自动四驱领先型GLX 国V', '现代', 'project/src/img/xiandai2.jpg,project/src/img/xiandai2a.jpg,project/src/img/xiandai2b.jpg,project/src/img/xiandai2c.jpg,project/src/img/xiandai2d.jpg', '12.40', '26.40', '2014-08-01 00:00:00', '9.5', '深圳', '佛山', 'true ', '2厢', '2', '白色', '德系', '自动', '2.2', '国三', 'true ', 'true ', 'project/src/img/xiandai2a.jpg,project/src/img/xiandai2b.jpg,project/src/img/xiandai2c.jpg,project/src/img/xiandai2d.jpg');
INSERT INTO `cars` VALUES ('51', '26', '现代领动 2016款 1.6L 自动智炫·精英型', '现代', 'project/src/img/xiandai3.jpg,project/src/img/xiandai3a.jpg,project/src/img/xiandai3b.jpg,project/src/img/xiandai3c.jpg,project/src/img/xiandaid.jpg', '8.30', '13.00', '2015-08-01 00:00:00', '5.6', '广州', '佛山', 'false ', '3厢', '2', '黑色', '法系', '自动', '2.4', '国四', 'false ', 'false ', 'project/src/img/xiandai3a.jpg,project/src/img/xiandai3b.jpg,project/src/img/xiandai3c.jpg,project/src/img/xiandaid.jpg');
INSERT INTO `cars` VALUES ('52', '27', '雪佛兰科沃兹 2016款 1.5L 自动欣悦版', '雪弗兰', 'project/src/img/xfl1.jpg,project/src/img/xfl1a.jpg,project/src/img/xfl1b.jpg,project/src/img/xfl1c.jpg,project/src/img/xfl1d.jpg', '7.40', '10.80', '2016-05-01 00:00:00', '22.3', '深圳', '东莞', 'true ', '2厢', '3', '黑色', '国产', '自动', '2', '国五', 'true ', 'false ', 'project/src/img/xfl1a.jpg,project/src/img/xfl1b.jpg,project/src/img/xfl1c.jpg,project/src/img/xfl1d.jpg');
INSERT INTO `cars` VALUES ('53', '27', '雪佛兰迈锐宝XL 2017款 2.5L 自动锐尊版', '雪弗兰', 'project/src/img/xfl2.jpg,project/src/img/xfl2a.jpg,project/src/img/xfl2b.jpg,project/src/img/xfl2c.jpg,project/src/img/xfl2d.jpg', '17.00', '27.10', '2014-08-01 00:00:00', '31.5', '佛山', '东莞', 'false ', '2厢', '3', '白色', '日系', '手动', '1.8', '国三', 'false ', 'false ', 'project/src/img/xfl2a.jpg,project/src/img/xfl2b.jpg,project/src/img/xfl2c.jpg,project/src/img/xfl2d.jpg');
INSERT INTO `cars` VALUES ('54', '27', '雪佛兰创酷 2014款 1.4T 自动两驱舒适型', '雪弗兰', 'project/src/img/xfl3.jpg,project/src/img/xfl3a.jpg,project/src/img/xfl3b.jpg,project/src/img/xfl3c.jpg,project/src/img/xfl3d.jpg', '7.80', '13.20', '2013-08-01 00:00:00', '14.7', '广州', '广州', 'true ', '3厢', '3', '黑色', '日系', '自动', '1.8', '国四', 'true ', 'true ', 'project/src/img/xfl3a.jpg,project/src/img/xfl3b.jpg,project/src/img/xfl3c.jpg,project/src/img/xfl3d.jpg');
INSERT INTO `cars` VALUES ('55', '28', '雪铁龙世嘉 2011款 三厢 1.6L 手动时尚型', '雪弗兰', 'project/src/img/xtl1.jpg,project/src/img/xtl1a.jpg,project/src/img/xtlb.jpg,project/src/img/xtlc.jpg,project/src/img/xtld.jpg', '3.20', '11.80', '2017-01-01 00:00:00', '84.6', '佛山', '广州', 'false ', '3厢', '3', '白色', '法系', '自动', '1.6', '国五', 'false ', 'true ', 'project/src/img/xtl1a.jpg,project/src/img/xtlb.jpg,project/src/img/xtlc.jpg,project/src/img/xtld.jpg');

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `order_id` int(13) unsigned NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) DEFAULT NULL,
  `car_name` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `mileage` varchar(255) DEFAULT NULL,
  `license_time` varchar(255) DEFAULT NULL,
  `oprice` decimal(10,2) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES ('1', '17722864839', '吉利博越 2016款 1.8TD 自动智慧型', 'project/src/img/jili1.jpg', '120', '2018-02-08 12:02:46', '5.20', '0');
INSERT INTO `orders` VALUES ('2', '18613748918', '雪佛兰科沃兹 2016款 1.5L 自动欣悦版', 'project/src/img/xfl1.jpg', '2340', '2018-02-08 12:02:48', '8.70', '0');
INSERT INTO `orders` VALUES ('3', '13877930273', '玛莎拉蒂', 'project/src/img/xfl1.jpg', '12', '2017-11-09 12:01:57', '100.00', '0');
INSERT INTO `orders` VALUES ('9', '13877930273', '东风小康东风风光580 2016款 改款 1.5T CVT豪华型', 'project/src/img/dongfeng4.jpg,project/src/img/dongfeng1a.jpg,project/src/img/dongfeng1b.jpg,project/src/img/dongfeng1c.jpg,project/src/img/dongfeng1d.jpg', '29', '2018-01-17 09:58:39', '9.50', '0');
INSERT INTO `orders` VALUES ('12', '13677930987', '福特锐界 2016款 EcoBoost 245 四驱豪锐型 7座', 'project/src/img/fute1.jpg,project/src/img/fute1a.jpg,project/src/img/fute1b.jpg,project/src/img/fute1c.jpg,project/src/img/fute1d.jpg', '21', '2018-02-09 00:00:00', '25.00', '0');
INSERT INTO `orders` VALUES ('11', '13677930987', '奥迪TT 2011款 TT Coupe 2.0TFSI quattro(进口)', 'project/src/img/aodi4.jpg,project/src/img/aodi4a.jpg,project/src/img/aodi4b.jpg,project/src/img/aodi4c.jpg,project/src/img/aodi4d.jpg', '13.7', '2018-02-09 00:00:00', '29.00', '0');
INSERT INTO `orders` VALUES ('8', '13877930273', '东风小康东风风光580 2016款 改款 1.5T CVT豪华型', 'project/src/img/dongfeng4.jpg,project/src/img/dongfeng1a.jpg,project/src/img/dongfeng1b.jpg,project/src/img/dongfeng1c.jpg,project/src/img/dongfeng1d.jpg', '29', '2018-02-04 09:58:51', '9.50', '0');
INSERT INTO `orders` VALUES ('14', '13877930987', '奥迪Q5 2012款 2.0TFSI 技术型', 'project/src/img/aodi3.jpg,project/src/img/aodi3a.jpg,project/src/img/aodi3b.jpg,project/src/img/aodi3c.jpg,project/src/img/aodi3d.jpg', '19.28', '2018-02-09 00:00:00', '26.00', '0');
INSERT INTO `orders` VALUES ('15', '13877930273', '奥迪Q5 2012款 2.0TFSI 技术型', 'project/src/img/aodi2.jpg,project/src/img/aodi2a.jpg,project/src/img/aodi2b.jpg,project/src/img/aodi2c.jpg,project/src/img/aodi2d.jpg', '22', '2018-02-09 00:00:00', '30.00', '0');
INSERT INTO `orders` VALUES ('16', '13877930987', '雷克萨斯IS 2015款 200t 领先版', 'project/src/img/lkss1.jpg,project/src/img/baoma1a.jpg,project/src/img/baoma1b.jpg,project/src/img/baoma1c.jpg,project/src/img/baoma1d.jpg', '84.6', '2018-02-09 00:00:00', '29.00', '0');
INSERT INTO `orders` VALUES ('17', '13877930987', '奥迪TT 2011款 TT Coupe 2.0TFSI quattro(进口)', 'project/src/img/aodi4.jpg,project/src/img/aodi4a.jpg,project/src/img/aodi4b.jpg,project/src/img/aodi4c.jpg,project/src/img/aodi4d.jpg', '13.7', '2018-02-09 00:00:00', '29.00', '0');
INSERT INTO `orders` VALUES ('18', '13788909908', '别克GL8 2013款 2.4L CT豪华商务舒适版', 'project/src/img/bieke2.jpg,project/src/img/bieke2a.jpg,project/src/img/bieke2b.jpg,project/src/img/bieke2c.jpg,project/src/img/bieke2d.jpg', '10.8', '2018-02-09 00:00:00', '16.10', '0');
INSERT INTO `orders` VALUES ('19', '13898760987', '奥迪Q5 2012款 2.0TFSI 技术型', 'project/src/img/aodi2.jpg,project/src/img/aodi2a.jpg,project/src/img/aodi2b.jpg,project/src/img/aodi2c.jpg,project/src/img/aodi2d.jpg', '22', '2018-02-09 00:00:00', '30.00', '0');
INSERT INTO `orders` VALUES ('20', '13877930273', '福特野马 2015款 2.3T 50周年纪念版(进口)', 'project/src/img/fute2.jpg,project/src/img/fute1a.jpg,project/project/src/img/fute1b.jpg,project/src/img/fute1c.jpg,project/src/img/fute1d.jpg', '23', '2018-02-09 00:00:00', '32.80', '0');
INSERT INTO `orders` VALUES ('21', '13877930273', '福特锐界 2015款 2.0T GTDi 两驱精锐型 ', 'project/src/img/fute3.jpg,project/src/img/fute1a.jpg,project/src/img/fute1b.jpg,project/src/img/fute1c.jpg,project/src/img/fute1d.jpg', '22', '2018-02-09 00:00:00', '19.50', '0');
INSERT INTO `orders` VALUES ('22', '13898760987', '奥迪TT 2011款 TT Coupe 2.0TFSI quattro(进口)', 'project/src/img/aodi4.jpg,project/src/img/aodi4a.jpg,project/src/img/aodi4b.jpg,project/src/img/aodi4c.jpg,project/src/img/aodi4d.jpg', '13.7', '2018-02-09 00:00:00', '29.00', '0');
INSERT INTO `orders` VALUES ('23', '13898760987', '奥迪Q5 2012款 2.0TFSI 技术型', 'project/src/img/aodi3.jpg,project/src/img/aodi3a.jpg,project/src/img/aodi3b.jpg,project/src/img/aodi3c.jpg,project/src/img/aodi3d.jpg', '19.28', '2018-02-09 00:00:00', '26.00', '0');
INSERT INTO `orders` VALUES ('24', '13898760987', '奥迪Q5 2012款 2.0TFSI 技术型', 'project/src/img/aodi3.jpg,project/src/img/aodi3a.jpg,project/src/img/aodi3b.jpg,project/src/img/aodi3c.jpg,project/src/img/aodi3d.jpg', '19.28', '2018-2-9', '26.00', '0');
INSERT INTO `orders` VALUES ('25', '13898760987', '奥迪Q5 2012款 2.0TFSI 技术型', 'project/src/img/aodi3.jpg,project/src/img/aodi3a.jpg,project/src/img/aodi3b.jpg,project/src/img/aodi3c.jpg,project/src/img/aodi3d.jpg', '19.28', '2018-2-9', '26.00', '0');
INSERT INTO `orders` VALUES ('26', '13898760987', '奥迪TT 2011款 TT Coupe 2.0TFSI quattro(进口)', 'project/src/img/aodi4.jpg,project/src/img/aodi4a.jpg,project/src/img/aodi4b.jpg,project/src/img/aodi4c.jpg,project/src/img/aodi4d.jpg', '13.7', '2018-2-9', '29.00', '0');
INSERT INTO `orders` VALUES ('27', '13898760987', '奥迪TT 2011款 TT Coupe 2.0TFSI quattro(进口)', 'project/src/img/aodi4.jpg,project/src/img/aodi4a.jpg,project/src/img/aodi4b.jpg,project/src/img/aodi4c.jpg,project/src/img/aodi4d.jpg', '13.7', '2018-2-9', '29.00', '0');
INSERT INTO `orders` VALUES ('40', '13789079876', '宝马X1 2015款 sDrive18i 领先晋级版', 'project/src/img/baoma1.jpg,project/src/img/baoma1a.jpg,project/src/img/baoma1b.jpg,project/src/img/baoma1c.jpg,project/src/img/baoma1d.jpg', '9.5', '2018-2-9', '21.00', '0');
INSERT INTO `orders` VALUES ('39', '13898760987', '奥迪Q5 2012款 2.0TFSI 舒适型', 'project/src/img/aodi1.jpg,project/src/img/aodi1a.jpg,project/src/img/aodi1b.jpg,project/src/img/aodi1c.jpg,project/src/img/aodi1d.jpg', '10.5', '2018-2-9', '21.50', '0');
INSERT INTO `orders` VALUES ('32', '13898760987', '宝马X1 2015款 sDrive18i 领先晋级版', 'project/src/img/baoma1.jpg,project/src/img/baoma1a.jpg,project/src/img/baoma1b.jpg,project/src/img/baoma1c.jpg,project/src/img/baoma1d.jpg', '9.5', '2018-2-9', '21.00', '0');
INSERT INTO `orders` VALUES ('33', '13898760987', '福特锐界 2016款 EcoBoost 245 四驱豪锐型 7座', 'project/src/img/fute1.jpg,project/src/img/fute1a.jpg,project/src/img/fute1b.jpg,project/src/img/fute1c.jpg,project/src/img/fute1d.jpg', '21', '2018-2-9', '25.00', '0');
INSERT INTO `orders` VALUES ('34', '13898760987', '长安逸动 2015款 1.6L 自动豪华型', 'project/src/img/changan2.jpg,project/src/img/changan2a.jpg,project/src/img/changan2b.jpg,project/src/img/changan2c.jpg,project/src/img/changan2d.jpg', '15.4', '2018-2-9', '9.60', '0');
INSERT INTO `orders` VALUES ('35', '17722864835', '奥迪Q5 2012款 2.0TFSI 技术型', 'project/src/img/aodi3.jpg,project/src/img/aodi3a.jpg,project/src/img/aodi3b.jpg,project/src/img/aodi3c.jpg,project/src/img/aodi3d.jpg', '19.28', '2018-2-9', '26.00', '0');
INSERT INTO `orders` VALUES ('36', '17722864835', '奥迪Q5 2012款 2.0TFSI 技术型', 'project/src/img/aodi3.jpg,project/src/img/aodi3a.jpg,project/src/img/aodi3b.jpg,project/src/img/aodi3c.jpg,project/src/img/aodi3d.jpg', '19.28', '2018-2-9', '26.00', '0');
INSERT INTO `orders` VALUES ('37', '17722864835', '奥迪Q5 2012款 2.0TFSI 舒适型', 'project/src/img/aodi1.jpg,project/src/img/aodi1a.jpg,project/src/img/aodi1b.jpg,project/src/img/aodi1c.jpg,project/src/img/aodi1d.jpg', '10.5', '2018-2-9', '21.50', '0');
INSERT INTO `orders` VALUES ('38', '17722864835', '宝马3系 2013款 320Li 豪华设计套装', 'project/src/img/baoma3.jpg,project/src/img/baoma3a.jpg,project/src/img/baoma3b.jpg,project/src/img/baoma3c.jpg,project/src/img/baoma3d.jpg', '22.3', '2018-2-9', '22.00', '0');

-- ----------------------------
-- Table structure for sellcar
-- ----------------------------
DROP TABLE IF EXISTS `sellcar`;
CREATE TABLE `sellcar` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `brand` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `license_shijian` varchar(255) DEFAULT NULL,
  `mileage` varchar(255) DEFAULT NULL,
  `license_area` varchar(255) DEFAULT NULL,
  `car_status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sellcar
-- ----------------------------
INSERT INTO `sellcar` VALUES ('33', '奔驰', 'project/src/img/aodi1.jpg', '2018-12-10', '12', '广州', '车辆很少损坏');
INSERT INTO `sellcar` VALUES ('34', '', 'project/src/img/aodi1.jpg', '', '', '', '');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `reg_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'zzz', '1234', '2018-02-07 17:18:40');
INSERT INTO `user` VALUES ('2', 'aaaaa', '123', '2018-02-07 20:33:21');
INSERT INTO `user` VALUES ('3', 'zhoutao888', '123321', '2018-02-07 20:37:03');
INSERT INTO `user` VALUES ('4', 'yangzong', '111222', '2018-02-07 20:38:48');
INSERT INTO `user` VALUES ('5', 'xiaodui', '112233', '2018-02-07 20:39:36');
INSERT INTO `user` VALUES ('6', 'zuzhangdashen', '43242', '2018-02-07 20:40:28');
INSERT INTO `user` VALUES ('10', 'admin', '123456', '2018-02-07 22:04:22');
INSERT INTO `user` VALUES ('9', 'jiaodashen', '3213213', '2018-02-07 21:54:33');
INSERT INTO `user` VALUES ('11', 'zhoutao111', '123456', '2018-02-08 09:25:59');
INSERT INTO `user` VALUES ('12', '123', '123', '2018-02-08 09:27:15');
INSERT INTO `user` VALUES ('13', 'xiaodashena', '111', '2018-02-09 14:24:49');
INSERT INTO `user` VALUES ('14', '123', '123', '2018-02-09 14:36:18');
INSERT INTO `user` VALUES ('15', '123456', '123', '2018-02-09 14:36:29');
INSERT INTO `user` VALUES ('16', '11', '11', '2018-02-09 14:36:48');
INSERT INTO `user` VALUES ('17', 'ASASAS', '123', '2018-02-09 14:37:30');

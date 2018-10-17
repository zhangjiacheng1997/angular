"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
app.use(body_parser_1.default.json());
var Course = /** @class */ (function () {
    function Course(id, courseName, images, text, task, person) {
        this.id = id;
        this.courseName = courseName;
        this.images = images;
        this.text = text;
        this.task = task;
        this.person = person;
    }
    return Course;
}());
var Job = /** @class */ (function () {
    function Job(name, own, num) {
        this.name = name;
        this.own = own;
        this.num = num;
    }
    return Job;
}());
var Text = /** @class */ (function () {
    function Text(name, pname, photo, image, text) {
        this.name = name;
        this.pname = pname;
        this.photo = photo;
        this.image = image;
        this.text = text;
    }
    return Text;
}());
var people = [
    "呼保义-宋江", "玉麒麟-卢俊义", "智多星-吴用", "入云龙-公孙胜", "大刀-关胜", "豹子头-林冲",
    "霹雳火-秦明", "双鞭-呼延灼", "小李广-花荣", "小旋风-柴进", "扑天雕-李应",
];
var li = [
    "#2015级程序设计基...#", "#2015级面向对象程...#", "#cms与模板制作#", "#数据结构#", "#数据库原理#", "#数据库系统概论#",
];
var text1 = ["（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写",
    "JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来",
    "一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方",
    "1. 一元多项式的表示和相加 在数学上，一个一元多项式\(P_{n}(x)\)可升序写成：\(P_{n}(x) = p_{0}+p_{1}x^1+p_{2}x^2+...++p_{n}x^n\)它由n+1个系数唯一确定。",
    "队列实现栈需要两个队列data，help，因为队列是先进先出，想要模拟栈的结构，每次取栈顶的元素也就相当于取队列中队尾的元素，要取data队列的队尾元"
];
var text = [
    new Text('WEB开发（二）——函数', '刘秀梅           2018-10-11 15:10', 'http://www.edu2act.cn/static/img/m.png', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg', text1[0]),
    new Text('类定义关键字详解', '张馨元           2018-10-10 13:12', 'http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg', text1[1]),
    new Text('一个Java文件可包含多个main方法', '杨伟彬           2018-9-21 11:18', 'http://usercontent.edu2act.cn/media/userheader/17-07-18/KbeV987Y2GWmTnUD76Jzan.jpg?imageView2/1/w/256/h/256', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg', text1[2]),
    new Text('数据结构——线性表的经典应用', '李建涛           2018-9-18 09:20', 'http://usercontent.edu2act.cn/media/userheader/18-03-11/H2v8Qhkq4DnS33dBbBYKMo.jpg?imageView2/1/w/256/h/256', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg', text1[3]),
    new Text('栈和队列之间的相互转化', '张馨元           2018-9-10 14:54', 'http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/ZVukV3kKu2r8b9ezbbc5VA.jpg', text1[4]),
];
var jobs01 = [
    new Job('任务二 -- js基础练习与应用', '2016级混合应用开发', 9.8),
    new Job('任务四 文件与拖放', '2016级HTML5与CSS3前端开发', 9.8),
    new Job('任务一 -- 组件交互与服务', '2016级混合应用开发', 9),
    new Job('任务三 Web存储', '2016级HTML5与CSS3前端开发', 10),
    new Job('任务二十一 关于查找和排序的作业', '2016级混合应用开发', 9.5),
    new Job('任务二 表单', '2016级HTML5与CSS3前端开发', 10),
];
var jobs02 = [
    new Job('任务一 HTML5标签及特性', ' 2016级HTML5与CSS3前端开发', 9.5),
    new Job('任务二十三', '2016级操作系统', 9),
    new Job('第六章综合练习题', '2016级操作系统', 10),
    new Job('第四章和第五章存储器管理综合练习题', '2016级操作系统', 9.5),
    new Job('任务十八（正则表达式练习）', ' JavaScript进阶（2016级H5方向基础课）', 9.8),
];
var touxiang = "https://avatars1.githubusercontent.com/u/25890626?s=460&v=4";
var courses = [
    new Course(1, '混合应用开发', 'http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg', "计算机导论课程讲授计算机运行大概过程、简单数值数据在计算机中的表示、计算机硬件的基本组成以及计算机软件的相关知识。", 10, 90),
    new Course(2, 'HTML5与CSS3', 'http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg', "本课程主要学习HTML5的新特性、CSS3的新特性以及前端开发框架Bootstrap。", 12, 90),
    new Course(3, 'JavaScript', 'http://usercontent.edu2act.cn/media/team/18-03-05/6niXYjHC5hvoAbWKUQCdPa.jpg', "本课程是为河北师大18级软件学院的新生准备的先修课训练营。", 11, 90),
    new Course(4, 'web系统测试', 'http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg', "该课程包含：测试基础知识复习和实操，探索式测试，敏捷测试，Web安全测试四部分。", 18, 90),
    new Course(5, '软件测试基础', 'http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg', "围绕软件测试基础知识包括基本概念、黑盒测试、白盒测试以及专题化测试等开展。", 4, 90),
    new Course(6, '信息素养实践', 'http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg', " 在计算机科学中，数据结构是一门研究非数值计算的程序设计问题中计算机的操作对象。", 10, 90),
    new Course(7, 'H5游戏开发', 'http://usercontent.edu2act.cn/media/team/18-03-05/BftwUw47KUSTFGrwepb7gd.png', "《H5动画与游戏开发》是计算机软件及相关专业在H5动画及游戏开发方面的专业课。", 18, 90),
    new Course(8, '软件过程', 'http://usercontent.edu2act.cn/media/team/18-05-31/GvVrSCw2H2XBgXjLdgTvmc.jpeg', "河北师大软件学院2016级测试方向基础课程。", 16, 90),
    new Course(9, '软件过程', 'http://usercontent.edu2act.cn/media/team/18-03-05/RLZ9pTwpocUfCYqRWvmACZ.jpg', "《JavaScript进阶》是计算机软件及相关专业在H5前端开发方向基础课。", 5, 90),
    new Course(10, '相思湖学院', 'http://usercontent.edu2act.cn/media/team/17-11-21/LPKB6oZNKu3GiMuC6DGdmA.png', "《JavaScript进阶》是计算机软件及相关专业在H5前端开发方向基础课。", 8, 90),
    new Course(11, '计算机导论', 'http://usercontent.edu2act.cn/media/team/17-10-19/25jkon9fLemyViTidcDHDW.jpg', "《JavaScript进阶》是计算机软件及相关专业在H5前端开发方向基础课。", 7, 90),
    new Course(12, ' SoftwareTesting', 'http://usercontent.edu2act.cn/media/team/17-09-15/FNYZkc7RjwRSy8aonG8AGo.jpg', "《JavaScript进阶》是计算机软件及相关专业在H5前端开发方向基础课。", 2, 90),
];
var courses02 = [
    new Course(1, 'Github 开源之旅', 'http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png', "计算机导论课程讲授计算机运行大概过程、简单数值数据在计算机中的表示、计算机硬件的基本组成以及计算机软件的相关知识。", 10, 90),
    new Course(2, 'CSS3基础', 'http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png', "本课程主要学习HTML5的新特性、CSS3的新特性以及前端开发框架Bootstrap。", 12, 90),
    new Course(3, 'HTML5基础', 'http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png', "本课程是为河北师大18级软件学院的新生准备的先修课训练营。", 11, 90),
    new Course(4, 'web系统测试', 'http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png', "该课程包含：测试基础知识复习和实操，探索式测试，敏捷测试，Web安全测试四部分。", 18, 90),
    new Course(5, '软件测试基础', 'http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png', "围绕软件测试基础知识包括基本概念、黑盒测试、白盒测试以及专题化测试等开展。", 4, 90),
    new Course(6, '信息素养实践', 'http://usercontent.edu2act.cn/media/cs/16-10-28/93BLumGUzRct9BRxKQgWnn.png', " 在计算机科学中，数据结构是一门研究非数值计算的程序设计问题中计算机的操作对象。", 10, 90),
    new Course(7, 'H5游戏开发', 'http://usercontent.edu2act.cn/media/team/18-03-05/BftwUw47KUSTFGrwepb7gd.png', "《H5动画与游戏开发》是计算机软件及相关专业在H5动画及游戏开发方面的专业课。", 18, 90),
    new Course(8, '软件过程', 'http://usercontent.edu2act.cn/media/team/18-05-31/GvVrSCw2H2XBgXjLdgTvmc.jpeg', "河北师大软件学院2016级测试方向基础课程。", 16, 90),
    new Course(9, '软件过程', 'http://usercontent.edu2act.cn/media/team/18-03-05/RLZ9pTwpocUfCYqRWvmACZ.jpg', "《JavaScript进阶》是计算机软件及相关专业在H5前端开发方向基础课。", 5, 90),
    new Course(10, '相思湖学院', 'http://usercontent.edu2act.cn/media/team/17-11-21/LPKB6oZNKu3GiMuC6DGdmA.png', "《JavaScript进阶》是计算机软件及相关专业在H5前端开发方向基础课。", 8, 90),
    new Course(11, '计算机导论', 'http://usercontent.edu2act.cn/media/team/17-10-19/25jkon9fLemyViTidcDHDW.jpg', "《JavaScript进阶》是计算机软件及相关专业在H5前端开发方向基础课。", 7, 90),
    new Course(12, ' SoftwareTesting', 'http://usercontent.edu2act.cn/media/team/17-09-15/FNYZkc7RjwRSy8aonG8AGo.jpg', "《JavaScript进阶》是计算机软件及相关专业在H5前端开发方向基础课。", 2, 90),
];
var courses03 = [
    new Course(4, 'web系统测试', 'http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png', "该课程包含：测试基础知识复习和实操，探索式测试，敏捷测试，Web安全测试四部分。", 18, 90),
    new Course(5, '软件测试基础', 'http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png', "围绕软件测试基础知识包括基本概念、黑盒测试、白盒测试以及专题化测试等开展。", 4, 90),
    new Course(6, '信息素养实践', 'http://usercontent.edu2act.cn/media/cs/16-10-28/93BLumGUzRct9BRxKQgWnn.png', " 在计算机科学中，数据结构是一门研究非数值计算的程序设计问题中计算机的操作对象。", 10, 90),
    new Course(7, 'H5游戏开发', 'http://usercontent.edu2act.cn/media/team/18-03-05/BftwUw47KUSTFGrwepb7gd.png', "《H5动画与游戏开发》是计算机软件及相关专业在H5动画及游戏开发方面的专业课。", 18, 90),
    new Course(8, '软件过程', 'http://usercontent.edu2act.cn/media/team/18-05-31/GvVrSCw2H2XBgXjLdgTvmc.jpeg', "河北师大软件学院2016级测试方向基础课程。", 16, 90),
    new Course(10, '相思湖学院', 'http://usercontent.edu2act.cn/media/team/17-11-21/LPKB6oZNKu3GiMuC6DGdmA.png', "《JavaScript进阶》是计算机软件及相关专业在H5前端开发方向基础课。", 8, 90),
    new Course(11, '计算机导论', 'http://usercontent.edu2act.cn/media/team/17-10-19/25jkon9fLemyViTidcDHDW.jpg', "《JavaScript进阶》是计算机软件及相关专业在H5前端开发方向基础课。", 7, 90),
    new Course(12, ' SoftwareTesting', 'http://usercontent.edu2act.cn/media/team/17-09-15/FNYZkc7RjwRSy8aonG8AGo.jpg', "《JavaScript进阶》是计算机软件及相关专业在H5前端开发方向基础课。", 2, 90),
];
app.get('/api', function (req, res) {
    res.json(courses); // res的json方法
});
app.get('/api/people', function (req, res) {
    res.json(people); // res的json方法
});
app.get('/api/text', function (req, res) {
    res.json(text); // res的json方法
});
app.get('/api/jobs01', function (req, res) {
    res.json(jobs01); // res的json方法
});
app.get('/api/jobs02', function (req, res) {
    res.json(jobs02); // res的json方法
});
app.get('/api/li', function (req, res) {
    res.json(li); // res的json方法
});
app.get('/api/courses', function (req, res) {
    res.json(courses); // res的json方法
});
app.get('/api/courses02', function (req, res) {
    res.json(courses02); // res的json方法
});
app.get('/api/courses03', function (req, res) {
    res.json(courses03); // res的json方法
});
app.get('/api/courses:id', function (req, res) {
    //req.params
    // res.end(JSON.stringify(courses));// JSON对象的方法
    //res.json(courses.find((ele)=>ele.id == req.params.id));
});
app.post('/api', function (req, res) {
    res.json(touxiang);
});
app.listen(8000);

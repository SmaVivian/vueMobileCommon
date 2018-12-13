import Mock from 'mockjs';

const baseURL = process.env.BASE_API;

// let obj={
//   'host':'www.baidu',
//   'port':'12345',
//   'node':'selector'
// }
// let arr=['momo','yanzi','ziwei']

Mock.mock(baseURL + '/demo', {
  'name|3': 'fei',//这个定义数据的模板形式下面会介绍
  'age|20-30': 25,
});

Mock.mock(baseURL + '/demo/list', {
  "array|1-10": [
    {
      "name|+1": [
        "Jane",
        "Vivi",
        "张三"
      ],
      "age|+1": [
        "24",
        "25",
        "26"
      ]
    }
  ]
});

Mock.mock(baseURL + '/demo/listcommon', {"page":{"allRow":81,"currentPage":1,"size":10,"totalPage":9,"start":0},"success":1,"data":[{"id":"201812031730231006","infoTopic":"济南市博物馆将推出《明万历于慎行肖像画册展》","museumId":"201812071732081016","type":"5","pageId":"201812121117261807","dataState":"1","createBy":"4028850c67530666016753117142000b","createDate":"2018-12-03 17:30","updateBy":"4028850c67530666016753117142000b","updateDate":"2018-12-12 11:19","content":"<p><span>&nbsp; &nbsp; 11月21日，《明万历于慎行肖像画册展》将在济南市博物馆开展，展览将展出平阴县博物馆藏于慎行《东阁衣冠年谱画册》及于慎行、张晋、冯云鹓所书序言、题签、题跋及文字说明等高仿作品36幅。展览由平阴县博物馆与济南市博物馆联合主办，展期将持续至12月16日。展览地点：济南市博物馆第一展厅。</span></p><p style=\"text-align: center;\"><span><img src=\"http://192.168.5.106/jinan/InfoEditPic/img/2018-12-12/db658b3e4ddc4f9385a23b80585100b2.jpg\" alt=\"undefined\"><br></span></p><p style=\"text-align: center;\"><span style=\"text-align: left;\">&nbsp; &nbsp; 于慎行，东阿县东阿镇（今属平阴）人，明代后期著名的政治家、文学家和史学家。《东阁衣冠年谱画册》是于慎行60岁寿辰（明万历三十三年，即1605年），由会稽金生雅工写照，“生平履历，自幼至老，种种状貌衣冠及所遇之境，共成三十六幅，汇为一册。”于慎行亲笔为其画册写了两页序文，又为每幅画写了文字说明。乾隆年间，汉军旗人东阿知县张晋，见到画谱后以为不可多得，并亲笔题写“大明万历东阁大学士于文定公年谱，大清乾隆泰安府东阿县知县张晋重订”封签。嘉庆年间，时任嵫阳县（今兖州）令的著名金石学家冯云鹓为之题跋。</span></p>","museumName":"济南市博物馆","pageUrl":"http://192.168.5.106/jinan/esaleInfoshow/img/2018-12-12/4b894125581b4ce0930ba8083964004c.jpg","typeDes":"讲座"},{"id":"201812051435411011","infoTopic":"头条！德国国宝级大师吕佩尔茨 将亲临山东美术馆 头条！德国国宝级大师吕佩尔茨 将亲临山东美术馆头条！德国国宝级大师吕佩尔茨 将亲临山东美术馆头条！德国国宝级大师吕佩尔茨 将亲临山东美术馆头条！德国国宝级大师吕佩尔茨 将亲临山东美术馆头条！德国国宝级大师吕佩尔茨 将亲临山东美术馆头条！德国国宝级大师吕佩尔茨 将亲临山东美术馆","museumId":"201812071732081016","type":"1","pageId":"201812051435391637","dataState":"1","createBy":"4028850c67530666016753117142000b","createDate":"2018-12-05 14:35","updateBy":"4028850c67530666016753117142000b","updateDate":"2018-12-09 11:03","content":"<p><span>“重塑——吕佩尔茨雕塑及绘画作品展”，将于2018年12月4日至2019年3月10日在山东美术馆举办。展览将展出15组（26件）雕塑作品，38件绘画作品（绝大多数首次在中国展出），是一次难得的世界级大师的展览。其中，绘画作品集中于山东美术馆四楼展厅展出。这是山东美术馆完成四楼展厅改造工程后的首展，也是德国新表现主义艺术的另一次全面呈现。11</span></p><p style=\"text-align: center;\"><img src=\"http://www.sdam.org.cn/upload/image/20181203/1543820275090014383.jpg\"></p><p style=\"text-align: center;\"><span>阿特拉斯系列 (1) 版画 1988年</span></p><p><span>　　马库斯·吕佩尔茨，是德国当代著名的画家、雕塑家、作家、艺术教育家和爵士乐钢琴家。他是一位勤奋、善思、高产的艺术家，他十分关注艺术作品本体语言的表达和未来的各种可能性，以及艺术家自我意识的表达。与巴塞利兹、伊门多夫、彭克、安塞姆·基弗等一同被划归到德国新表现主义的阵营之中。</span></p><p><span>　　吕佩尔茨以及他所代表的德国新表现主义绘画不仅仅是作为独特的欧洲艺术表现方式，打破了曾一度影响欧洲的波普艺术和极简主义的统治局面，因其绘画艺术的独特创造力引发了艺术理论和艺术史界关于绘画回归问题的讨论。20世纪80年代末到90年代初德国新表现主义被介绍到中国，对中国当代艺术的发展产生了重要影响。新表现主义在画面中呈现出的冲击力、激情甚至是一种反抗的、纠结的、矛盾的情绪深深地影响着中国艺术家，中国艺术家或直接的学习其画法和风格，或从其表现形式或方法上借力。</span></p><p><span>　　吕佩尔茨的艺术从20世纪60年代开始，在80年代获得了极大的声誉。他的艺术被赋予了多重意义的维度，特别是围绕关于绘画性的研究，从绘画形式语言和绘画题材入手，发现新的具有个人化与说服力的表达方式。他的雕塑雕凿粗放，有着狂烈的色彩，透过凹凸起伏的雕刻形成鲜明而强烈的对比，雕凿出人物的性格和灵魂。他的作品将形式与身体感觉的体验还原到了最为本能的层面上，实现了精神性力量的当代展示。</span></p><p><span>山东美术馆一直强调学术上的国际交流，并从事广泛的国际交流项目，与德国贝尔艺术中心二度携手着力引进“重塑——吕佩尔茨雕塑及绘画作品展”，延续了“重构——基弗在中国”的思路，希望以个案研究的方式，带给山东观众更多关于文化艺术的独立思考。</span></p><p><span>　　山东美术馆通过展示国际一线艺术家对历史、文化、现状、现实与未来的深刻思考，展示艺术不断突破语言界限的无限可能，不断促进东西方艺术理念的碰撞。在推动中德文化交流的同时，引发德国新表现主义与山东当代绘画发展脉络之间的学术思考，探讨当代艺术的问题与发展走向。</span></p><p><span>　　12月6——8日，吕佩尔茨本人将亲临济南，通过学术交流、艺术家论坛和现场创作等形式与大众互动。届时，中国美术馆馆长吴为山、山东美术馆馆长张望将与吕佩尔茨进行艺术对话。欢迎广大观众前来品鉴。</span></p><p style=\"text-align: center;\"><img src=\"http://www.sdam.org.cn/upload/image/20181203/1543820418090055448.jpg\"></p><p style=\"text-align: center;\">阿特拉斯系列 (1) 版画 1988年</p><p style=\"text-align: center;\"><img src=\"http://www.sdam.org.cn/upload/image/20181203/1543820464590012494.jpg\"></p><p style=\"text-align: center;\">唐老鸭 油画 1963年</p><p style=\"text-align: center;\"><img src=\"http://www.sdam.org.cn/upload/image/20181203/1543820494621051535.jpg\"></p><p style=\"text-align: center;\">铁轨系列 (1) 油画 1969年</p>","museumName":"济南市博物馆","pageUrl":"http://192.168.5.106/jinan/esaleInfoshow/img/2018-12-05/21902687d23d4a409bef574b5bb4217c.jpg","typeDes":"馆内公告"},{"id":"201812051431191010","infoTopic":"艺术的阅读——为山东美术馆“阅读空间”点赞","museumId":"201812051405461010","type":"3","pageId":"201812051431171636","dataState":"1","createBy":"4028850c67530666016753117142000b","createDate":"2018-12-05 14:31","updateBy":"201812061440561076","updateDate":"2018-12-08 16:17","content":"<div class=\"t\" id=\"ffffye\"><p><span>近年来，山东美术馆秉承“一切为了观众”的办馆理念，致力于“一日艺术生活空间”的打造，以其先进的功能设施、高雅的艺术品位、鲜明的建筑个性、独特的文化内涵，成为山东富有时代气息的文化新地标，越来越多的市民把这里当作游览休憩滋养艺术心灵的文化家园。</span></p><p><br></p><p style=\"text-align: center;\"><img src=\"http://www.sdam.org.cn/upload/image/20181128/1543375804221071488.jpg\"></p><p><span>　　山东美术馆“阅读空间”，是山东美术馆众多特色服务空间之一，是美术馆重要的文化载体和空间。能够向观众提供各类艺术文化图书3000余册，可以让观众欣赏到古今中外诸多艺术大师的作品图集，接触到当今世界前沿的艺术理论。同时，舒适的桌椅、宽松的阅读氛围，也为观众提供了一个休闲放松的文化娱乐场所。</span></p><p><span>　　山东美术馆“阅读空间”是艺术教育的知识宝库，它不同于传统阅览室，并非以学习研究式阅览为目的，而是根据美术馆及观众的特点，更多地体现休闲式、补充式阅览的功能。作为面向观众的免费开放式阅读空间，美术馆十分重视各类艺术图书的选择与排布工作。目前，无论是从实现阅览功能，为观众提供阅览服务，还是从阅览空间的布置、呈现等方面来说，都严格把关，甄选合适的图书、期刊、报纸等，并进行合理排布。既有通俗易懂、活泼有趣的简报、小报，也有注重理论、学术研究的专业性图书，既继承传统，又把握当代，既关注全球视野，又注重本土精神。所有的图书实时更新，任观众取阅，更好地宣传展示美术馆文化、艺术知识和当前最前沿的艺术动态。</span></p><p><br></p><p style=\"text-align: center;\"><img src=\"http://www.sdam.org.cn/upload/image/20181128/1543375821236045978.jpg\"></p><p><span>　　山东美术馆“阅读空间”的书籍、画册与美术馆内的展览相辅相成。阅读空间位于二楼开幕式大厅醒目位置，在展的画册、资料为观众提供了深度的艺术解读，即使对展陈一无所知的参观者，在浏览了相关的资料以后，也能对展览有个大概的印象；而对于已经参观完的观众来说，则能更加透彻的了解艺术家的思想和艺术风格，对作品的构图、细节有了更深刻的学习和认识。往年举办的活动、历届的展览、以及国际、国内、省内知名大展的画册都能在阅读区找到，在这里，同样可以弥补观众“错过展览”的遗憾，这也是阅读空间的一个重要价值的体现。</span></p><p><span>　　山东美术馆“阅读空间”是一隅休闲放松的清舍雅苑。阅读空间设计简约，书架、桌椅为淡雅的原木色，桌边的绿植盆景，让人心旷神怡，为观众营造了一个安静、明亮、舒适、整洁的阅读氛围。阅读空间的服务设施齐全，可以为观众提供免费饮用水、纸、笔等服务，配备的工作人员经过严格的岗前培训，对读者进行阅览内容的查找和咨询提供帮助和指导。同时，收集读者的意见和建议，以备定期图书更换、维护和购置新书做参考。周末前来美术馆消遣的民众络绎不绝，阅读空间更是座无虚席，为此，山东美术馆为观众准备了几十个特色蒲团以供小憩。后期，还会根据具体情况和场馆条件来增加图书数量和阅读空间面积。</span></p><p><br></p><p style=\"text-align: center;\"><img src=\"http://www.sdam.org.cn/upload/image/20181128/1543375840518051408.jpg\"></p><p><span>　山东美术馆“阅读空间”的设立是美术馆追求亲和力以及对受众开发的一种有效地方式，能让美术馆的宣传教育职能得到更好的发挥，更好地贴近大众，服务社会，在促进美术馆文化品格提升的同时，也体现了美术馆文化休闲功能的加强。</span></p><div><span><br></span></div></div>","museumName":"山东省美术馆","pageUrl":"http://192.168.5.106/jinan/esaleInfoshow/img/2018-12-05/d2701b11b3974c99a649eaf7d45d1fdc.jpg","typeDes":"专家论坛"},{"id":"201812051427311009","infoTopic":"人人都是消防员 ——山东美术馆组织消防培训演练","museumId":"201812051416251014","type":"5","pageId":"201812051427201635","dataState":"1","createBy":"4028850c67530666016753117142000b","createDate":"2018-12-05 14:27","updateBy":"4028850c67530666016753117142000b","updateDate":"2018-12-05 14:27","content":"<p style=\"text-align: justify;\"><span>在119“全国消防日”到来之际，为提高全体职工的消防意识和应对突发火灾的应急处理能力，保障美术馆场馆及藏品展品的消防安全，确保观众及职工的人身安全。近日，山东美术馆在周一闭馆期间组织了如何正确使用干粉灭火器的培训演练活动，美术馆全体馆员和在馆物业、安保人员分批次参加了此次活动。&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></p><p style=\"text-align: center;\"><span><img src=\"http://www.sdam.org.cn/upload/image/20181109/1541746138932017025.jpg\"></span></p><p style=\"text-align: justify;\"><span>　　<span>培训演练开始之前，山东美术馆党总支书记柳延春对此次活动提出要求。他指出，消防安全无小事，每一位职工要高度重视。本次活动重在实践操作，每一位职工都要拿起灭火器模拟火灾现场进行灭火演练，确保人人都会使用灭火器，人人都是安全消防员。大火往往是因为小火没有得到及时控制造成的，面对初期火灾时，需冷静应对，正确使用灭火器，使人身和财产损失降到最低点。</span></span></p><p style=\"text-align: center;\"><span><img src=\"http://www.sdam.org.cn/upload/image/20181109/1541746272745060760.jpg\"></span></p><p style=\"text-align: justify;\"><span>　　安全保卫部主任李长江介绍了馆内消防安全设施及报警应急系统。消防安全员讲解了消防安全知识和灭火器的具体使用方法。在消防安全员的现场指导下，每一位职工轮流拿起灭火器，进行了消防初期火灾的扑救演练，每人达到会使用灭火器，能够用灭火器扑灭明火。 &nbsp;&nbsp;</span></p><p style=\"text-align: justify;\"><span></span></p><p style=\"text-align: center;\"><img src=\"http://www.sdam.org.cn/upload/image/20181109/1541746293682020015.jpg\"></p><p style=\"text-align: center;\"><img src=\"http://www.sdam.org.cn/upload/image/20181109/1541746294104076460.jpg\"></p><p style=\"text-align: center;\"><img src=\"http://www.sdam.org.cn/upload/image/20181109/1541746294432024184.jpg\"></p><p style=\"text-align: center;\"><img src=\"http://www.sdam.org.cn/upload/image/20181109/1541746295995044878.jpg\"></p><p style=\"text-align: justify;\"><span>　　通过培训演练活动，全体职工掌握了灭火器的操作技能，初起火灾的处置方法，火灾应急预案等消防常识，也提升了职工的消防综合素质，提高了对于做好消防工作重要意义的认识，增强了忧患意识。</span><span><br></span></p><p style=\"text-align: justify;\"><span>　　山东美术馆一直将安全工作作为场馆运行的重中之重，多次面向全体职工召开安全宣传大会，经常召开安全工作形势分析会、部署会，定期组织消防初期火灾扑救、展厅观众疏散演练、直梯人员被困应急救援演练、扶梯人员被困应急救援演练、防盗抢演练、防暴恐演练、排除可疑物品演练等活动，真实模拟多种突发事件情况下，应急救援的专业实施操作。新的形势下，美术馆将始终如一的绷紧“安全弦”，使职工对相关流程更加熟悉、反应更加迅速，全力保障场馆运行安全，为广大观众创造了安全、可靠的观展环境。</span></p>","museumName":"济南市美术馆","pageUrl":"http://192.168.5.106/jinan/esaleInfoshow/img/2018-12-05/422456bf88a3437a81bcc9c6c13037e8.jpg","typeDes":"讲座"},{"id":"201812051426191008","infoTopic":"山东美术馆观众通道临时调整为东门的通知","museumId":"201812051416251014","type":"1","pageId":"201812051426171634","dataState":"1","createBy":"4028850c67530666016753117142000b","createDate":"2018-12-05 14:26","updateBy":"4028850c67530666016753117142000b","updateDate":"2018-12-05 14:26","content":"<p><span>2018年10月17日至11月30日，山东美术馆将对西侧广场进行封闭施工。为确保施工期间观众的出入场馆安全，山东美术馆观众通道临时调整为美术馆东门，西门观众通道将暂停关闭。<br></span></p><p><span>　　施工期间，山东美术馆正常开放，观众参观不便之处，敬请谅解。如您有任何意见、建议，欢迎致电0531-81305083 山东美术馆物业部，我们将竭诚为您服务。</span></p><p><span>　　特此公告！</span></p><p><br></p><p style=\"text-align: right;\"><span>山东美术馆 &nbsp;</span></p><p style=\"text-align: right;\"><span>2018年10月12日</span></p><p><img src=\"http://www.sdam.org.cn/upload/image/20181015/1539588603587021084.jpg\"></p>","museumName":"济南市美术馆","pageUrl":"http://192.168.5.106/jinan/esaleInfoshow/img/2018-12-05/b213b5817bde42ee92b18c0b3fe2d045.jpg","typeDes":"馆内公告"},{"id":"201812051424401007","infoTopic":"济南市公安局经文保支队检查指导山东美术馆“平安单位”创建工作","museumId":"201812051416251014","type":"2","pageId":"201812051424381633","dataState":"1","createBy":"4028850c67530666016753117142000b","createDate":"2018-12-05 14:24","updateBy":"4028850c67530666016753117142000b","updateDate":"2018-12-05 14:24","content":"<p><span>11月26日，济南市公安局经文保支队检查工作小组一行莅临山东美术馆，就“平安单位”创建工作进行了实地检查和指导。济南市公安局经文保支队警官王岩松、曲利凡、姜平生、徐慧，山东博物馆副科长仪明渊，济南市博物馆保卫科科长王滨共同参与检查，山东美术馆党总支书记柳延春、安保部主任李长江以及物业部、安保部和物业公司相关人员陪同。</span></p><p style=\"text-align: center;\"><img src=\"http://www.sdam.org.cn/upload/image/20181128/1543376035049044409.jpg\"></p><p><span>　　柳延春书记就美术馆安全防范设施建设情况、安全保卫制度落实情况、安全防范知识培训工作等方面进行了汇报。柳书记说，山东美术馆作为对大众开放的公共文化服务机构，始终把安全生产工作放在突出位置，未雨绸缪地做好各项安全工作，多次面向全体员工召开安全宣传大会，定期组织各类安全演练活动和安全检查，定期检验安全设备，全力保障场馆运行安全，为广大观众创造安全、可靠的观展环境，确保展品万无一失。</span></p><p><br></p><p style=\"text-align: center;\"><img src=\"http://www.sdam.org.cn/upload/image/20181128/1543376051721010884.jpg\"></p><p><span>　　检查小组一行首先来到美术馆中控室、微型消防站查看安全监控设备、站房器材的使用情况，详细了解值守制度、人员配备、训练管理等管理工作。随后，深入高压配电室、餐厅、收藏库房、展厅等重点区域全面检查消防安全责任落实情况，了解用火用电用气管理、易燃物品堆放储存、消防设施设备使用性能等情况，重点排查展陈装置防火性能、消防疏散标志与应急照明装置布设等情况。检查结束后，就美术馆安全保卫工作提出充分肯定。</span></p><p><br></p><p style=\"text-align: center;\"><img src=\"http://www.sdam.org.cn/upload/image/20181128/1543376064721041417.jpg\"></p><p><span>　　近年来，山东美术馆以“平安单位”创建为引领，严格按照《文物系统博物馆风险等级和安全防护级别的规定》及《博物馆和文物保护单位安全防范系统要求》等相关要求，定期组织开展防暴力实战演练、电梯应急救援演练、消防安全培训演习等安全演练活动，全面提高全体员工的安全防范意识，掌握突发安全事件的应对能力和技巧，坚决预防和遏制安全事故发生，为观众打造稳定、安全、和谐的观展环境。</span></p>","museumName":"济南市美术馆","pageUrl":"http://192.168.5.106/jinan/esaleInfoshow/img/2018-12-05/f2705221d4784c07a18ace664612f578.jpg","typeDes":"领导视察"},{"id":"201812031727361005","infoTopic":"测试","museumId":"2018111614391019","type":"3","pageId":"201812031727341607","dataState":"1","createBy":"4028850c67530666016753117142000b","createDate":"2018-12-03 17:27","updateBy":"4028850c67530666016753117142000b","updateDate":"2018-12-03 17:27","content":"","museumName":null,"pageUrl":"http://192.168.5.106/jinan/esaleInfoshow/img/2018-12-03/6e55f96feb6140e09ae8230788f99b33.png","typeDes":"专家论坛"},{"id":"201811211452041024","infoTopic":"demo2","museumId":"201811151657241002","type":"6","pageId":"201811261452031546","dataState":"1","createBy":"10000000001","createDate":"2018-11-26 14:52","updateBy":"4028850c67530666016753117142000b","updateDate":"2018-12-03 13:46","content":"11","museumName":null,"pageUrl":"http://192.168.5.106/jinan/esaleInfoshow/img/2018-11-26/f2d3f5228b6b4005bac934c092669878.jpg","typeDes":"其他"},{"id":"201811221452041008","infoTopic":"demo2","museumId":"201811151657241002","type":"6","pageId":"201811261452031546","dataState":"1","createBy":"10000000001","createDate":"2018-11-26 14:52","updateBy":"10000000001","updateDate":"2018-11-26 14:52","content":"","museumName":null,"pageUrl":"http://192.168.5.106/jinan/esaleInfoshow/img/2018-11-26/f2d3f5228b6b4005bac934c092669878.jpg","typeDes":"其他"},{"id":"201811261452041008","infoTopic":"demo2","museumId":"201811151657241002","type":"2","pageId":"201811261452031546","dataState":"1","createBy":"10000000001","createDate":"2018-11-26 14:52","updateBy":"10000000001","updateDate":"2018-11-26 14:52","content":"","museumName":null,"pageUrl":"http://192.168.5.106/jinan/esaleInfoshow/img/2018-11-26/f2d3f5228b6b4005bac934c092669878.jpg","typeDes":"领导视察"}],"error":null,"code":null,"msg":null,"count":null});
import service from './http';
import adminService from './adminHttp'
import { userInfo } from '../store/getters';
// 获取验证码
export const code = () => {
  return service.get('/getCode');
};
// 登录
export const login = reqBody => {
  return service.post('/login', reqBody);
};
// 获取个人信息
export const qrySelf = () => {
  return service.post('/qrySelf');
};
// 修改个人信息
export const updateUser = userInfo => {
  return service.post('/updateUser', userInfo);
};
// 注册
export const register = reqBody => {
  return service.post('/register', reqBody);
};
// 检查用户名
export const checkName = userName => {
  return service.post('/chkUserName', {
    userName
  });
};

// 获取所有漫画
export const allManga = () => {
  return service.get('/findAllManga');
};
// 查询条件获取漫画
export const findBySearch = (search, page, size) => {
  return service.post('/findBySearch', { search, page, size });
};
// 获取漫画详情
export const getChapter = mangaId => {
  return service.post('/findChapter', { mangaId });
};
// 根据Id获取漫画信息
export const getById = mangaId => {
  return service.post('/findByMangaId', { mangaId });
};
// 获取漫画图
export const getEpisode = chapterId => {
  return service.post('/findEpisode', { chapterId });
};
// 获取排行榜
export const rankList = type => {
  return service.post('/findRankList', { type });
};
// 获取免费排行榜
export const freePop = () => {
  return service.get('/findFreePop');
};
// 获取付费排行榜
export const payPop = () => {
  return service.get('/findPayPop');
};
// 获取人气排行榜
export const mostPop = () => {
  return service.get('/findMostPop');
};
// 获取漫画分类
export const classes = () => {
  return service.get('/findTag');
};
// 通过日期获取漫画
export const searchByTime = date => {
  return service.post('/findByTime', date);
};
// 通过标签搜索漫画
export const searchByTag = tagId => {
  return service.post('/findByTag', { tagId });
};
// 漫画模糊查询
export const searchByFuzzy = fuzzy => {
  return service.post('/findByFuzzy', {
    fuzzy
  });
};
// 收藏漫画
export const collectManga = mangaId => {
  return service.post('/collectManga', { mangaId });
};
// 取消收藏漫画
export const cancelCollect = mangaId => {
  return service.post('/cancelCollect', { mangaId });
};
// 检查是否收藏漫画
export const checkCollect = mangaId => {
  return service.post('/chkCollect', { mangaId });
};
// 获取投票榜
export const findByMonth = date => {
  return service.post('/findTicketByMonth', { date });
};
// 获取漫画评论
export const findMangaComm = mangaId => {
  return service.post('/findMangaComm', {
    mangaId
  });
};
// 评论漫画
export const commManga = comm => {
  return service.post('/commManga', comm);
};
// 点赞评论
export const commLike = ({ commId, likeStatus }) => {
  return service.post('/commLike', {
    commId,
    likeStatus
  });
};
// 检查评论是否点赞
export const checkCommLike = commId => {
  return service.post('/chkLike', {
    commId
  });
};
// 历史记录
export const qryHistory = pagination => {
  return service.post('/qryHistory', pagination);
};
// 回复评论
export const replyComm = reply => {
  return service.post('/replyComm', reply);
};
// 充值
export const recharge = manga => {
  return service.post('/recharge', manga);
};

// 查看账户
export const qryAccount = accountId => {
  return service.post('/qryAccount', { accountId });
};

// 消费
export const expenditure = object => {
  return service.post('/expenditure', object);
};


/**
 * 作者端接口
 **/

// 获取作者上传漫画
export const findMyManga = data => {
  return service.post('/findMyManga', data);
};

// 获取审核漫画数据
export const getUnauditManga = unAuditType => {
  return service.post('/unAudit', unAuditType);
};

// 添加漫画信息
export const addManga = mangaData => {
  return service.post('/addManga', mangaData);
};

// 添加漫画内容图片和封面图片
export const addEpisodeList = episodeListData => {
    return service.post('/addEpisodeList', episodeListData);
}

// 添加章节信息
export const addChapter = chapterData => {
    return service.post('/addChapter', chapterData);
}

// 删除整部漫画
export const deleteManga = mangaId => {
    return service.post('/deleteManga', mangaId);
}

// 获取章节信息
export const findChapterByAuthor = mangaId => {
    return service.post('/findChapterByAuthor', mangaId);
}

// 获取漫画章节内容图片
export const findEpisodeByAuthor = chapterId => {
    return service.post('/findEpisodeByAuthor',chapterId);
}

// 删除章节
export const deleteChapter = chapterId => {
  return service.post('/deleteChapter', chapterId);
}

/**
 * 管理端端接口
 **/

// 管理员登录
export const adminLogin = reqBody => {
  return adminService.post('/adminLogin', reqBody)
}
// 获取未审核漫画章节
export const unAudit = param => {
  return adminService.post('/admin/unAudit', param);
};
// 审核漫画或章节
export const audit = data => {
  return adminService.post('/admin/audit', data);
}
// 获取所有用户列表
export const getUserList = data =>{
  return adminService.post('/admin/userList',data);
}
// 停用用户
export const stopUser = data => {
  return adminService.post('/admin/stopUser',data);
}
// 启用用户
export const activateUser = data => {
  return adminService.post('/admin/activateUser',data);
}
// 管理端获取漫画章节图片
export const findEpisodeByAdmin = data => {
  return adminService.post('/findEpisodeByAuthor',data);
}
var config = {
    blogName: '���˲���',
    headPicture: '/images/bg.png',
    aPageNum: 7,//��ҳ,һҳ��ʾ��������.
    dbUser: 'root',//dbUser��д '' ˵�����ݿ�ͱ�������ͬһ̨����
    dbPass: '1234',
    dbAddress: '192.168.1.120',
    dbPort: '27017',
    dbName: 'microblog',
    ownerName: '��ң�ɺ�',//������������ʾ�ڲ�����Ϣ��
    ownerLocation: '�Ϻ�',//���ڵأ���ʾ�ڲ�����Ϣ��
    ownerOccupation: '-',//ְҵ����ʾ�ڲ�����Ϣ��
    ownerSkill: '',//��Ҫ���������뼼�ܣ���ʾ�ڲ�����Ϣ��
    motto: 'Thoughts, stories and ideas.',//����������ʾ�ڲ�����Ϣ��
    email: '871825513@qq.com',
    cookieSecret: 'microblogyuanzm',
    serverPlatform: {
        platform: 'local',
        AccessKey: 'xxx',//platform��local���Բ���
        SecrectKey: 'xxx',//platform��local���Բ���
        buckect: 'x' //bcs�е�buckect����
    },
    mailConfig: {
        service: 'Gmail',//Gmail QQ QQex Yahoo Hotmail
        auth: {
            user: 'longmenwaideyu@gmail.com',
            pass: 'abcd'
        }
    },
    otherBlog: {//����������ͣ���ʾ��ҳ��
        url: 'http://blog.csdn.com/he90227',
        name: 'CSDN����'
    },
    friendlyLinks: [//�������ӣ���ʾ��ҳ��
        { url: 'http://hi.baidu.com/longmenwaideyu', name : '�ٶȲ���' }
    ],
    ICPNumber: '��ICP��00000000��'//��ʾ��ҳ��
}
module.exports = config;

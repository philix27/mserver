import { Assets } from '../Assets';
import { publicPath } from '../publicPath';

export interface socialLinks {
    title: string;
    url: string;
    desc?: string;
    imgLink: string;
}

export const socialLinks: socialLinks[] = [
    {
        title: 'Youtube',
        url: 'https://www.youtube.com/@mobarter',
        imgLink: publicPath(Assets.socials.Youtube),
        desc: '',
    },
    {
        title: 'Twitter',
        url: 'https://x.com/mobarter_com',
        imgLink: publicPath(Assets.socials.Twitter),
        desc: '',
    },
    {
        title: 'Telegram',
        url: 'https://t.me/mobarter/1',
        imgLink: publicPath(Assets.socials.Telegram),
        desc: '',
    },
    {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/company/105072988/admin/dashboard/',
        imgLink: publicPath(Assets.socials.LinkedIn),
        desc: '',
    },
    {
        title: 'Instagram',
        url: 'https://www.instagram.com/mobarter.co/',
        imgLink: publicPath(Assets.socials.Instagram),
        desc: '',
    },
    {
        title: 'Whatsapp',
        url: '',
        imgLink: publicPath(Assets.socials.Whatsapp),
        desc: '',
    },
    {
        title: 'Facebook',
        url: '',
        imgLink: publicPath(Assets.socials.Facebook),
        desc: '',
    },
];

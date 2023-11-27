interface InavHelper {
  logo: string;
  menu_item: InavItems[];
}

interface InavItems {
  label: string;
  path?: string;
}

interface IlandingHero {
  header_title: string;
  subtitle: string;
  ETH: string;
  img: string;
}

export default function dataHelper() {
  const navItems: InavHelper = {
    logo: "/logo.png",
    menu_item: [
      { label: "Home" },
      { label: "Collection" },
      { label: "Community" },
      { label: "Create" },
    ],
  };
  const landingHeroHelper: IlandingHero[] = [
    {
      header_title: "HeaperAce",
      subtitle: "Hightest bid 20/100",
      ETH: "1.4 ETH",
      img: "/img-1.png",
    },
    {
      header_title: "Azuki",
      subtitle: "Hightest bid 50/100",
      ETH: "1.5 ETH",
      img: "/img-2.png",
    },
  ];

  const landingTreding = [
    {
      cover: "/trending1.png",
      userImage: "/img-2.png",
      userName: "CryptoPunk",
      title: "HAPE",
      subtitle: "Hightlest bid 40/100",
      ethValue: "1.4 ETH",
      heartCount: 255,
    },
    {
      cover: "/img-2.png",
      userImage: "/img-2.png",
      userName: "CryptoPunk",
      title: "Azuki",
      subtitle: "Hightlest bid 50/100",
      ethValue: "1.5 ETH",
      heartCount: 55,
    },
    {
      cover: "/trending2.png",
      userImage: "/img-2.png",
      userName: "CryptoPunk",
      title: "CoolGuyzz",
      subtitle: "Hightlest bid 40/100",
      ethValue: "0.5 ETH",
      heartCount: 105,
    },
    {
      cover: "/img-1.png",
      userImage: "/img-2.png",
      userName: "CryptoPunk",
      title: "Contenu",
      subtitle: "Meilleure offre 50/100",
      ethValue: "0.5 ETH",
      heartCount: 25,
    },
    {
      cover: "/img-1.png",
      userImage: "/img-2.png",
      userName: "CryptoPunk",
      title: "Contenu",
      subtitle: "Hightlest bid 40/100",
      ethValue: "0.5 ETH",
      heartCount: 70,
    },
    {
      cover: "/img-1.png",
      userImage: "/img-2.png",
      userName: "CryptoPunk",
      title: "Contenu",
      subtitle: "Hightlest bid 40/100",
      ethValue: "0.5 ETH",
      heartCount: 90,
    },
  ];

  return { navItems, landingHeroHelper, landingTreding };
}

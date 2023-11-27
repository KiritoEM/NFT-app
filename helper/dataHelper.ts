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

  return { navItems, landingHeroHelper };
}

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

interface INFTcard {
  cover: string;
  userImage: string;
  userName: string;
  title: string;
  subtitle: string;
  ethValue: string;
  heartCount: number;
}

interface IcreateSection {
  img: string;
  title: string;
  subtitle: string;
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

  const landingTreding: INFTcard[] = [
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
      ethValue: "3.5 ETH",
      heartCount: 105,
    },
    {
      cover: "/trending 3.png",
      userImage: "/img-2.png",
      userName: "CryptoPunk",
      title: "Lyodd",
      subtitle: "Meilleure offre 50/100",
      ethValue: "2 ETH",
      heartCount: 25,
    },
    {
      cover: "/trending4.png",
      userImage: "/img-2.png",
      userName: "CryptoPunk",
      title: "InvisibleFriend",
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

  const TopCollection: INFTcard[] = [
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
      ethValue: "3.5 ETH",
      heartCount: 105,
    },
    {
      cover: "/trending 3.png",
      userImage: "/img-2.png",
      userName: "CryptoPunk",
      title: "Lyodd",
      subtitle: "Meilleure offre 50/100",
      ethValue: "2 ETH",
      heartCount: 25,
    },
    {
      cover: "/trending4.png",
      userImage: "/img-2.png",
      userName: "CryptoPunk",
      title: "InvisibleFriend",
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

  const sectionCreate: IcreateSection[] = [
    {
      img: "/Wallet.png",
      title: "Set up your wallet",
      subtitle:
        "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.",
    },
    {
      img: "/Paper-Upload.png",
      title: "Upload & Create Collection",
      subtitle:
        "Upload your work then Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.",
    },
    {
      img: "/Bookmark.png",
      title: "List them for sale",
      subtitle:
        "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them",
    },
  ];

  const sellerInfo = [
    {img: "/avt-3.jpg", name: "Crispin Bery", ETH:"214.2 ETH"},
    {img: "/avt-2.jpg", name: "Samson Frost", ETH:"205.2 ETH"},
    {img: "/avt-4.jpg", name: "Tommy Alvarest", ETH:"170.5 ETH"},
    {img: "/avt-5.jpg", name: "Windsor Lane", ETH:"120.2 ETH"},
    {img: "/avt-9.jpg", name: "Andy Hulbutt", ETH:"85.7 ETH"},
    {img: "/avt-8.jpg", name: "Blake Blanks", ETH:"68.2 ETH"},
  ]

  return {
    navItems,
    landingHeroHelper,
    landingTreding,
    TopCollection,
    sectionCreate,
    sellerInfo
  };
}

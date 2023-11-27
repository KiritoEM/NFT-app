interface InavHelper {
  logo: string;
  menu_item: InavItems[];
}

interface InavItems {
  label: string;
  path?: string;
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

  return { navItems };
}

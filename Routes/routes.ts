import { uuid as generatedID } from "vue-uuid";

export interface RouterPath {
  id: string;
  name: string;
  href: string;
  tag?: boolean;
  target?: string;
  deprecate?: boolean;
  redirect?: boolean;
}

export const docsRoutes = ref<RouterPath[]>([
  {
    id: generatedID.v4(),
    name: "Accordion",
    href: "/docs/components/accordion",
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID.v4(),
    name: "Alert",
    href: "/docs/components/alert",
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID.v4(),
    name: "Area Chart",
    href: "/docs/components/area-chart",
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID.v4(),
    name: "Bar Chart",

    href: "/docs/components/bar-chart",
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID.v4(),
    name: "Line Chart",

    href: "/docs/components/line-chart",
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID.v4(),
    name: "Pie Chart",

    href: "/docs/components/pie-chart",
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID.v4(),
    name: "Avatar",
    href: "/docs/components/avatar",
    tag: false,
    deprecate: false,
  },
  // {
  //   id: generatedID.v4(),
  //   name: "Badge",

  //   href: "/docs/components/badge",
  //   tag: false,
  //   deprecate: false,
  // },

  // {
  //   id: generatedID.v4(),
  //   name: "BreadCrumb",

  //   href: "/docs/components/breadcrumb",
  //   tag: false,
  //   deprecate: false,
  // },
  {
    id: generatedID.v4(),
    name: "Button",
    href: "/docs/components/button",
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID.v4(),
    name: "Button Group",
    href: "/docs/components/button-group",
    tag: false,
    deprecate: false,
  },
  // {
  //   id: generatedID.v4(),
  //   name: "Card",

  //   href: "/docs/components/card",
  //   tag: false,
  //   deprecate: false,
  // },
  // {
  //   id: generatedID.v4(),
  //   name: "Carousel",

  //   href: "/docs/components/carousel",
  //   tag: false,
  //   deprecate: false,
  // },
  // {
  //   id: generatedID.v4(),
  //   name: "Checkbox",

  //   href: "/docs/components/checkbox",
  //   tag: false,
  //   deprecate: false,
  // },
  // {
  //   id: generatedID.v4(),
  //   name: "Divider",

  //   href: "/docs/components/divider",
  //   tag: false,
  //   deprecate: false,
  // },
  // {
  //   id: generatedID.v4(),
  //   name: "Date Picker",

  //   href: "/docs/components/datePicker",
  //   tag: false,
  //   deprecate: false,
  // },
  // {
  //   id: generatedID.v4(),
  //   name: "Dropdown",

  //   href: "/docs/components/dropdown",
  //   tag: false,
  //   deprecate: false,
  // },
  // {
  //   id: generatedID.v4(),
  //   name: "Drawer",

  //   href: "/docs/components/drawer",
  //   tag: false,
  //   deprecate: false,
  // },
  // {
  //   id: generatedID.v4(),
  //   name: "Empty",

  //   href: "/docs/components/empty",
  //   tag: false,
  //   deprecate: false,
  // },
  // {
  //   id: generatedID.v4(),
  //   name: "Modal",

  //   href: "/docs/components/modal",
  //   tag: false,
  //   deprecate: false,
  // },
  // {
  //   id: generatedID.v4(),
  //   name: "Navbar",

  //   href: "/docs/components/navbar",
  //   tag: false,
  //   deprecate: false,
  // },
  // {
  //   id: generatedID.v4(),
  //   name: "Notification",

  //   href: "/docs/components/notification",
  //   tag: false,
  //   deprecate: false,
  // },
  // {
  //   id: generatedID.v4(),
  //   name: "Number Input",

  //   href: "/docs/components/numberInput",
  //   tag: false,
  //   deprecate: false,
  // },
  // {
  //   id: generatedID.v4(),
  //   name: "Progress",

  //   href: "/docs/components/progress",
  //   tag: false,
  //   deprecate: false,
  // },
  // {
  //   id: generatedID.v4(),
  //   name: "Pagination",

  //   href: "/docs/components/pagination",
  //   tag: false,
  //   deprecate: false,
  // },
  // {
  //   id: generatedID.v4(),
  //   name: "Popover",

  //   href: "/docs/components/popover",
  //   tag: false,
  //   deprecate: false,
  // },
  // {
  //   id: generatedID.v4(),
  //   name: "Radio",

  //   href: "/docs/components/radio",
  //   tag: false,
  //   deprecate: false,
  // },
  // {
  //   id: generatedID.v4(),
  //   name: "Rating",

  //   href: "/docs/components/rating",
  //   tag: false,
  //   deprecate: false,
  // },
  // {
  //   id: generatedID.v4(),
  //   name: "Sidebar",

  //   href: "/docs/components/sidebar",
  //   tag: false,
  //   deprecate: false,
  // },
  // {
  //   id: generatedID.v4(),
  //   name: "Skeleton",

  //   href: "/docs/components/skeleton",
  //   tag: false,
  //   deprecate: false,
  // },
  // {
  //   id: generatedID.v4(),
  //   name: "Slider",

  //   href: "/docs/components/slider",
  //   tag: false,
  //   deprecate: false,
  // },
  // {
  //   id: generatedID.v4(),
  //   name: "Spinner",

  //   href: "/docs/components/spinner",
  //   tag: false,
  //   deprecate: false,
  // },
  // {
  //   id: generatedID.v4(),
  //   name: "Steps",

  //   href: "/docs/components/steps",
  //   tag: false,
  //   deprecate: false,
  // },
  // {
  //   id: generatedID.v4(),
  //   name: "Switch",

  //   href: "/docs/components/switch",
  //   tag: false,
  //   deprecate: false,
  // },
  // {
  //   id: generatedID.v4(),
  //   name: "Table",

  //   href: "/docs/components/table",
  //   tag: false,
  //   deprecate: false,
  // },
  // {
  //   id: generatedID.v4(),
  //   name: "Tabs",

  //   href: "/docs/components/tabs",
  //   tag: false,
  //   deprecate: false,
  // },
  // {
  //   id: generatedID.v4(),
  //   name: "Text Area",

  //   href: "/docs/components/textArea",
  //   tag: false,
  //   deprecate: false,
  // },
  // {
  //   id: generatedID.v4(),
  //   name: "Toast",

  //   href: "/docs/components/toast",
  //   tag: false,
  //   deprecate: false,
  // },

  // {
  //   id: generatedID.v4(),
  //   name: "Input",

  //   href: "/docs/components/input",
  //   tag: false,
  //   deprecate: false,
  // },
  // {
  //   id: generatedID.v4(),
  //   name: "Timeline",

  //   href: "/docs/components/timeline",
  //   tag: false,
  //   deprecate: false,
  // },
  {
    id: generatedID.v4(),
    name: "Tooltip",

    href: "/docs/components/tooltip",
    tag: false,
    deprecate: false,
  },
  // {
  //   id: generatedID.v4(),
  //   name: "Upload",

  //   href: "/docs/components/upload",
  //   tag: false,
  //   deprecate: false,
  // },
]);

export const gettingStaredRoutes = ref<RouterPath[]>([
  {
    id: generatedID.v4(),
    name: "Introduction",
    href: "/docs/getting-started/introduction",
  },
  {
    id: generatedID.v4(),
    name: "Typography",
    href: "/docs/getting-started/typography",
  },
  {
    id: generatedID.v4(),
    name: "Colors",
    href: "/docs/getting-started/colors",
  },
  {
    id: generatedID.v4(),
    name: "Dark Mode",
    href: "/docs/getting-started/dark-mode",
  },
]);

export const quickAccessRoute = ref<RouterPath[]>([
  {
    id: generatedID.v4(),
    name: "Installation",
    href: "/docs/getting-started/introduction",
  },
  {
    id: generatedID.v4(),
    name: "Figma",
    href: "https://keepdesign.io/",
  },
  {
    id: generatedID.v4(),
    name: "Typography",
    href: "/docs/getting-started/typography",
  },
  {
    id: generatedID.v4(),
    name: "Colors",
    href: "/docs/getting-started/colors",
  },
  {
    id: generatedID.v4(),
    name: "Layout",
    href: "/docs/layout/column",
  },
  {
    id: generatedID.v4(),
    name: "Dark Mode",
    href: "/docs/getting-started/dark-mode",
  },
]);

export const layoutRoutes = ref<RouterPath[]>([
  {
    id: generatedID.v4(),
    name: "Container",
    href: "/docs/layout/container",
  },
  {
    id: generatedID.v4(),
    name: "Column",
    href: "/docs/layout/column",
  },
  {
    id: generatedID.v4(),
    name: "Flex",
    href: "/docs/layout/flex",
  },
  {
    id: generatedID.v4(),
    name: "Grid",
    href: "/docs/layout/grid",
  },
]);

export const navbarRoutes = ref<RouterPath[]>([
  {
    id: generatedID.v4(),
    href: "https://keepdesign.io",
    name: "Figma",
    redirect: true,
  },
  {
    id: generatedID.v4(),
    href: "/docs/getting-started/introduction",
    name: "Documentation",
    redirect: false,
  },
  {
    id: generatedID.v4(),
    href: "/blog",
    name: "Blog",
    redirect: false,
  },
]);

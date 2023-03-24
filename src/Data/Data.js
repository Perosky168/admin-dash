// Sidebar imports
import {
    UilEstate,
    UilUsersAlt,
    UilChart,
} from "@iconscout/react-unicons";


// Sidebar Data
export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",
    },
    {
        icon: UilUsersAlt,
        heading: "Visitors",
    },
    {
        icon: UilChart,
        heading: "Analytics",
    },
];

export const mockTransactions = [
    {
        txId: "01e4dsa",
        user: "johndoe",
        date: "2021-09-01",
        cost: "43.95",
    },
    {
        txId: "0315dsaa",
        user: "jackdower",
        date: "2022-04-01",
        cost: "133.45",
    },
    {
        txId: "01e4dsa",
        user: "aberdohnny",
        date: "2021-09-01",
        cost: "43.95",
    },
    {
        txId: "51034szv",
        user: "goodmanave",
        date: "2022-11-05",
        cost: "200.95",
    },
    {
        txId: "0a123sb",
        user: "stevebower",
        date: "2022-11-02",
        cost: "13.55",
    },
    {
        txId: "01e4dsa",
        user: "aberdohnny",
        date: "2021-09-01",
        cost: "43.95",
    },
    {
        txId: "120s51a",
        user: "wootzifer",
        date: "2019-04-15",
        cost: "24.20",
    },
    {
        txId: "0315dsaa",
        user: "jackdower",
        date: "2022-04-01",
        cost: "133.45",
    },
];

export const cardsData = [
    {
        title: "Joiners",
        color: {
            backGround: "#980525",
            boxShadow: "0px 10px 20px 0px #ec0738",
        },
        barValue: 40,
        value: "15",
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
    {
        title: "Partnerships",
        color: {
            backGround: "#980525",
            boxShadow: "0px 10px 20px 0px #ec0738",
        },
        barValue: 40,
        value: "14",
        series: [
            {
                name: "Revenue",
                data: [10, 100, 50, 70, 80, 30, 40],
            },
        ],
    },
    {
        title: "Stay in touch",
        color: {
            backGround:
                "#980525",
            boxShadow: "0px 10px 20px 0px #ec0738",
        },
        barValue: 20,
        value: "7",
        series: [
            {
                name: "Expenses",
                data: [10, 25, 15, 30, 12, 15, 20],
            },
        ],
    },
];
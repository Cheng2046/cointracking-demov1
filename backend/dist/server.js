"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const app = (0, express_1.default)();
app.use(cors());
//assuming the data is fetched from api and restructured as below:
const data = [
    { name: "bitcoin",
        price: 20663,
        volume: 27723823830.831463,
        change: -7.449959719841799
    },
    { name: "ethereum",
        price: 1091.09,
        volume: 18653497664.960316,
        change: -9.701532370734554
    },
    { name: "litecoin",
        price: 46.53,
        volume: 695559207.962134,
        change: -7.26946523113914
    },
    { name: "monero",
        price: 111.54,
        volume: 102917364.3785909,
        change: -2.601060671760345
    },
    { name: "ripple",
        price: 0.32916,
        volume: 1572685966.7430055,
        change: -2.218067916518564
    },
    { name: "dogecoin",
        price: 0.056815,
        volume: 630566451.6696509,
        change: -5.910284037517298
    },
    { name: "dash",
        price: 43.46,
        volume: 97239466.82712093,
        change: -3.6036809760237163
    },
    { name: "maidsafecoin",
        price: 0.15464,
        volume: 2598.5114992947274,
        change: -5.6338254172029245
    },
    { name: "lisk",
        price: 0.992497,
        volume: 12559060.914842503,
        change: -6.466844900269553
    },
    { name: "storjcoinx",
        price: 0.00291264,
        volume: 2598.5114992947274,
        change: -5.6338254172029245 }
];
app.get('/', (req, res) => {
    res.json(data);
});
app.listen(5000, () => console.log("Server running"));
